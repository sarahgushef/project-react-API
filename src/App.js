import React from "react"
import axios from "axios"

import { Container, Card, Image, Grid } from "semantic-ui-react"
import { RSA_NO_PADDING } from "constants"

const API_STRING = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city`

const API_CONFIGURATION = {
  headers: {
    "user-key": "6ff1cfa18e834e1de8af7b7920acb0a1"
  }
}

const CardStyle = {
  height: "300px",
  margin: "20px 0"
}
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    axios
      .get(API_STRING, API_CONFIGURATION)
      .then(response => {
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
        <Grid.Column key={index}>
          <Card style={CardStyle}>
            <Image src={item.restaurant.thumb} />
            <Card.Content>
              <Card.Header>{item.restaurant.name}</Card.Header>
              <Card.Meta>{item.restaurant.location.address}</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    })

    return (
      <div>
        <Container fluid>
          <Grid container columns={3}>
            {restaurants}
          </Grid>
        </Container>
      </div>
    )
  }
}
