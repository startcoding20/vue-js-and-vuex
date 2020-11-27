// define app store actions names
export const ACTION_APP_INCREMENT = 'ActionAppIncrement'
export const ACTION_APP_DECREMENT = 'ActionAppDecrement'
export const ACTION_APP_NAME = 'ActionAppName'

// define app store mutations names
const INCREMENT_VALUE = 'IncrementValue'
const DECREMENT_VALUE = 'DecrementValue'
const NAME_VALUE = 'NameValue'

// initial app state
const state = {
  counter: 0,name:'manny',msg:''
}

const getters = {
  getCounter (state) {
    return state.counter
  },
  getName (state){
    return state.name
  }
}

// app store actions
const actions = {
  [ACTION_APP_INCREMENT] (context) {
    context.commit(INCREMENT_VALUE);
  },
  [ACTION_APP_DECREMENT] (context) {
    context.commit(DECREMENT_VALUE);
  },
  [ACTION_APP_NAME] (context,name) {
    context.commit(NAME_VALUE,name);
  }
}

// app store mutations
const mutations = {
  [INCREMENT_VALUE] (state) {
    state.counter = state.counter + 1;
  },
  [DECREMENT_VALUE] (state) {
    state.counter = state.counter -1;
  },
  [NAME_VALUE] (state,name) {
    state.name = name;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}