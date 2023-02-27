import {useState, useEffect} from 'react';
import BarChart from '../../components/chart';
import Range from '../../components/range';
import Table from '../../components/table';
import { DataProps } from '../../types';
import { DashContainer } from './styles';

const Dashboard = () => {

  const [data, setData] = useState<DataProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const getData = () =>{
    fetch('data.json',{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      setData(data);
    });
  }

  useEffect(()=>{
    getData();
  },[]);

  console.log(selectedItem);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem(parseInt(event.target.value));
  }

  const columnNames = ["name", "value"];

  return (
    <DashContainer>
      <div>
        <h1>{data[selectedItem]?.title}</h1>
        <div>
          <Table tableData={data[selectedItem]?.attributes} columns={columnNames} />
          <BarChart tableData={data[selectedItem]?.attributes} columns={columnNames} />
        </div>
        <Range data={data?.length} changeHandler={handleChange} />
      </div>
    </DashContainer>
  );
}

export default Dashboard;