import React from "react"
import axios from "axios"

import { Container, Card, Image } from "semantic-ui-react"

const API_STRING = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city`

const API_CONFIGURATION = {
  headers: {
    "user-key": "6ff1cfa18e834e1de8af7b7920acb0a1"
  }
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
      // restaurantNames: [],
      // restaurantThumbnails: []
      // restaurant
    }
  }

  componentDidMount() {
    axios
      .get(API_STRING, API_CONFIGURATION)
      .then(response => {
        // console.log(response.data.restaurants)
        this.setState({
          restaurants: response.data.restaurants
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const restaurants = this.state.restaurants.map((item, index) => {
      console.log(item.restaurant)
      return (
        <div>
          <Card>
            <Image src="/" />
            <Card.Content>
              <Card.Header>{item.restaurant.name}</Card.Header>
              <Card.Meta>Jl. Senopati, Jakarta</Card.Meta>
              <Card.Description>Cheap sushi makes happy</Card.Description>
            </Card.Content>
          </Card>
        </div>
      )
    })

    return <div>{restaurants}</div>
  }
}
