import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    input {
      width: 300px;
      height: 60px;
      display: block;
      margin-bottom: 1rem;
      text-transform: capitalize;
      padding-left: 1rem;
    }
    button {
      background: #00b9ff;
      color: #fff;
      border: none;
      padding: 1rem;
      font: inherit;
      cursor: pointer;
      outline: inherit;

      &:disabled {
        background-color: #cccccc;
        color: #666666;
      }
    }
  }
`