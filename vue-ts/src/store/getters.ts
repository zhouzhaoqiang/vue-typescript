import state from './state'
import { AuthorTypes } from './types'
import { GetterTree } from 'vuex'

const getters: GetterTree<AuthorTypes, any> = {
  author: (state: AuthorTypes) => state.author,
}

export default getters