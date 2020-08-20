"use strict"
import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

import { toast } from 'react-toastify';

class TutorValidation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' , data:[] };

        this.handleChange = this.handleChange.bind(this);
      
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    async componentDidMount() {
        
        let headers =
        {
            "Content-Type": "application/json",
            "token": localStorage.getItem('token')
        }
        let getAlldata_ = await fetch('http://localhost:3000/Questions/getQuestion?subject='+localStorage.getItem('expertise'), { method: 'GET', headers: headers });

      let  getAlldata = await getAlldata_.json();
  
         //console.log("getAlldata : " + JSON.stringify(getAlldata))

         this.setState({
            data: getAlldata
        });
    }


    render() {

        let dataArray = [];
        let getAllData  = this.state.data;
        let dddd =JSON.stringify(getAllData);
       dddd = JSON.parse(dddd);
       Object.values(getAllData).map(function(value, index){
        
        value.forEach((data)=>
        {
            console.log('data :  '+ JSON.stringify(data))
            
            dataArray.push(data)
    
        })
       
    
    })
        
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Number List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form onSubmit={this.handleSubmit}>
                                        
                                            <Form.Group controlId="formTID">

                                                {/* <Form.Control type="textarea" name="tid" value={this.state.tid} onChange={this.handleChange} placeholder="Enter Transaction ID" /> */}
                                                <Form.Label>File</Form.Label>

                                                <div className="input-group mb-4">
                                                    <input required type="file" name="file" value={this.state.file} onChange={this.handleChange} className="form-control" />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="formTID">

                                                {/* <Form.Control type="textarea" name="tid" value={this.state.tid} onChange={this.handleChange} placeholder="Enter Transaction ID" /> */}
                                                <Form.Label>List Name</Form.Label>

                                                <div className="input-group mb-4">
                                                    <input required type="text" name="listname" value={this.state.listname} onChange={this.handleChange} className="form-control" placeholder="Please Enter Listname" />
                                                </div>
                                             </Form.Group>
                                         

                                            <Form.Group className="mb-2 mr-2" controlId="formTID">

                                                <Form.Label>Campaign ID </Form.Label>
                                                <Form.Control as="select" onChange={this.onSelect} >
                                                    <option>Select capaign id</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>

                                                </Form.Control>
                                            </Form.Group>
                                            <br></br>
                                            <Form.Group className="mb-2 mr-2" controlId="formTID">

                                                <Form.Label> Action </Form.Label>
                                                <Form.Control as="select" onChange={this.onSelect} >
                                                    <option>Select Action</option>
                                                    <option value='i'>Insert</option>


                                                </Form.Control>
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

export default TutorValidation;
