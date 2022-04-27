import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
  },
  mutations: {
    setUsername(state: any, username: string) {
      state.username = username;
    }, 
  },
  actions: {
    usernameAsyn(store: any, username: string){
      new Promise((resolve: any, reject: any)=>{
        console.log("actions异步执行,3秒后修改username")
        setTimeout(()=>{
          store.commit('setUsername', username+" action")
          resolve("actions修改username成功")
        }, 3000)
      })
      .then((respnose: any)=>{
        console.log(respnose)
      })
    }
  },
  modules: {
  },
  getters: {
    ttt(state: any) {
      return "我是"+state.username
    }
  }
})
