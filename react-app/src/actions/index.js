const LOGIN_MODAL = 'LOGIN_MODAL'
const REGIS_MODAL = 'REGIS_MODAL'

const OPEN = 'OPEN'
const CLOSE = 'MODAL'

const Intro = {
  loginModal(payload)  {
    return {
      type: LOGIN_MODAL, 
      payload
    }
  },
  regisModal(payload) {
    return {
      type: REGIS_MODAL,
      payload
    }
  }
}