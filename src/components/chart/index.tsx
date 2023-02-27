import { Chart } from "react-google-charts";
import { ChartProps } from "../../types";

const options = {
  chart: {
    title: "Item Chart",
  },
  legend: {
    position: 'none'
  },
};

const BarChart = (props: ChartProps) => {

  let chartDataArray: (string | number)[][] = [props.columns];
  props.tableData?.map((item: { name: string, value: number }) => (
    chartDataArray.push([item.name, item.value])
  ));

  return (
    <Chart
      className="chart"
      chartType="Bar"
      width="250px"
      height="200px"
      data={chartDataArray}
      options={options}
    />
  );
}

export default BarChart;