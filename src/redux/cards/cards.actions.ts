import { createAction } from '@reduxjs/toolkit';

export const addCard = createAction<[number, string, string | null]>('ADD_CARD');

export const deleteCard = createAction<number>('DELETE_CARD');

export const editCardName = createAction<[number, string]>('EDIT_CARD_NAME');

export const addDescription = createAction<[number, string]>('ADD_DESCRIPTION');

export const deleteDescription = createAction<number>('DELETE_DESCRIPTION');
