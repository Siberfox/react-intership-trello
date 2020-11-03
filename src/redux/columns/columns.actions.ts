import { createAction } from '@reduxjs/toolkit';

export const editColumnName = createAction<[number, string]>('EDIT_COLUMN_NAME');
