import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setValue } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState),
  on(setValue, (_, { value }) => value)
);