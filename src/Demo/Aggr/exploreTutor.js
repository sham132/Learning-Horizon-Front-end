import React, { Component } from 'react';
import { Row, Col, Card, Table ,Pagination} from 'react-bootstrap';
import Swal from 'sweetalert2'
import Aux from "../../hoc/_Aux";
import DataTable from 'react-data-table-component';
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";


   // The gray background
   
 

   const data_ = [];
   
   const options = {
    selectableRows:false,
    // filterType: 'checkbox',
   }

class exploreTutor extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false, data: '' };

    }

    async componentDidMount() {



        let getAllUser;


       
            let headers =
            {
                "Content-Type": "application/json",
                "token": "Bearer " + localStorage.getItem('token')
            }
            let getAllUsers_ = await fetch('http://localhost:3000/tutor/exploreTutor', { method: 'GET', headers: headers });
            getAllUser = await getAllUsers_.json();

        


        this.setState({
            data: getAllUser
        });


     

       


    }

    render() {

        const columns = [{
            name: "ID",
            options: {
              filter: true
            }
          },
          {
          name: "Name",
          options: {
            filter: true
          }
        }
          ,
          {
            name: "Phone",
            options: {
              filter: true
            }
          } 
          ,
          {
            name: "Address",
            options: {
              filter: true,
              selectableRows:true
            }
          },
          {
            name: "Email",
            options: {
              filter: true,
              selectableRows:true
            }
          },
          {
            name: "Expertise",
            options: {
              filter: true,
              selectableRows:true
            }
          },
          {
            name: "Created At",
            options: {
              filter: true,
              selectableRows:true
            }
          }];
        var data2 = [];
        let active = 3;
        let disabled = 4;
        let items = [];
        let activeItems = [];
        let disabledItems = [];
        const { open } = this.state;
            let dataobj=[];
        let ayr=[];
        
        let dd= this.state.data;
        
        console.log(typeof(dd));
        console.log(JSON.stringify(dd));


        Array.from(dd).forEach((pp)=>
        {
            delete pp["tempid"];
           // delete pp["id"];
            delete pp["userid"];
            delete pp["created_at"];
            var values = Object.values(pp);
            data2.push(values);
        })






        

//         let jsonp= JSON.parse(dd);
        
// dd.forEach((e)=>
// {
// var values = Object.values(e);
// console.log(values);
// })





      
     
        // for(const [key, value1] of Object.entries(data1)) {
        //     console.log("value1 "+  JSON.stringify(value1));
        //     data2.push([value1]);
        // }
        
       

        // console.log("data1 "+   JSON.stringify(data1));
        // console.log("arrData "+   arrData);
        // for (const [key, value] of Object.entries(dd)) {

        //     arrData.push(value);
        //     for (const [key, value1] of Object.entries(value)) {
               
        //         console.log("value1 "+ JSON.stringify(value1));
        //         data_.push(value1);
        //     }
        //   }


        // {this.state.data.map(event => (
        //     console.log(event.reqtemp)
        // ))}

        return (

            
            <Aux>
                <Row>
                    <Col>

                        {/* <Card>
                            <Card.Header>
                                <Card.Title as="h5">Template List</Card.Title>
                            </Card.Header>
                            <Card.Body> */}

                          
                                {/* <Table className={" table-striped"}  class="table-striped"  >
                                    <thead>
                                        <tr>
                                            <th>Template ID</th>
                                            <th>User</th>

                                            <th>Request Template</th>
                                            <th>Response Template</th>
                                            <th>Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.data.map(event => (<tr>
                                            <td>{event.tempid}</td>

                                            <td>{event.defUser}</td>
                                            <td>{event.reqtemp}</td>
                                            <td>{event.restemp}</td>
                                            <td><button style={{ borderRadius: 50 }}  key={event.id} data-id={event.id} onClick={() => this.toogle_(event.id)} className="label theme-bg text-white f-12">View Tempalte</button></td>

                                        </tr>))}


                                    

                                    </tbody>
                                    

                                </Table> */}
                                <MUIDataTable
  title={"Explore Tutor"}
  data={data2}
  columns={columns}
  options={options}
/>
                               
                            {/* </Card.Body>

                                
                        </Card>  */}
                    
                       
                    </Col>
                </Row>
                
            </Aux>
        );
    }
}

export default exploreTutor;