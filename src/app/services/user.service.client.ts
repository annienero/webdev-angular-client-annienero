import {Injectable} from '@angular/core';

//TODO singleton

@Injectable()
export class UserServiceClient {

    login(username, password) {
        const userObj = {
            username: username,
            password: password
        }
        return fetch('http://localhost:3000/api/login', { //TODO local
            body: JSON.stringify(userObj),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    createUser(username, password) {
        const userObj = {
            username: username,
            password: password
        }
        return fetch('http://localhost:3000/api/user', { //TODO local
            body: JSON.stringify(userObj),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }) 
    }
}