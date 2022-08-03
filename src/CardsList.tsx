import { Component } from 'react'

type Props = {
  list: string[]
  HandleSearch: Function
}

type State = {
  cardsList: string[]
}



class CardsList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      cardsList: []
    }
  }

  componentDidUpdate(previousProps: Props) {
    if (previousProps.list !== this.props.list) {
      this.handleCardsList()
    }
  }
  
  handleCardsList() {
    this.setState({cardsList: this.props.list})
  }

  handleSearch(id: number) {
    this.props.HandleSearch(id)
  }

  render() {
    return (
      <div className='App-list-container'>
        <ul className='App-list'>
          {
            this.state.cardsList
              .map(
                  (c: any, i: number) =>
                    <li
                      onClick={() => this.handleSearch(c.multiverseid)}
                      className='App-list-item'
                      key={i}
                      title={c.multiverseid ? c.name : 'Sem registro'}
                    >
                      {c.name}
                    </li>
                )
          }
        </ul>
      </div>
    )
  }
}

export default CardsList