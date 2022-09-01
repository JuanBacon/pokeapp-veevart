import React from 'react'
import { Link, useParams } from 'react-router-dom'
import pokemons from '../../source/poke-json.json'


const Detail = () => {

    let param = useParams()
    let pokemon = {}

    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].name.toLowerCase().includes(param.pokemon.toLowerCase())) {
            pokemon = pokemons[i];
        }
    }

    return (
        <div className="container my-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
                    <li className="breadcrumb-item active text-capitalize" aria-current="page">Detalles {pokemon.name}</li>
                </ol>
            </nav>

            <div className="container my-4">
                <h1 className='text-capitalize'>{pokemon.name}</h1>
                <p className="fw-lighter">No.{pokemon.id}</p>
                <img src={pokemon.sprites.front_default}></img>
                <img src={pokemon.sprites.back_default}></img>
            </div>
            <div>
                <h3>Habilidades</h3>
                <ul>
                    {
                        pokemon.abilities.map((item, index) => {
                            return <li key={index}>
                                <p className="text-capitalize">{item.ability.name}</p>
                            </li>
                        })
                    }
                </ul>
                <h3>Movimientos</h3>
                <ul>
                    {
                        pokemon.moves.map((item, index) => {
                            return <li key={index}>
                                <p className="text-capitalize">{item.move.name}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Detail