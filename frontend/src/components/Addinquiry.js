import React, { Component } from 'react';
import axios from 'axios';
import { environment } from '../environment';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const Styles = styled.div`
    h1{
        font-size: 35px;
        font-family: 'Roboto Slab', serif;
        color: #8a8780;
        text-align: center;

    }
  
`;


class Addinquiry extends Component {
    constructor(props) {
        super(props);
    }

    onSubmitHandle = (e) => {

        e.preventDefault();
        axios({
            method: 'post',
            url: environment.baseURL + `/tourist/create`,
            data: this.state
        }).then(res => {
            alert('Inquiry Added Successfully')   
        })
    }

    onChangeHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <Styles>
            <div>
                <h1 >Place and Inquiry to Us, We will take care of you..!</h1>

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your name" id="name" name="name" required onChange={this.onChangeHandle} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Email" id="email" required name="email" onChange={this.onChangeHandle} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Passport ID</Form.Label>
                        <Form.Control  type="text" placeholder="Enter Your Passport ID" id="passportId" required name="passportId" onChange={this.onChangeHandle} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Current Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Current Location" id="location" required name="location" onChange={this.onChangeHandle}/>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Contact Number" id="phone" required name="phone"onChange={this.onChangeHandle}/>
                        </Form.Group>
                    </Form.Row>

                    
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Current Situation </Form.Label>
                        <Form.Control as="textarea" placeholder="Explain Your Current Situation " id="note" required name="note" onChange={this.onChangeHandle}/>
                    </Form.Group>



                    <br/>
                    <Button variant="secondary" size="lg"  type="submit" block onClick={this.onSubmitHandle}>
                        Submit
                    </Button>
                    <br/><br/>

                    </Form>
            </div>
            </Styles>
        );
    }
}

export default Addinquiry;
