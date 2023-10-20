import React, { useEffect, useState } from 'react';
import pokemonService from '../Services/pokemonService';
import versionService from '../Services/versionService';
import { useParams } from 'react-router-dom';
import Pokemon from '../Components/Pokemon';

const PokemonVersions = () => {
    const [version, setVersion] = useState([]);
    const {name}= useParams()
    const fetchVersion = async () =>{
        try {
            const response = await versionService.getVersionServiceById(name)
            const res = await versionService.getVersionGroupe(response.data.version_group.name);
            const res2 = await pokemonService.getPokemonByGeneration(res.data.generation.name);
            res2.data.pokemon_species.sort((firstItem, secondItem)=>
            firstItem.url.substring(41).replaceAll("/", "") -
            secondItem.url.substring(41).replaceAll("/", ""))
            setVersion(res2.data.pokemon_species)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchVersion()
    },[])
console.log(version)
    return ( <div className={"d-flex flex-wrap gap-2 justify-content-center"}>
        {version.map(v =>{
            return <Pokemon pokemon={v} />
        })}
    </div> );
}
 
export default PokemonVersions;