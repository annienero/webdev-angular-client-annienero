import {Injectable} from '@angular/core';

//TODO singleton

@Injectable()
export class UserServiceClient {

    login(username, password) {
        alert(username + password)
    }

    createUser(username, password) {
        const userObj = {
            username: username,
            password: password
        }
        return fetch('http://localhost:3000/api/user', {
            body: JSON.stringify(userObj),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }) 
    }
}