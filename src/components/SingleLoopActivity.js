import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

const AnimalList = () => {
    let animalList = [];
    let i = 0;
    while (i < animals.length) {
        animalList.push(animals[i]);
        animalList.push(<br />);
        i++;
    }
    return (
        <div style={{
            color: '#7FFF00'
        }}>
            { animalList}
        </div >
    )
}

let animals = ["Dog", "Cat", "Turtle", "Cat", "Zebra", "Dog", "Elephant", "Cat"];
let PUT_CONDITION_HERE = false;
let ADD_INDEX_VARIABLE_HERE = 0;

class SingleLoopActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: 'Complete your loop to view the correct animal list',
        }

    }

    handleProceed = () => {
        browserHistory.push('/loops');
    }

    handleBack = () => {
        browserHistory.push('/conditional');
    }


    /**
     * This is where you will add your code to print out the animals in the list
     * which are not "Cat". Try to think about how you would do this by hand with a pencil and paper,
     * then translate that to code. Good luck!
     */
    completePattern = () => {
        //this variable will hold your list, don't worry about it
        let myAnimalList = [];

        //this variable represents the length of the full animal list.
        //Hint: You will need this for your loop condition!
        let length = animals.length;

        /**
         * Step 1: Create a variable that keeps track of which index
         * you are in the animal list
         */
        //create index variable here

        /**
         * Step 2: Create your loop condition here.
         * We want to check the value at every index in the animal list,
         * so think about where the index variable should start and end.
         */
        while (PUT_CONDITION_HERE) {


            /**
             * Step 3: this animal variable holds the current animal at the specified index. 
             * Be sure to add your index variable here.
             */
            let animal = animals[ADD_INDEX_VARIABLE_HERE]

            /**
             * Step 4: Add a condition to check if the animal at the specfied
             * index is NOT a cat. Try to write this out, then translate this to code.
             */
            if (PUT_CONDITION_HERE) {
                /**
                 * the next two lines add the animal at the specified index and a line break,
                 * don't worry about them. Just add the index variable you made where prompted.
                 */
                myAnimalList.push(animal);
                myAnimalList.push(<br />);
            }
            /**
             * Step 5: Update your index variable.
             * After checking the current index, you now need to update
             * the index variable so that when the loop iterates again, you are checking
             * the next animal.
             */
            //update index variable here
        }

        this.setState({ userList: myAnimalList });
        return myAnimalList;
    }

    render() {
        return (
            <Container style={{ textAlign: 'center' }}>
                <br />
                <h2>Single Loop Activity</h2>

                <Col>
                    <Col>
                        <div>
                            <h5>We can use this activity to understand how a loop works.</h5>
                        </div>

                        <hr />
                        <div>
                            <h5>On the left hand side, we have given a list of animals. Using the property of loops,
                            iterate through this list and print out all animals that are not a "Cat". Use the Display List
                            button to periodically check your work. </h5>
                        </div>

                        <hr />
                    </Col>
                    <Row>
                        <Col>
                            <Container>
                                <h4>Animal List</h4>
                                <AnimalList />
                            </Container>

                        </Col>
                        <Col>
                            <Button onClick={this.completePattern} style={{ marginTop: "120px" }}>
                                Display List
                            </Button>
                        </Col>
                        <Col>
                            <Container>
                                <h4>Your List</h4>
                                <div
                                    style={{
                                        color: '#7FFF00'
                                    }}>

                                    {this.state.userList}
                                </div>
                            </Container>
                        </Col>
                    </Row>

                </Col>
                <br />
                <Button onClick={this.handleBack} className={'my-navigation-button'} >
                    Go To Previous Activity!
                </Button>

                <Button onClick={this.handleProceed} className={'my-navigation-button'} >
                    Proceed To Next Activity!
                </Button>
            </Container >

        );
    }
}

export default SingleLoopActivity;