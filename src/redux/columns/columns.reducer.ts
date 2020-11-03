import { createReducer } from '@reduxjs/toolkit';

import { editColumnName } from './columns.actions';

import { Columns } from '../data';

export const columnsReducer = createReducer(Columns, {
  [editColumnName.type]: (state, action) => {
    const [id, value] = action.payload;
    return state.map((item) => {
      if (item.id === id) {
        return { ...item, name: value };
      }
      return item;
    });
  },
});
