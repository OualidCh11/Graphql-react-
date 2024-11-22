import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_COMPTE = gql`
  mutation SaveCompte($compte: CompteInput!) {
    saveCompte(compte: $compte) {
      id
      solde
      dateCreation
      type
    }
  }
`;

function AddAccount() {
  const [form, setForm] = useState({ solde: '', dateCreation: '', type: '' });
  const [saveCompte, { data, loading, error }] = useMutation(ADD_COMPTE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.solde || !form.dateCreation || !form.type) {
      alert('Please fill all fields correctly');
      return;
    }
    saveCompte({ variables: { compte: { ...form, solde: parseFloat(form.solde) } } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Account</h2>
      <input name="solde" placeholder="Solde" value={form.solde} onChange={handleChange} />
      <input name="dateCreation" type="date" placeholder="Date" value={form.dateCreation} onChange={handleChange} />
      <select name="type" value={form.type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option value="TYPE1">Type 1</option>
        <option value="TYPE2">Type 2</option>
      </select>
      <button type="submit">Save</button>
      {loading && <p>Saving...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Account Saved with ID: {data.saveCompte.id}</p>}
    </form>
  );
}

export default AddAccount;
