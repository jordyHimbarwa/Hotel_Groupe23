import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    nas: '',
    date_signup: '',
    nom_complet: '',
    adresse: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/clients', formData);
      console.log('Server response:', response.data);
      // You can handle success here, e.g., show a success message to the user
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can handle errors here, e.g., show an error message to the user
    }
  };
  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nas">NAS :</label>
          <input type="text" id="nas" name="nas" value={formData.nas} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="date_signup">Date d'inscription :</label>
          <input type="date" id="date_signup" name="date_signup" value={formData.date_signup} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="nom_complet">Nom complet :</label>
          <input type="text" id="nom_complet" name="nom_complet" value={formData.nom_complet} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="adresse">Adresse :</label>
          <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} required />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
export default App;