import * as actions from './ActionTypes'

export const changeRoute = route => dispatch => {
  return dispatch(changeRouteSuccess(route))
}

export const changeRouteSuccess = route => {
  return {
    type: actions.CHANGE_ROUTE_SUCCESS,
    activeRoute: route
  }
}
