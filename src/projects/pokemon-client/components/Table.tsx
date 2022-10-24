import React from 'react';

import { Pokemon } from '../pokemon.interface';

const Table: React.FC<{ pokemonData: Pokemon[] }> = ({ pokemonData }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Image</th>
          <th scope='col'>Types</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {pokemonData &&
          pokemonData.map((pokemon, index) => (
            <tr key={pokemon.id}>
              <th scope='row'>{index + 1}</th>
              <td className='font-weight-bold'>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </td>
              <td>
                <img width={50} src={pokemon.image_url} alt={pokemon.name} />
              </td>
              <td>{pokemon.types.join(', ')}</td>
              <td>
                <button className='btn btn-primary btn-sm'>Save</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
