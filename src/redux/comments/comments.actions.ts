import { createAction } from '@reduxjs/toolkit';

export const addComment = createAction<[number, string, string | null]>('ADD_COMMENT');

export const editComment = createAction<[number, string]>('EDIT_COMMENT');

export const deleteComment = createAction<number>('DELETE_COMMENT');
