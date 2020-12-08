import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { browserHistory } from 'react-router';
let ourPhrase = ""
class VariableActivity extends Component {
    constructor(props) {
        super(props);
        this.currentPhraseIndex = 0
        this.phrases = [
            "loves coding!",
            "is awesome!",
            "can do anything they set their mind to!",
            "is powerful!",
            "is inspirational!",
            "is a genius!",
            "is hardworking!"
        ]
    }

    state = {
        textBoxValue: "",
        phrase: "",
        name: ""
    };
    
    /*
    * Learning note for onSubmit:
    * This particular method is called whenever the "Go!" button is pressed
    * What it is doing is assigning the value in the text box to your name variable
    * This variable is accessed to be displayed for you to see in the JSX code below
    */
    onSubmit = () => {
        this.setState({
            name: this.state.textBoxValue
        })
    };
    
    getRandomPhrase = (phrase, name) => {

        /* Step 1:
        * Create and assign a new variable named ourPhrase here
        * create a new regular variable that joins the parameter name with the parameter phrase
        * You will need to use name and pharse
        * Remember: we can add strings together using concatenation (+)
        * You can play around with this by adding extra spaces, changing the order, etx.
        */
        
       this.setState({
           phrase: ourPhrase
       })
    }

    handleProceed = () => {
        browserHistory.push('/conditional');
    }

    render() {
        return (
        <Container >
            <br/>
            <h2 style={{textAlign: "center"}}>Variables Activity</h2>
            <hr/>
            <Row style={{textAlign: "center"}} className="justify-content-md-center">
                <Col >
                    <Row className="justify-content-md-center">
                    <Form.Label><h4>Enter Your Variable Below!</h4></Form.Label>
                    </Row>  
                    <Row className="justify-content-md-center">
                    <Form.Group >
                        <Form.Control
                        placeholder="Your Name Here"
                        value={this.state.textBoxValue}
                        onChange={e => this.setState({ textBoxValue: e.target.value})}
                        type="text"
                        />
                        <Button
                        className="btnFormSend"
                        onClick={this.onSubmit}
                        >
                        Go!
                        </Button>
                        <br/>
                    </Form.Group> 
                    </Row> 
                </Col>
            </Row>
            <Row style={{color: "white"}} className="justify-content-md-center">
                    <h4> Name = <span style={{color: "#7FFF00"}}>{this.state.name}</span></h4>     
            </Row>
            <hr/>
            <Row style={{color: "white"}} className="justify-content-md-center">
                <h4>Make a random phrase with your variable name!</h4>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Button
                className="btnFormSend"
                onClick={() => {
                    let newPhrase = this.phrases[this.currentPhraseIndex]
                    this.currentPhraseIndex += 1
                    this.currentPhraseIndex %= 7
                    this.getRandomPhrase(newPhrase, this.state.name)
                }}
                >
                Make my random phrase!
                </Button>
            </Row>
            <br/>
            <Row style={{color: "#7FFF00"}} className="justify-content-md-center">
                <div>
                    <h4>{this.state.phrase}</h4>
                </div>
               
            </Row>

            <Button onClick={this.handleProceed} className={'my-navigation-button'} >
                Proceed To Next Activity!
            </Button>
        </Container>

        );
      }
}

export default VariableActivity;