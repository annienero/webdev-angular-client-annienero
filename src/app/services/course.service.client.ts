//TODO singleton

export class CourseServiceClient {
    findAllCourses() {
        return fetch("http://localhost:8080/api/course")
            .then(response => response.json())
    }
}