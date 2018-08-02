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
        return fetch('http://localhost:3000/api/login', { //TODO local
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
        return fetch('http://localhost:3000/api/user', { //TODO local
            body: JSON.stringify(userObj),
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    profile() {
        return fetch('http://localhost:3000/api/profile', {
            credentials: 'include',
        }) //TODO local
        .then(response => response.json())
    }

    findUserById(userId) {
        return fetch('http://localhost:3000/api/user/' + userId) //TODO local
        .then(response => response.json())
    }

    logout() {
        return fetch('http://localhost:3000/api/logout', {
            method: 'post',
            credentials: 'include'
        }) //TODO local
    }

    updateUser(user) {
        return fetch('http://localhost:3000/api/profile', {
            method: 'put',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }) //TODO local
        .then(response => response.json())
    }
}