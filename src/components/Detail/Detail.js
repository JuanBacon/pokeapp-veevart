import React from 'react'
import {useParams} from 'react-router-dom'

const Detail =() => {

    let param = useParams()
    console.log(param);
    
    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Detail