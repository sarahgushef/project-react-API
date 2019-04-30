import React from "react"
import axios from "axios"

import { Container, Card, Image, Grid } from "semantic-ui-react"

const API_STRING = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&q=`

const API_CONFIGURATION = {
  headers: {
    "user-key": process.env.REACT_APP_API_KEY
  }
}

const CardStyle = {
  height: "300px",
  margin: "20px 0"
}
export default class App extends React.Component {
  state = {
    restaurants: [],
    searchInputValue: ""
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

  handleChange = event => {
    this.setState({
      searchInputValue: event.target.value
    })
    console.log(this.state.searchInputValue)
  }

  render() {
    const restaurants = this.state.restaurants.map((item, index) => {
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
        <Container>
          <form>
            <input
              type="text"
              placeholder="Mau makan apa?"
              onChange={this.handleChange}
            />
          </form>
        </Container>

        {/* Start of Restaurant Grid */}
        <Grid container columns={3}>
          {restaurants}
        </Grid>
        {/* End of Restaurant Gridx */}
      </div>
    )
  }
}
