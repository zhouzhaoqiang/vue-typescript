import { ActionTree } from 'vuex';
import { AuthorTypes } from './types'
import axios from 'axios';

import { login } from '@/api/user';

const actions: ActionTree<AuthorTypes, any> = {
  SET_AUTHOR_ALL({ commit, state: AuthorTypes}, data: string) {
    commit('SET_AUTHOR', data);
  }
};

export default actions;
