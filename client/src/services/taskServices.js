import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTasks(task) {
    return axios.post(apiUrl, task);
}

export function updateTasks(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}