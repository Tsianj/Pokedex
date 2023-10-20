import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import '../Styles/pokemonCard.css';
import pokemonService from "../Services/pokemonService";
import Loading from "./Loading";
import ListGroup from 'react-bootstrap/ListGroup';

const Pokemon = ({pokemon}) => {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokemonById = async () => {
        try {
            const response = await pokemonService.getPokemonById(pokemon.url.substring(41).replaceAll("/", ""))
            setCurrentPokemon(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemonById()
    }, []);

    return <>{loading == false ? <Card className={"col-3"}>
        <Link to={"/pokemon/details"} state={currentPokemon}>
            <Card.Img variant="top"
                      src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon.url.substring(41).replaceAll("/", "") + ".png"}/>
            <Card.Body>
                <Card.Title
                    className={"text-center"}>{currentPokemon.names != undefined && currentPokemon.names[4].name.charAt(0).toUpperCase() + currentPokemon.names[4].name.substring(1)} #{currentPokemon.id} <br />
                    {currentPokemon.names != undefined && currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.substring(1)}</Card.Title>
                <ListGroup variant="flush">
                    {currentPokemon.egg_groups.map(type => {
                       return <ListGroup.Item key={type.name}>{type.name}</ListGroup.Item>
                    })}
                </ListGroup>
            </Card.Body>
        </Link>
    </Card> :
        <Loading />
    }
    </>;
};

export default Pokemon;