import axios from "axios";
import {GLADIATEUR_API, USERS_API} from "./Config";

async function findAll(id, ludi_id) {
    return axios.get(USERS_API + "/" + id + "/ludis/" + ludi_id + "/gladiateurs").then(response => response.data["hydra:member"]);
}

async function find(id) {
    return axios.get(GLADIATEUR_API + "/" + id).then(response => response.data);
}

function deleteLudis(id) {
    return axios.delete(GLADIATEUR_API + "/" + id).then(async response => {
        return response;
    });
}

function update(id, users) {
    return axios.put(GLADIATEUR_API + "/" + id, users).then(async response => {
        return response;
    });
}

function create(users) {
    return axios.post(GLADIATEUR_API, users).then(async response => {
        return response;
    });
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteLudis
};