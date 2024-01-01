import react, { Component } from 'react'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './monster.css'
import { Button, Card } from 'react-bootstrap'

class Monster extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            email: this.props.email,
            username: this.props.username
        }
    }


    render() {
        return <Card
            style={{ width: '18rem' }}
            className="Card-js">
            <Card.Body>
                <Card.Title>{this.state.name}</Card.Title>
                <Card.Subtitle>{this.state.username}    {this.state.email}</Card.Subtitle>
                <Button className="m-6" variant="danger" >Go somewhere</Button>
            </Card.Body>
        </Card>;
    }

}

export default Monster;