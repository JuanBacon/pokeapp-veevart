import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const [didResponseStatus, setDidResponse] = useState(true);

  const callApi = async () => {
    setData(null);
    if (search) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );

      setDidResponse(response.ok);
      const json = await response.json();
      setData(json);
    }
  };

  const changeValue = (evt) => {
    setSearch(evt.target.value);
    setDidResponse(true)
  };

  return (
    <div className="container my-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li
            className="breadcrumb-item active text-capitalize"
            aria-current="page"
          >
            Buscar
          </li>
        </ol>
      </nav>
      <div className="row">
          <div className="col-sm">
            <input
                type="text"
                className="form-control"
                onChange={(evt) => changeValue(evt)}
            ></input>
            <button className="btn btn-primary my-3" onClick={callApi}>
                Buscar
            </button>    
          </div>
          <div className="col-sm">
            {data ? (
                <div className="container my-0">
                <h1 className="text-capitalize">{data.name}</h1>
                <p className="fw-lighter">No.{data.id}</p>
                <img src={data.sprites.front_default}></img>
                <div>
                    <h3>Habilidades</h3>
                    <ul>
                    {data.abilities.map((item, index) => {
                        return (
                        <li key={index}>
                            <p className="text-capitalize">{item.ability.name}</p>
                        </li>
                        );
                    })}
                    </ul>
                    <h3>Movimientos</h3>
                    <ul>
                    {data.moves.slice(0,5).map((item, index) => {
                        return (
                        <li key={index}>
                            <p className="text-capitalize">{item.move.name}</p>
                        </li>
                        );
                    })}
                    </ul>
                </div>
                </div>
            ) : (
                ""
            )}
            {didResponseStatus ? "" : <p className="text-danger">Pokemon '{search}' no encontrado</p>}
          </div>
      </div>
    </div>
  );
};

export default Search;
