export const ACTION_APP_MESSAGE = 'ActionAppMessage'

const MESSAGE_VALUE = 'MessageValue'

const state = {
    msg:''
}

const getters = {
    getMsg (state){
        return state.msg
    }
}

const actions = {
    [ACTION_APP_MESSAGE] (context,msg) {
        context.commit(MESSAGE_VALUE,msg);
    }
}

const mutations = {
    [MESSAGE_VALUE] (state,msg) {
        state.msg = msg;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}