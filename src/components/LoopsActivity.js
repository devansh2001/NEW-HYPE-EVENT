import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { browserHistory } from 'react-router';

const OriginalPattern  = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {    
        for (let j = 0; j <= i; j++) {
            stars.push("* ");
        }
        stars.push(<br/>);
    }
    console.log("entered");
    return (  
        <div className="star-pattern-one">  
            {stars} 
        </div>
    )
}
let PUT_CONDITION_HERE = false 

class LoopsActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPattern: 'Complete the TODO to see your pattern here!',
        }
    }

    handleProceed = () => {
        browserHistory.push('/sorting');
    }

    handleBack = () => {
        browserHistory.push('/conditional');
    }
  
     /*
    * This is were you will complete your code for the triangle
    * This can be a tricky problem when first learning about loops so let's break it down
    * You will need two loops and one loops will be inside of the other
    * The first loop will keep track of the row you are on
    * The second loop with keep track of how many stars you have printed out
    * 
    * Think of it like this:
    * First row (first iteration of row loop):
    *   Only print out 1 stars
    *   *
    * Second row (second iteration of row loop):
    *   Print out 2 stars
    *   **
    * Third row (third iteration of row loops):
    *   Print out 3 stars
    *   ***
    * and so on until 5
    * 
    * Another hint:
    * The number of stars you print out is directly related to the row you are on
    */
    completePattern = () => {
        // this variable holds your pattern, you need not worry about it
        let pattern = [];

        /*
        * Step 1:
        * Create a regular variable to keep track of what row you are on
        * Hint: looking at the slide examples might help
        */
        let i = 0

        /*
        * Step 2:
        * Create the condition for the outer loop using the row variable above
        * Remember - we only want to have 5 rows
        */
        while (i < 5) {

            /*
            * Step 4:
            * Create a regular variable to keep track of how many times you print a star in a row
            * We create the variable here instead of outside of the main loop so that it resets everytime the row loops is run
            * Try moving it outside of the first loop to see what happens
            */
            let j = 0

            /*
            * Step 5:
            * Create the condition for the inner loop using the star variable above
            * Remember - the number of stars we want to print out is directly related to the row number we're on
            * Hint: we will want to use the row variable in this condition along with the star variable
            */
            while (j <= i) {
                
                // this will add our star to the pattern for us
                pattern.push("* ");

                /*
                * Step 6:
                * Add 1 to the value of the star variable so that it is updated each time the loop is run
                * If we forget this, it will print out an infinite number of stars for that row
                */
                j++
            }
            // this line of code starts a new line for each row
            pattern.push(<br/>);
            /*
            * Step 3:
            * Add 1 to the value of the row variable so that it is updated each time the loop runs
            * If we forget this, the loop will run forever
            */
            // increment row variable here
            i++
        }

        this.setState ({ userPattern: pattern });
        return pattern;
    }

    render() {
        return (
            <Container style={{textAlign: 'center'}}>
                <br/>
                <h2>Loops Activity</h2>
                <Col>
                    <Row>
                        <Col>
                            <div>
                                <h4>We can use this activity to understand how for loops work. </h4>
                            </div>
                            <hr/>
                            <div>
                                <h5>Given below on the left hand side is a pattern of stars obtained from
                                    using nested for loops. The first for loop specifies the row number 
                                    for the pattern which in this case runs from 1 to 5. The second for loop 
                                    specifies the number of stars needed on each row of the pattern, which again
                                    ranges from 1 to 5, depending on the row number. 
                                </h5>
                                <br></br>
                                <h5>Write a nested for loop to display the same pattern on the right hand side.
                                    Hit the Display Pattern button to test your code periodically and compare your pattern with the correct 
                                    one of the left hand side.
                                </h5>
                            </div>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container>
                                <h5>Correct Pattern</h5>
                               
                                <Container 
                                    style={{
                                        color: '#7FFF00', 
                                        width: '60%',
                                        marginLeft: "200px"
                                    }}>
                                    <Col>
                                    <Row >
                                        <OriginalPattern/>      
                                    </Row>
                                    </Col>
                                </Container>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <h5>Your Pattern</h5>
                               
                                <Container 
                                    style={{
                                        color: 'yellow', 
                                        width: '70%',
                                        textAlign: "center"
                                    }}>
                                    <Col>
                                        <div className="star-pattern-two">
                                            {this.state.userPattern}      
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div style={{marginLeft: "12px"}}>
                                            <Button onClick={this.completePattern}>
                                                Display Pattern
                                            </Button>
                                        </div>

                                    </Col>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Col>

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

export default LoopsActivity;