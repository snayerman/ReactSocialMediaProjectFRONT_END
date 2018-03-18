/*
 * The reducer takes care of state changes in our app through actions
 */

import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  ADD_NEWSFEED,
  ADD_FRIEND,
  DELETE_FRIEND,
  REGISTER_REQUEST,
  CLEAR_ERROR,
  CHANGE_NAME,
  CHANGE_PASSWORD
} from '../controller/constants'
import auth from '../auth'

// The initial application state
let initialState = {
  name: 'Yeng Tan',
  formState: {
    username: '',
    password: ''
  },
  error: '',
  currentlySending: false,
  loggedIn: auth.loggedIn(),
  posts: [],
  categories: [
    'Personal',
    'College',
    'Gossip',
    'Sport'
  ],
  ListOfFriends: [
    'Timeline',
    'Costin Pirvu',
    'Alex Boyd',
    'Jessie Smith',
    'Alli Dinapoli'
  ],
  ListOfPeople: [
    'Costin Pirvu',
    'Alex Boyd',
    'Jessie Smith',
    'Paul Stoner',
    'Alli Dinapoli',
    'Alidod Ghazvini',
    'Andrew Cofano'
  ]
}

// Takes care of changing the application state
function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        formState: action.newFormState
      }
    case SET_AUTH:
      return {
        ...state,
        loggedIn: action.newAuthState
      }
    case SENDING_REQUEST:
      return {
        ...state,
        currentlySending: action.sending
      }
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.error
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: ''
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        formState: action.data
      }
    case ADD_NEWSFEED:
      return {
        ...state,
        posts: state.posts.concat(action.text)
      }
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        formState: {
          ...state.formState,
          password: action.password
        }
      }
    case ADD_FRIEND:
      return {
        ...state,
        ListOfFriends: state.ListOfFriends.concat(action.name)
      }
    case DELETE_FRIEND:
      return {
        ...state,
        ListOfFriends: state.ListOfFriends.filter(function (e) {
          return e !== action.name
        })
      }
    default:
      return state
  }
}

export default reducer
