const username = (state = [], action) => {

    switch (action.type) {
        case 'ADD_USERNAME':
            return [...state, action.username]
        default:
            return state
    }

}

export default username