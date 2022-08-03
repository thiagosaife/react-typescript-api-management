import React, { useEffect, useState } from "react";

import api from './services/api'

type Props = {
  id: string
}

interface ICard extends Object {
  name: string,
  imageUrl: string,
}

function Card(props: Props) {
  const { id } = props
  const path = `/cards/${id}`

  const [card, setCard] = useState({} as ICard)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api
      .get(path)
      .then((res) => {
        setLoading(false)
        setCard(res.data.card)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [path])

  return (
    <div className="App-card-container">
      {loading
      ? <div className="App-spiner" />
      : <div>
          <p>{card.name}</p>
          <img alt={card.name} src={card.imageUrl} />
        </div>
      }
    </div>
  )
}

export default Card