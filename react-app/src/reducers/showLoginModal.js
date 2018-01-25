const showLoginModal = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_LOGIN_MODAL':
            return true
        case 'CLOSE_LOGIN_MODAL':
            return false
        default:
            return state
    }
}

export default showLoginModal