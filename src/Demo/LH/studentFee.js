import React ,  {Component} from "react";
import { render } from "react-dom";
import Pdf from "react-to-pdf";
import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';

const ref = React.createRef();

class studentFee extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
          value:'',data:[]
        };
    }

    async componentDidMount() {


        let header =
        {
          "Content-Type": "application/json",
          "token": localStorage.getItem('token')
        }
        let getTutordata_ = await fetch(`http://localhost:3000/Questions/getStudentInvoice?student=${localStorage.getItem('name')}`, { method: 'GET', headers: header });
       let getTutordata = await getTutordata_.json();
    
       console.log("getTutordata : "+ getTutordata["Results"])
        this.setState({
          data: getTutordata["Results"]
        });

    
      }

    render(){

        let feeData;
        if(this.state.data)
        {

        
        let name ="ehtasham";
         feeData = this.state.data;

      
       // let dated =  new Date(feeData.date);
        var someDate = new Date(feeData.date);
        var numberOfDaysToAdd = 6;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

        console.log("newDay : "+ someDate);
    }
    else
    {
        feeData = []
    }
  return (

    
    <div style={{ padding: 20 }}>

<Pdf targetRef={ref} filename="LR_fee_voucher.pdf">
        {({ toPdf }) => <button class="btn btn-primary col-lg-2 col-lg-offset-4" onClick={toPdf}>Download Fee Voucher !!</button>}
      </Pdf>
<br></br><br></br>
        {this.state.data ? 
        <div ref={ref} >


      <Row>



        <Col>
        <h3>Learning Horizon Student Invoice</h3>
          <Divider>Invoice</Divider>
        </Col>
      </Row>

      <Row  gutter={24} style={{padding:30}}>
        <Col span={1}>
    
  <div>Name :<b> {feeData.student}</b></div>
          <div>Subject :<b> {feeData.subject}</b></div>
        </Col>
        <Col span={5} offset={5}>
          <table>
            <tr>
              <th>Invoice # :</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Current Date :</th>
  <td>{new Date().toString()}</td>
            </tr>
            <tr>
              <th>Due Date :</th>
              <td>{someDate.toString()}</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{padding:30}}>
        <div>Bill To: <strong>Learning Horizon </strong></div>
        <div>XXXXX Road,</div>
        <div>XXXXX - 560076</div>
      </Row>


      <Row style={{ marginTop: 30 }}>
        <Table style={{padding:30}} dataSource={[{
            id: 1,
            name: feeData.student,
            Subject:  feeData.subject,
            price:  feeData.fee,
            quantity: 1
        }]}
        pagination={false}
        >
          <Table.Column title="Name" dataIndex='name' />
          <Table.Column title="Subject" dataIndex='Subject' />
          <Table.Column title="Quantity" dataIndex='quantity' />
          <Table.Column title="price" dataIndex='price' />
         
        </Table>
      </Row>

      <Row style={{ marginTop: 10 , padding:10}}>
        <Col span={6} offset={2}>
          <table>
          <tr>
          <th>Bank Details  : </th>
              <td> Bank Alfalah </td>
              <td>Acount No. </td>
              <td>XXXXXXXXXXX </td>
            </tr>
            <tr>
              <th>Gross Total :</th>
    <td>{feeData.fee}</td>
            </tr>
        
          </table>
        </Col>
      </Row>
      </div>
:  <div> <h2>No Invoice Available </h2> </div>
}
    </div>
  )
}
}


export default studentFee;
