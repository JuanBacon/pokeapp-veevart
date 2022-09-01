import React from 'react'
import {useState, useEffect} from 'react'
import pokemons from '../../source/poke-json.json'
import Card from '../Card/Card'

const Home = () => {

    const [pokedata, setPokedata] = useState([])

    useEffect(() =>{
        setPokedata(pokemons)
    }, [])

    return (
        <div className='container my-3'>
            <h1>Home</h1>
            <div className='row'>
                {
                pokedata.map((pokemon, index) => {
                    return <div key={index} className='col-md-4 col-xs-12'>
                        <Card pokemon={pokemon}></Card>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Home