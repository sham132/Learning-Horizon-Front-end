
import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

import { toast } from 'react-toastify';



class sendSmsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            fromDate:'',
            toDate:''
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
        const data = { campaignName: this.state.campaignName, messagebodyeng: this.state.messagebodyeng ,  messagebodyurdu: this.state.messagebodyurdu,mask: this.state.mask}
        if(data.messagebodyeng ==null && data.messagebodyurdu ==null) 
        {

            toast.error("Atleast one message body is required!!!");
        } 
        else
        {
            console.log("data: "+data);
        console.log("data: "+JSON.stringify(data));
        let headers =
        {
            "Content-Type": "application/json",
            "Authentication": "Bearer " + localStorage.getItem('token')
        }

        // let response_ = await fetch('http://192.168.0.115:8000/api/v1/rest/sendSms', { method: 'POST', body: JSON.stringify(data), headers: headers });
        // let json = await response_.json();

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
const onFocus = (name) => {
  console.log('focus:', name);
  open[name] = true;
};

const onBlur = (name) => {
  console.log('blur:', name);
  open[name] = false;
};          
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Send SMS List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form onSubmit={this.handleSubmit}>

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


<Form.Group className="mb-2 mr-2" controlId="formTID">

<Form.Label>Language </Form.Label>
<Form.Control as="select" onChange={this.onSelect} >
    <option>Select Language </option>
    <option value="E">English</option>
    <option value="U">Urdu</option>
    <option value="B">Both</option>
  

</Form.Control>
</Form.Group>

               <Form.Group className="mb-2 mr-2" controlId="formTID">

<Form.Label>ListName </Form.Label>
<Form.Control as="select" onChange={this.onSelect} >
    <option>Select List </option>
    <option value="">PMDTestNumbers1</option>
    <option value="">PMDTestNumbers2</option>
    <option value="">PMDTestNumbers3</option>
  

</Form.Control>
</Form.Group>                            


                                            
                                            
                                           
                                            <br></br>

                                            <Button type="submit"  className="btn-info" variant="info" icon='feather icon-thumbs-up'>
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

export default sendSmsList;
