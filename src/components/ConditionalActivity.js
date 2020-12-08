import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { browserHistory } from 'react-router';

class ConditionalActivity extends Component {

    state = {
        numberOne: null,
        numberTwo: null,
        numberThree: null,
        displayGreatest: "",
        displayLeast: ""
    };

    handleProceed = () => {
        browserHistory.push('/loops');
    }

    handleBack = () => {
        browserHistory.push('/');
    }
    
    /*
    This is the method we will be working for the conditional activity
    */
    compareNumbers = () => {
        /* Learning note:
        * These lines of code help us prevent invalid input
        * In this case, its checking if the user left one of the boxes blank
        * If they did, it stops the method so there will be no errors
        */
        if (!this.state.numberOne || !this.state.numberTwo || !this.state.numberThree) {
            // invalid input
            return
        }

        /* Learning note:
        * These lines of code change the type of the variable
        * We know that strings are denoted with "" and number have no "" around them
        * naturally this.state.numberOne variables are strings
        * but in order to check the number values against eachother we must change them to numbers
        * the parseInt method takes a string and makes it into a number
        */
        let number1 = parseInt(this.state.numberOne)
        let number2 = parseInt(this.state.numberTwo)
        let number3 = parseInt(this.state.numberThree)

        /* Learning note:
        * Users can add anything into text boxes so we must be prepared for anything
        * In case a user typed something that was not a number, this method checks for that
        */
        if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
            // invalid input
            return
        }

        let greatest = ""
        let least = ""

        /*
        * Step 1:
        * Create the logic for finding the greatest number using the variables number1, number2, and number3 declared above
        * Since there are three varaibles, we must check every variable against the other two
        * For each case, we then will assign the correct number variable to greatest
        * Example:
        * if (number1 >= number2 && number1 >= number3) {
        *   greatest = number1
        * } else if (number2 >= ....) {
        * ...
        * } else if (number3 >= ...) {
        * ...
        * }
        */
       // greatest logic here
        
       /*
        * Step 2:
        * Create the logic for finding the smallest number using the variables number1, number2, and number3 declared above
        * Since there are three varaibles, we must check every variable against the other two
        * For each case, we then will assign the correct number variable to least
        * Example:
        * if (number1 <= number2 && number1 <= number3) {
        *   least = number1
        * } else if (number2 <= ....) {
        * ...
        * } else if (number3 <= ...) {
        * ...
        * }
        */
        // least logic here
        

        /* 
        * Learning Note:
        * This sets the state variable that is uesd to display the least and greatest numbers you found here
        */
        this.setState({
            displayGreatest: greatest,
            displayLeast: least
        })
    };


    render() {
        return (
        <Container >
            <br/>
            <h2 style={{textAlign: "center"}}>Conditionals Activity</h2>
            <hr/>
            <Row style={{width:"100%"}}className="justify-content-md-center">
                <Col >
                    <Row className="justify-content-md-center">
                        <Form.Label><h4>Enter three numbers:</h4></Form.Label>
                    </Row>
                    <Row className="justify-content-md-center">
                    <Form.Group >
                        <Form.Control
                        className="variableExample"
                        placeholder="Number One"
                        style={{marginTop: "10px"}}
                        value={this.state.numberOne}
                        onChange={e => this.setState({ numberOne: e.target.value })}
                        type="text"
                        />
                        <Form.Control
                        className="variableExample"
                        placeholder="Number Two"
                        style={{marginTop: "10px"}}
                        value={this.state.numberTwo}
                        onChange={e => this.setState({ numberTwo: e.target.value })}
                        type="text"
                        />
                        <Form.Control
                        className="variableExample"
                        placeholder="Number Three"
                        style={{marginTop: "10px"}}
                        value={this.state.numberThree}
                        onChange={e => this.setState({ numberThree: e.target.value})}
                        type="text"
                        />
                        <Row className="justify-content-md-center">
                        <Button
                        className="btnFormSend"
                        style={{marginTop: "30px"}}
                        onClick={this.compareNumbers}
                        >
                        Compare
                        </Button>
                        </Row>
                    </Form.Group> 
                    </Row> 
                </Col>
            </Row>
            <hr/>
            <Row style={{width:"100%", color: "white"}}className="justify-content-md-center">
                <h4>Greatest = <span style={{color: "#7FFF00"}}>{this.state.displayGreatest}</span></h4>    
            </Row>
            <Row style={{width:"100%", color: "white"}}className="justify-content-md-center"> 
                <h4>Least = <span style={{color: "#7FFF00"}}>{this.state.displayLeast}</span></h4>
            </Row>

            <Button onClick={this.handleBack} className={'my-navigation-button'} >
                Go To Previous Activity!
            </Button>
            <Button onClick={this.handleProceed} className={'my-navigation-button'} >
                Proceed To Next Activity!
            </Button>
        </Container>

        );
      }
}

export default ConditionalActivity;