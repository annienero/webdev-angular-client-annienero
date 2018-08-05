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
        fetch('http://localhost:3000/api/course/' + courseId + '/section', { //TODO local
            body: JSON.stringify(sectionObj),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    }

    findAllSectionsForCourse(courseId) {
        return fetch('http://localhost:3000/api/course/' + courseId + '/section')
        .then(response => response.json())
    }

    deleteSection(sectionId) {
        return fetch('http://localhost:3000/api/section/' + sectionId, {
            method: 'delete'
        })
        .then(response => response.json())
    }

    findSectionById(sectionId) {
        return fetch('http://localhost:3000/api/section/' + sectionId)
        .then(response => response.json())
    }

    updateSection(sectionId, section) {
        return fetch('http://localhost:3000/api/section/' + sectionId, {
            body: JSON.stringify(section),
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
    }

    enrollStudentInSection(sectionId) {
        return fetch('http://localhost:3000/api/section/' + sectionId, {
            method: 'post',
            credentials: 'include'
        }).then(response => response.json())
    }

    findSectionsForStudent() {
        return fetch('http://localhost:3000/api/section', {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json())
    }

    dropCourse(sectionId, enrollId) {
        return fetch('http://localhost:3000/api/section/' + sectionId + '/drop/' + enrollId, {
            method: 'delete',
            credentials: 'include'
        }).then(response => response.json())
    }
}