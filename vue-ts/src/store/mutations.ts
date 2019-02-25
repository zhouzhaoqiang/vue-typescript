import state from './state'
import { AuthorTypes } from './types'
import { MutationTree  } from 'vuex'

const mutations: MutationTree<AuthorTypes> = {
  SET_AUTHOR(state: AuthorTypes, data: string) {
    state.author = data;
  }
}

export default mutations