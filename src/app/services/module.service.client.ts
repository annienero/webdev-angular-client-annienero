//TODO singleton

export class ModuleServiceClient {
    findAllLessonsForModule(moduleID) {
        return fetch("http://localhost:8080/api/course/0/module/" + moduleID + "/lesson")
            .then(response => response.json())
    }
}