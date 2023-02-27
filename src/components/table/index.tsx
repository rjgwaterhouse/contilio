import { ChartProps } from "../../types";

const Table = (props: ChartProps) => {

  const dataTable = props.tableData?.map((item) => (
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>{item.value}</td>
    </tr>
  ));

  const tableHeads = props.columns.map((item) => (
    <th key={item}>{item}</th>
  ));

  return (
    <table>
      <tbody>
        <tr>
          {tableHeads}
        </tr>
        {dataTable} 
      </tbody>
    </table>
  );
}

export default Table;