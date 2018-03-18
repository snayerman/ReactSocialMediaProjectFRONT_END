 import * as api from '../api';
 import axios from 'axios'

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

export function registerUser (data) {
   axios.post('/signup', data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function changeForm (newFormState) {
  return {type: CHANGE_FORM, newFormState}
}

export function setAuthState (newAuthState) {
  return {type: SET_AUTH, newAuthState}
}

export function sendingRequest (sending) {
  return {type: SENDING_REQUEST, sending}
}

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

export function clearError () {
  return {type: CLEAR_ERROR}
}
