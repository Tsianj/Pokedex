import React, {useEffect, useState} from 'react';
import pokemonService from '../Services/pokemonService';
import { useParams } from 'react-router-dom/dist';
import Pokemon from '../Components/Pokemon';

const PokemonGen = () => {
    const [gen, setGen] = useState([]);
    const {name}= useParams()
    const fetchGen = async () =>{
        try {
            const response = await pokemonService.getPokemonByGeneration(name);
            const res = response.data.pokemon_species.sort((firstItem, secondItem)=>
            firstItem.url.substring(41).replaceAll("/", "") -
            secondItem.url.substring(41).replaceAll("/", ""))
            console.log(res);
            setGen(response.data.pokemon_species)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchGen()
    },[])
    const upperCase = (string) => {
        let strCopy = string.split("-")
        let startString = strCopy[0];
        let endString = strCopy[1].toUpperCase();
        return startString.charAt(0).toUpperCase()+startString.substring(1) + ' ' + endString

    }
    // console.log(gen);
    return ( <>
        <h1 className={"text-center"} style={{color: "#ffce06", padding: "5px"}}>{upperCase(name)}</h1>
        <div className={"d-flex flex-wrap gap-2 justify-content-center"}>
        
        {gen.map(g =>{
            return <Pokemon key={g.pokemon_species} pokemon={g} />
        })}
    </div>
    </> );
}
 
export default PokemonGen;