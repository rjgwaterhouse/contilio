import React from 'react';
import BarChart from '../../components/chart';
import Range from '../../components/range';
import Table from '../../components/table';
import { DataProps } from '../../types';
import { DashContainer } from './styles';

interface DashState {
  data: DataProps[];
  selectedItem: number;
};

const columnNames = ["name", "value"];

class Dashboard extends React.Component {
  state: DashState = {
    data: [],
    selectedItem: 0,
  };

  getData = () =>{
    fetch('data.json',{
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        ...this.state,
        data: data
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      selectedItem: parseInt(event.target.value)
    });
  }

  render() {
    return (
      <DashContainer>
        <div>
          <h1>{this.state.data[this.state.selectedItem]?.title}</h1>
          <div>
            <Table tableData={this.state.data[this.state.selectedItem]?.attributes} columns={columnNames} />
            <BarChart tableData={this.state.data[this.state.selectedItem]?.attributes} columns={columnNames} />
          </div>
          <Range data={this.state.data?.length} changeHandler={this.handleChange} />
        </div>
      </DashContainer>
    );
  }
}

export default Dashboard;




// import {useState, useEffect} from 'react';
// import BarChart from '../../components/chart';
// import Range from '../../components/range';
// import Table from '../../components/table';
// import { DataProps } from '../../types';
// import { DashContainer } from './styles';

// const Dashboard: React.FC = () => {

//   const [data, setData] = useState<DataProps[]>([]);
//   const [selectedItem, setSelectedItem] = useState<number>(0);

//   const getData = () =>{
//     fetch('data.json',{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//     })
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(data) {
//       setData(data);
//     });
//   }

//   useEffect(()=>{
//     getData();
//   },[]);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedItem(parseInt(event.target.value));
//   }

//   const columnNames = ["name", "value"];

//   return (
//     <DashContainer>
//       <div>
//         <h1>{data[selectedItem]?.title}</h1>
//         <div>
//           <Table tableData={data[selectedItem]?.attributes} columns={columnNames} />
//           <BarChart tableData={data[selectedItem]?.attributes} columns={columnNames} />
//         </div>
//         <Range data={data?.length} changeHandler={handleChange} />
//       </div>
//     </DashContainer>
//   );
// }

// export default Dashboard;