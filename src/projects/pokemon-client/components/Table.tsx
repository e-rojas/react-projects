import React from 'react';

import { Pokemon } from '../pokemon.interface';
interface TableProps {
  pokemonData: Pokemon[];
  saveToDB?: (pokemon: Pokemon) => void;
}

const Table: React.FC<TableProps> = ({ pokemonData, saveToDB }) => {
  return (
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Image</th>
          <th scope='col'>Types</th>
          {saveToDB && <th scope='col'>Save</th>}
        </tr>
      </thead>
      <tbody>
        {pokemonData &&
          pokemonData.map((pokemon, index) => (
            <tr key={pokemon._id}>
              <th scope='row'>{index + 1}</th>
              <td className='font-weight-bold'>{pokemon.name}</td>
              <td>
                <img width={50} src={pokemon.image_url} alt={pokemon.name} />
              </td>
              <td>{pokemon.types.join(', ')}</td>
              {saveToDB && (
                <td>
                  <button
                    onClick={() => saveToDB && saveToDB(pokemon)}
                    className='btn btn-primary btn-sm'
                  >
                    Save
                  </button>
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
