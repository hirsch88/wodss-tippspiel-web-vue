import { MutationTree } from 'vuex';

import {
  SIGN_IN_USER_FAILED, SIGN_IN_USER_REQUESTED, SIGN_IN_USER_SUCCESS,
} from './auth.mutations.types';
import { AuthState } from './auth.state';

export const mutations: MutationTree<AuthState> = {
  [SIGN_IN_USER_REQUESTED](state: AuthState): void {
    state.isAuthenticated = false;
    state.isFetching = true;
    state.hasFailed = false;
  },
  [SIGN_IN_USER_SUCCESS](state: AuthState, token: string): void {
    state.isAuthenticated = true;
    state.isFetching = false;
    state.hasFailed = false;
  },
  [SIGN_IN_USER_FAILED](state: AuthState, error: any): void {
    state.isAuthenticated = false;
    state.isFetching = false;
    state.hasFailed = true;
  },
};
