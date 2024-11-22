import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_COMPTES = gql`
  query GetAllComptes {
    allComptes {
      id
      solde
      dateCreation
      type
    }
  }
`;

function AccountsList() {
  const { loading, error, data } = useQuery(GET_ALL_COMPTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Accounts</h2>
      <ul>
        {data.allComptes.map((compte) => (
          <li key={compte.id}>
            ID: {compte.id}, Solde: {compte.solde}, Date: {compte.dateCreation}, Type: {compte.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountsList;
