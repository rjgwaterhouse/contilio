export interface DataProps {
  title: string,
  attributes: AttrProps[],
}

export interface AttrProps {
  name: string,
  value: number,
  unit: string,
}

export interface ChartProps {
  tableData: {
    name: string;
    value: number;
  }[];
  columns: string[];
}

export type Values = {
  username: string,
  password: string,
}