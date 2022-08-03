import './App.css';

import React, { useEffect, useState } from 'react';
import Card from './Card'
import CardsList from './CardsList'

import api from './services/api';

function App() {
  const path = '/cards'

  const [cardsList, setCardsList] = useState([])
  const [cardId, setCardId] = useState('386616')

  useEffect(() => {
    api
      .get(path)
      .then((res) => {
        setCardsList(res.data.cards)
      })
      .catch((err) => console.log(err))
  }, [])

  function handleSearch(id: number | undefined) {
    if (id) {
      setCardId(`${id}`)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Card id={cardId} />
        <CardsList HandleSearch={handleSearch} list={cardsList} />
      </header>
    </div>
  );
}

export default App;

