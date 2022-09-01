import React from 'react'
import Card from '../Card/Card'

const Home = (props) => {
    const pokemons = props.pokelist;

    return (
        <div className='container my-3'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
            </nav>
            <div className='row'>
                {
                    pokemons.map((pokemon, index) => {
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