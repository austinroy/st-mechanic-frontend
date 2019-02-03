const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ROUTE_SUCCESS':
      return Object.assign({}, state, {
        activeRoute: action.route
      })
    default:
      return state
  }
}
