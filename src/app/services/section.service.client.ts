import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionServiceClient {
    createSection(courseId, sectionName, seats) {
        const sectionObj = {
            sectionName: sectionName,
            seats: seats,
            courseId: courseId
        }
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/course/' + courseId + '/section', {
            body: JSON.stringify(sectionObj),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findAllSectionsForCourse(courseId) {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/course/' + courseId + '/section')
        .then(response => response.json())
    }

    deleteSection(sectionId) {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/section/' + sectionId, {
            method: 'delete'
        })
        .then(response => response.json())
    }

    findSectionById(sectionId) {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/section/' + sectionId)
        .then(response => response.json())
    }

    updateSection(sectionId, section) {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/section/' + sectionId, {
            body: JSON.stringify(section),
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
    }

    enrollStudentInSection(sectionId) {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/section/' + sectionId, {
            method: 'post',
            credentials: 'include'
        }).then(response => response.json())
    }

    findSectionsForStudent() {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/section', {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json())
    }

    dropCourse(sectionId, enrollId) {
        return fetch('https://webdev-server-node-nero.herokuapp.com/api/section/' + sectionId + '/drop/' + enrollId, {
            method: 'delete',
            credentials: 'include'
        }).then(response => response.json())
    }
}