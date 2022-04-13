import axios from "axios";
import {LUDI_API, USERS_API} from "./Config";

async function findAllGladiateur(id, ludi_id) {
    return axios.get(USERS_API + "/" + id + "/ludis/" + ludi_id + "/gladiateurs").then(response => response.data["hydra:member"]);
}

async function findAll(id) {
    return axios.get(USERS_API + "/" + id + "/ludis").then(response => response.data["hydra:member"]);
}

async function find(id) {
    return axios.get(LUDI_API + "/" + id).then(response => response.data);
}

function deleteLudis(id) {
    return axios.delete(LUDI_API + "/" + id).then(async response => {
        return response;
    });
}

function update(id, users) {
    return axios.put(LUDI_API + "/" + id, users).then(async response => {
        return response;
    });
}

function create(users) {
    return axios.post(LUDI_API, users).then(async response => {
        return response;
    });
}

export default {
    findAll,
    findAllGladiateur,
    find,
    create,
    update,
    delete: deleteLudis
};