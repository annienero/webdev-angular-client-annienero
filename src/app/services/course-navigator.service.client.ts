//TODO singleton


export class CourseNavigatorServiceClient {
    findAllCourses() {
        return fetch("http://localhost:8080/api/course")
            .then(response => response.json())
    }

    findAllModulesForCourse(courseId) {
        return fetch("http://localhost:8080/api/course/" + courseId + "/module")
            .then(response => response.json())
    }

    findAllLessonsForModule(moduleID) {
        return fetch("http://localhost:8080/api/course/0/module/" + moduleID + "/lesson")
            .then(response => response.json())
    }

    findAllWidgetsForLesson(lessonId) {
        return fetch("http://localhost:8080/api/lesson/" + lessonId + "/widget")
            .then(response => response.json())
    }
}