import axios from "axios";

function getPokemonGeneration(){
    return axios.get("https://pokeapi.co/api/v2/generation/")
}
export default {
    getPokemonGeneration
}