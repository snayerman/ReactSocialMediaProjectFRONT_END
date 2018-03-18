/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  ACCESS_NEWSFEED,
  REQUEST_ERROR,
  CLEAR_ERROR,
  ADD_NEWSFEED,
  ADD_FRIEND,
  DELETE_FRIEND,
  CHANGE_NAME,
  CHANGE_PASSWORD
} from './constants'

/**
 * Sets the form state
 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState.username The new text of the username input field of the form
 * @param  {string} newFormState.password The new text of the password input field of the form
 */
export function changeForm (newFormState) {
  return {type: CHANGE_FORM, newFormState}
}

export function setAuthState (newAuthState) {
  return {type: SET_AUTH, newAuthState}
}

export function sendingRequest (sending) {
  return {type: SENDING_REQUEST, sending}
}

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function loginRequest (data) {
  return {type: LOGIN_REQUEST, data}
}

export function addNewsfeed (text) {
  return {type: ADD_NEWSFEED, text}
}

export function addFriend (name) {
  return {type: ADD_FRIEND, name}
}

export function deleteFriend (name) {
  return {type: DELETE_FRIEND, name}
}

export function changeName (name) {
  return {type: CHANGE_NAME, name}
}

export function changePassword (password) {
  return {type: CHANGE_PASSWORD, password}
}

export function logout () {
  return {type: LOGOUT}
}

export function registerRequest (data) {
  return {type: REGISTER_REQUEST, data}
}

export function requestError (error) {
  return {type: REQUEST_ERROR, error}
}

export function accessNewsfeed (error) {
  return {type: ACCESS_NEWSFEED, error}
}

/**
 * Sets the `error` state as empty
 */
export function clearError () {
  return {type: CLEAR_ERROR}
}
