import Vue from 'vue'
import Vuex from 'vuex'

import {

  SET_SCREEN_MODE,
  SET_FOLD_STATE,
  SET_OPEN_CLOSE,

  assets,
  deposites,
  notifications,
  userAssets,
  operations,
  projects,
  bills,
  menu

} from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenMode: {},
    close: false,
    fold: false,

    menu: menu(),
    assets: assets(),
    notifications: notifications(),
    projects: projects().children,
    operations: operations(),
    userAssets: userAssets(),
    deposites: deposites(),
    bills: bills()
  },
  getters: {
    screenMode: state => state.screenMode,
    menu: state => state.menu
  },
  mutations: {
    [SET_SCREEN_MODE](state, screenMode)
    {
      state.screenMode = screenMode
    },
    [SET_FOLD_STATE](state, fold)
    {
      state.fold = fold
    },
    [SET_OPEN_CLOSE](state, close)
    {
      state.close = close
    }
  },
  actions: {
  },
  modules: {
  }
})
