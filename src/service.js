import axios from "axios";

export function getAllSkills(successCB, errorCB) {
    axios.get(process.env.REACT_APP_SKILLS_URL)
    .then(successCB)
    .catch(errorCB);
}

export function postUser(successCB, errorCB) {
    axios.get(process.env.REACT_APP_SERVER_URL)
    .then(successCB)
    .catch(errorCB);
}