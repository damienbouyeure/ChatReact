const messages = (state = [], action) => {

    switch (action.type) {
        case 'ADD_MESSAGE':
            console.warn(action)
            return [...state, {message: action.message, username: action.username}]
        default:
            return state
    }

}

export default messages