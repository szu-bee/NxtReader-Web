const showLoginModal = () => ({
  type: 'SHOW_LOGIN_MODAL'
})

const closeLoginModal = () => ({
  type: 'CLOSE_LOGIN_MODAL'
})

const showRegisModal = () => ({
  type: 'SHOW_REGIS_MODAL'
})

const closeRegisModal = () => ({    
  type: 'CLOSE_REGIS_MODAL'
})

const ok = () => ({
  type: 'OK'
})

const cancel = () => ({
  type: 'CANCEL'
})

export { 
  showLoginModal,
  closeLoginModal,
  showRegisModal,    
  closeRegisModal,
  ok,
  cancel
}
