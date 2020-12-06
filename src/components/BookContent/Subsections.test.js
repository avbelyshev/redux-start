import React from 'react'
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../redux/testUtils'
import BookContent from './index'
import { waitFor } from '@testing-library/react';

import { createStore } from 'redux'
import reducer from '../../redux/reducers';

jest.mock('redux-undo', () => ({
  __esModule: true,
  default: reducer => (state = {}, action = {}, ...slices) => ({
    past: [],
    present: reducer(state.present || state, action, ...slices),
    future: [],
  }),
  excludeAction: () => { },
}));

const initialState = {
  content: {
    entries: [
      {
        title: 'First chapter',
        completed: true,
        subsections: [
          { title: 'Subsection 1', completed: true },
          { title: 'Subsection 2', completed: false }
        ]
      }
    ]
  }
}

describe('BookContent', () => {
  it('Renders subsections titles', () => {
    render(<BookContent />, { initialState });

    expect(screen.getByText(/Subsection 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Subsection 2/i)).toBeInTheDocument();
  });

  it('Renders only completed subsections if set filter SHOW_COMPLETED', () => {
    render(<BookContent />,
      {
        initialState: {
          ...initialState,
          visibilityFilter: 'SHOW_COMPLETED'
        }
      }
    );

    expect(screen.getByText(/Subsection 1/i)).toBeInTheDocument();
    expect(screen).toEqual(expect.not.stringContaining('Subsection 2'));
  });

  it('Renders only uncompleted subsections if set filter SHOW_UNCOMPLETED', () => {
    render(<BookContent />,
      {
        initialState: {
          ...initialState,
          visibilityFilter: 'SHOW_UNCOMPLETED'
        }
      }
    );

    expect(screen.getByText(/Subsection 2/i)).toBeInTheDocument();
    expect(screen).toEqual(expect.not.stringContaining('Subsection 1'));
  });

  it('Creates new subsection', async () => {
    const store = createStore(reducer, initialState);
    const result = render(<BookContent />, { store });
    userEvent.type(result.getByTestId('chapter-0-add-subsection-input'), 'Subsection 3');
    userEvent.click(result.getByTestId('chapter-0-add-subsection-btn'));

    await waitFor(() => expect(result.getByText(/Subsection 3/i)).toBeInTheDocument());
  });
});
