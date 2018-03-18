import {hashSync, genSaltSync, compareSync} from 'bcryptjs'
import genSalt from './salt'
import {connect} from 'react-redux'

let users
let localStorage
const salt = genSaltSync(10)

if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  localStorage = global.window.localStorage
}

const server = {
  init () {
    if (localStorage.users === undefined || !localStorage.encrypted) {
      const juan = 'juan'
      const juanSalt = genSalt(juan)
      const juanPass = hashSync('password', juanSalt)

      users = {
        [juan]: hashSync(juanPass, salt)
      }

      localStorage.users = JSON.stringify(users)
      localStorage.encrypted = true
    } else {
      users = JSON.parse(localStorage.users)
    }
  },

  login (username, password) {
    const userExists = this.doesUserExist(username)

    return new Promise((resolve, reject) => {
      if (userExists && compareSync(password, users[username])) {
        resolve({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        })
      } else {
        let error
        if (userExists) {
          error = new Error('Wrong password')
        } else {
          error = new Error('User doesn\'t exist')
        }

        reject(error)
      }
    })
  },
  register (username, password) {
    return new Promise((resolve, reject) => {
      // If the username isn't used, hash the password with bcrypt to store it in localStorage
      if (!this.doesUserExist(username)) {
        users[username] = hashSync(password, salt)
        localStorage.users = JSON.stringify(users)

        resolve({registered: true})
      } else {
        reject(new Error('Username already in use'))
      }
    })
  },

  logout () {
    return new Promise(resolve => {
      localStorage.removeItem('token')
      resolve(true)
    })
  },

  doesUserExist (username) {
    return !(users[username] === undefined)
  }
}

server.init()

export default server
