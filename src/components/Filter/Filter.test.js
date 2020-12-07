import React from 'react'
import userEvent from '@testing-library/user-event';
import { render } from '../../redux/testUtils'
import Filter from './index'

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

describe('Filter', () => {
  it('Set filter SHOW_COMPLETED', () => {
    const store = createStore(reducer, { visibilityFilter: 'SHOW_ALL' });
    const result = render(<Filter />, { store });

    userEvent.click(result.getByTestId('show-completed'));
    expect(store.getState().visibilityFilter).toEqual('SHOW_COMPLETED');
  });

  it('Set filter to SHOW_UNCOMPLETED', () => {
    const store = createStore(reducer, { visibilityFilter: 'SHOW_ALL' });
    const result = render(<Filter />, { store });

    userEvent.click(result.getByTestId('show-uncompleted'));
    expect(store.getState().visibilityFilter).toEqual('SHOW_UNCOMPLETED');
  });

  it('Set filter to SHOW_ALL', () => {
    const store = createStore(reducer, { visibilityFilter: 'SHOW_COMPLETED' });
    const result = render(<Filter />, { store });

    userEvent.click(result.getByTestId('show-all'));
    expect(store.getState().visibilityFilter).toEqual('SHOW_ALL');
  });
});
