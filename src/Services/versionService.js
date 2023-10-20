import axios from "axios";

function getVersionService() {
    return axios.get("https://pokeapi.co/api/v2/version?limit=100")
}
function getVersionServiceById(name) {
    return axios.get("https://pokeapi.co/api/v2/version/"+name)
}
function getVersionGroupe(id) {
    return axios.get("https://pokeapi.co/api/v2/version-group/"+id)
}

export default {
    getVersionService,
    getVersionServiceById,
    getVersionGroupe
}