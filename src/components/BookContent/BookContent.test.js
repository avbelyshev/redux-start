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
  it('Renders chapter title', () => {
    render(<BookContent />, { initialState });

    expect(screen.getByText('First chapter')).toBeInTheDocument();
  });

  it('Creates new chapter', async () => {
    const store = createStore(reducer, initialState);
    const result = render(<BookContent />, { store });
    userEvent.type(result.getByTestId('add-chapter-input'), 'Second chapter');
    userEvent.click(result.getByTestId('add-chapter-btn'));

    await waitFor(() => expect(result.getByText('Second chapter')).toBeInTheDocument());
  });
});
