import styled from 'styled-components';

export const DashContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 1000px;
    text-align: center;

    > div {
      display: flex;
      justify-content: center;
      gap: 16px;

      table {
        border-collapse: collapse;
        height: 250px;
        flex-basis: 234px;
        flex-grow: 0;
        flex-shrink: 0;
  
        td, th {
          border: 1px solid #ddd;
          padding: .5rem;
        }
  
        th {
          background-color: #00b9ff;
          color: #fff;
        }
      }
      .chart {
        flex-basis: 250px;
        flex-grow: 0;
        flex-shrink: 0;
      }
    }

    #volume {
      width: 200px;
      margin-top: 2rem;;
    }
  }

  @media (max-width: 500px) {
    > div {
      max-width: 96%;
      margin: 0 2%;

      > div {
        flex-direction: column;
      }
    }
  }
`