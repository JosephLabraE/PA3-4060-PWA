import { createStore } from 'redux';
import seguimientoReducer from './seguimiento';

export const store = createStore(seguimientoReducer);
