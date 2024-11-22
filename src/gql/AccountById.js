import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import '../App.css';

const GET_COMPTE_BY_ID = gql`
  query GetCompteById($id: Long!) {
    compteById(id: $id) {
      id
      solde
      dateCreation
      type
    }
  }
`;

function AccountById() {
  const [id, setId] = useState('');
  const [getAccount, { loading, data, error }] = useLazyQuery(GET_COMPTE_BY_ID);

  return (
    <div>
      <h2>Find Account by ID</h2>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={() => getAccount({ variables: { id: parseInt(id) } })} disabled={!id}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>ID: {data.compteById.id}</p>
          <p>Solde: {data.compteById.solde}</p>
          <p>Date: {data.compteById.dateCreation}</p>
          <p>Type: {data.compteById.type}</p>
        </div>
      )}
    </div>
  );
}

export default AccountById;
