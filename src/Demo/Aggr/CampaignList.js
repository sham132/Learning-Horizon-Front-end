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

class CampaignList extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false, data: '' };

        //this.toogle_ = this.toogle_.bind(this);
    }

    // toogle_ = async (i) => {
    //     //http://localhost:2021/TemplateHandler/getTemplateByID?id=53
      
    //     let headers =
    //     {
    //         "Content-Type": "application/json",
    //         "Authentication": "Bearer " + localStorage.getItem('token')
    //     }
    //     let getTempData = await fetch('http://192.168.0.113:2021/TemplateHandler/getTemplateByID?id='+i, { method: 'GET', headers: headers });
    //     let gettmpData = await getTempData.json();

    //     console.log("getAllUser "+ JSON.stringify(gettmpData));


    //     Swal.fire({
    //         title: "Template", 
    //         width: 900, 
    //         html: `
    //         <pre>Defined User :  ${gettmpData.defUser}</pre>
    //     <pre>Template ID : ${gettmpData.tempid}</pre>
    //     <pre>  Request Template :  ${gettmpData.reqtemp}</pre>
    //     <pre> Response Template : ${gettmpData.restemp}</pre>
    //     <pre>   Creation Date : ${gettmpData.created_at}</pre>
       
    //   `,

      
             
    //         showClass: {
    //           popup: 'animated fadeInDown faster'
    //         },
    //         hideClass: {
    //           popup: 'animated fadeOutUp faster'
    //         }
    //       })
    //   }


    async componentDidMount() {



        let getAllUser;

        let checkUser=localStorage.getItem('isAdmin');
        let userID=localStorage.getItem('userID');
        let user=localStorage.getItem('user');
       
            let headers =
            {
                "Content-Type": "application/json",
                "Authentication": "Bearer " + localStorage.getItem('token')
            }
            let getAllUsers_ = await fetch('http://localhost:8000/api/v1/rest/Campaigns/getAllCampaign', { method: 'GET', headers: headers });
            getAllUser = await getAllUsers_.json();

        


        this.setState({
            data: getAllUser
        });


     

       


    }

    render() {

        const columns = [{
            name: "Campaign ID",
            options: {
              filter: true
            }
          },
          {
          name: "Campaign Name",
          options: {
            filter: true
          }
        }
          ,
          {
            name: "Message Body English",
            options: {
              filter: true
            }
          } 
          ,
          {
            name: "Message Body Urdu",
            options: {
              filter: true,
              selectableRows:true
            }
          },
          {
            name: "Mask",
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
  title={"Campaign List"}
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

export default CampaignList;