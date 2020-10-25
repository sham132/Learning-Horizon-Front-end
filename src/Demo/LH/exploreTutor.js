import React, { Component } from 'react';
import { Row, Col, Card, Table ,Pagination} from 'react-bootstrap';
import Swal from 'sweetalert2'
import Aux from "../../hoc/_Aux";
import MUIDataTable from "mui-datatables";


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
        this.toogle_ = this.toogle_.bind(this);

    }


    toogle_ = async (i) => {


      this.props.history.push(
        {
          pathname:"/LH/tutorschedule",
          state: i
        }
      );

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
          },
          {
            name: "Scheduling",
            options: {
              customBodyRender: (value, tableMeta, selectedRows, index) => {
    
               
    
                return <button color="danger"  className="btn btn-primary btn-sm shadow-8 mb-8 " onClick={() => this.toogle_(tableMeta.rowData[4])}  >
                  check Tutor Schedule
              </button>
    
    
              }
            }
          }];
        var data2 = [];
        const { open } = this.state;
            let dataobj=[];
        let ayr=[];
        
        let dd= this.state.data;
        
        console.log(typeof(dd));
        console.log(JSON.stringify(dd));


        Array.from(dd).forEach((pp)=>
        {
           
            var values = Object.values(pp);
            data2.push(values);
        })


        return (

            
            <Aux>
                <Row>
                    <Col>
                                <MUIDataTable
  title={"Explore Tutor"}
  data={data2}
  columns={columns}
  options={options}
/>
                    </Col>
                </Row>
                
            </Aux>
        );
    }
}

export default exploreTutor;