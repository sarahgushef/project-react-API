import React from "react"
// import axios from "axios"

import { Container, Card, Image } from "semantic-ui-react"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Image src="/" />
          <Card.Content>
            <Card.Header>Sushi Hiro</Card.Header>
            <Card.Meta>Jl. Senopati, Jakarta</Card.Meta>
            <Card.Description>Cheap sushi makes happy</Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
