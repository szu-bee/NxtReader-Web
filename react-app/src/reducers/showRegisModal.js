const showRegisModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_REGIS_MODAL':
      return true
    case 'CLOSE_REGIS_MODAL':
      return false
    default:
      return state
  }
}

export default showRegisModal
