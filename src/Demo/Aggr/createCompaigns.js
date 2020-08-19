
import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

import { toast } from 'react-toastify';


class createCompaign extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            fromDate: '',
            toDate: ''
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }





    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        this.setState({ [event.target.fromDate]: event.target.value })
        this.setState({ [event.target.toDate]: event.target.value })

    }

    handleSubmit = async event => {
        event.preventDefault();




        console.log(this.state.fromDate);
        const data = { campaignName: this.state.campaignName, messagebodyeng: this.state.messagebodyeng, messagebodyurdu: this.state.messagebodyurdu, mask: this.state.mask }
        if (data.messagebodyeng == null && data.messagebodyurdu == null) {

            toast.error("Atleast one message body is required!!!");
        }
        else {
            console.log("data: " + data);
            console.log("data: " + JSON.stringify(data));
            let headers =
            {
                "Content-Type": "application/json charset=utf-8",
                "Authentication": "Bearer " + localStorage.getItem('token')
            }

            let response_ = await fetch('http://192.168.0.172:8000/api/v1/rest/AddCampaign', { method: 'POST', body: JSON.stringify(data), headers: headers });
            let json = await response_.json();

            toast.success(json);
            // if (json.message) {

            //     toast.success(json.message);

            //     this.state.template = '';
            // }
        }


    }


    render() {
        var date = new Date();
        const open = {
            start: true,
            end: false
        };

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Create an SMS campaign</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form onSubmit={this.handleSubmit}>

                                            <Form.Group controlId="formTID">
                                                <Form.Label>Campaign Name </Form.Label>
                                                {/* <Form.Control type="textarea" name="tid" value={this.state.tid} onChange={this.handleChange} placeholder="Enter Transaction ID" /> */}

                                                <Form.Control required name="campaignName" value={this.state.campaignName} onChange={this.handleChange} placeholder="Enter campaign name" />
                                                {/* Characters Left: {this.state.ReqTemp.length } */}
                                            </Form.Group>


                                            <Form.Group controlId="formTID">
                                                <Form.Label>Message Body English</Form.Label>
                                                {/* <Form.Control type="textarea" name="tid" value={this.state.tid} onChange={this.handleChange} placeholder="Enter Transaction ID" /> */}

                                                <Form.Control as="textarea" rows="6" name="messagebodyeng" value={this.state.messagebodyeng} onChange={this.handleChange} placeholder="Enter message body" multiple />
                                                {/* Characters Left: {this.state.ReqTemp.length } */}
                                            </Form.Group>

                                            <Form.Group controlId="formTID">
                                                <Form.Label>Message Body Urdu</Form.Label>
                                                {/* <Form.Control type="textarea" name="tid" value={this.state.tid} onChange={this.handleChange} placeholder="Enter Transaction ID" /> */}

                                                <Form.Control as="textarea" rows="6" name="messagebodyurdu" value={this.state.messagebodyurdu} onChange={this.handleChange} placeholder="Enter message body" multiple />
                                                {/* Characters Left: {this.state.ReqTemp.length } */}
                                            </Form.Group>




                                            <Form.Group controlId="formTID">
                                                <Form.Label>Mask </Form.Label>
                                                {/* <Form.Control type="textarea" name="tid" value={this.state.tid} onChange={this.handleChange} placeholder="Enter Transaction ID" /> */}

                                                <Form.Control required name="mask" value={this.state.mask} onChange={this.handleChange} placeholder="Enter campaign name" />
                                                {/* Characters Left: {this.state.ReqTemp.length } */}
                                            </Form.Group>
                                            <br></br>

                                            <Button type="submit" className="btn-info" variant="info" icon='feather icon-thumbs-up'>
                                                Submit
                                            </Button>
                                        </Form>
                                    </Col>


                                </Row>


                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default createCompaign;
