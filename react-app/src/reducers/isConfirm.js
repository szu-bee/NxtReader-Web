const showConfirm = (state = false, action) => {
  switch (action.type) {
    case 'OK':
      return true
    case 'CANCEL':
      return false 
    default:
      return state
  }
}

export default showConfirm
