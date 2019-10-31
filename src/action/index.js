export const addMessages = (message,username) => ({
    type: 'ADD_MESSAGE',
    message,
    username,
})

export const addUser = username => ({
    type: 'ADD_USERNAME',
    username
})