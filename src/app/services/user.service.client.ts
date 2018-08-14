import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceClient {

    login(username, password) {
        const userObj = {
            username: username,
            password: password
        }
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/login', {
            body: JSON.stringify(userObj),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    createUser(username, password) {
        const userObj = {
            username: username,
            password: password
        }
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/user', { 
            body: JSON.stringify(userObj),
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    profile() {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/profile', {
            credentials: 'include',
        }) 
        .then(response => response.json())
    }

    findUserById(userId) {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/user/' + userId)
        .then(response => response.json())
    }

    logout() {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        }) 
    }

    updateUser(user) {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/profile', {
            method: 'put',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
    }
}