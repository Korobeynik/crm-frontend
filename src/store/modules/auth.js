import axios from "axios"
export default {

  state: {
    isAuth: false,
    status: '',
    token:  JSON.parse(localStorage.getItem('token') || null),
    user: JSON.parse(localStorage.getItem('user') || null),
    domain: null
  },
  mutations: {
    authRequest(state){
      state.status = 'loading'
    },
    setToken(state, token){
      state.status = 'success'
      state.token = token
    },
    authError(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
      localStorage.removeItem('user')
      document.location.reload()
    },
    setUser(state, user) {
      console.log(user)
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('domain', JSON.stringify(user.company.domain))
        state.user = user
      }
    },
    registerSocial() {
      console.log('111')
    }
  },
  actions: {
    // async registerSocial({commit}, provider) {
    //   console.log(provider)
    //   try {
    //     const { data: data } = await axios.post(`https://gateway.esl.in.ua/api/v1/user/social/${provider}/`,{
    //       headers: {
    //         "Access-Control-Allow-Origin": "*",
    //       }
    //     })
    //     console.log(data.data)
    //     commit('registerSocial')
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },
    registerSocial({commit}, provider) {
      return new Promise((resolve, reject) => {
        commit('registerSocial')
        const data = {
          provider: provider
        }
        axios.post(`https://gateway.esl.in.ua/api/v1/user/social/${provider}`,  data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          }
        })
          .then(resp => {
            console.log(resp.data)
            resolve(resp)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    register({commit}, user){
      console.log(user.email)
      return new Promise((resolve, reject) => {
        commit('authRequest')
        const data = {
          email: user.email
        }
        axios.post('https://gateway.esl.in.ua/api/v1/user/register',  data, {
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
          }
        })
          .then(resp => {
            console.log(resp.data)
            resolve(resp)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    login({commit}, user){
      console.log(user)
      return new Promise((resolve, reject) => {
        commit('authRequest')
        axios.get('https://gateway.esl.in.ua/api/v1/user/login', {params: {
          email: user.email,
          password: user.password
          }})
        .then(resp => {
            console.log(resp.data)
            const token = resp.data.access_token
            const user = resp.data.user
            console.log(token)
            localStorage.setItem('token', JSON.stringify(token))
            axios.defaults.headers.common['Authorization'] = token
            commit('setToken', token)
            commit('setUser', user)
            resolve(resp)
          })
          .catch(err => {
            commit('authError')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    getUid() {
      return 77
    },
    logout({commit}){
      console.log("logout")
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    token: state => state.token,
    user: s => s.user,
    domain: s => s.domain
  }

}