import { createReducer, on } from '@ngrx/store';
import * as actions from './filters.actions';

export const estadoInicial: actions.filtrosValidos = 'todos' as actions.filtrosValidos;

export const filtroReducer = createReducer(
  estadoInicial,
  on(actions.setFiltro, (state, { filtro }) => filtro),
);
