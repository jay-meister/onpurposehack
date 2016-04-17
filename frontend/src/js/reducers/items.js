export const items = (state = [], action) => {
  switch (action.type) {
  case 'LOAD_ITEMS':
    console.log('LOAD_ITEMS reducer', action)
    return state.concat(action.payload)
  default:
    return state
  }
}
