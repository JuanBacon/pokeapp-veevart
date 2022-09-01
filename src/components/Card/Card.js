import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
    return (
        <div className='card' style={{width: "18rem"}}>
            <img className="card-img-top" style={{width: "18rem"}} src={props.pokemon.sprites.front_default}></img>
            <div className='card-body'>
                <h5 className='card-title text-capitalize'>{props.pokemon.name}</h5>
                <Link className="btn btn-primary" to={props.pokemon.name}>Detalles</Link>
            </div>
        </div>
                    
    )
}

export default Card