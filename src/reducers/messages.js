const messages = (state = [], action) => {

    switch (action.type) {
        case 'ADD_MESSAGES':
            return [...state, action.text]
        default:
            return state
    }

}

export default messages