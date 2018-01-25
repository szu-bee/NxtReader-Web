
const showLoginModal = payload => ({
  type: 'SHOW_LOGIN_MODAL',
  payload
})

const closeLoginModal = payload => ({
  type: 'CLOSE_LOGIN_MODAL',
  payload
})

const loginModalVisible = 'LOGIN_MODAL_VISIBLE'

const showRegisModal = (payload) => ({
  type: 'SHOW_REGIS_MODAL',
  payload
})

const closeRegisModal = (payload) => ({
  type: 'CLOSE_REGIS_MODAL',
  payload
})

const regisModalVisible = 'REGIS_MODAL_VISIBLE'

export { 
  showLoginModal, 
  closeLoginModal, 
  loginModalVisible,
  showRegisModal,
  closeRegisModal,
  regisModalVisible
}
