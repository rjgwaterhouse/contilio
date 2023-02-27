import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/form/input';
import { Values } from '../../types';
import { FormContainer } from './styles';

const Login = () => {

  const [values, setValues] = useState<Values>({
    username : "",
    password : "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values,[event.target.name] : event.target.value});
    if (values.username.length > 1 && values.password.length > 1) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <FormContainer>
      <div>
        <h1>Welcome to Contilio</h1>
        <p>Please login using the form below:</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CustomTextField 
            changeHandler={handleChange} 
            name={"username"} 
            type={"text"}
          />
          <CustomTextField 
            changeHandler={handleChange} 
            name={"password"} 
            type={"text"} 
          />
          <button type="submit" disabled={buttonDisabled}>Submit</button>     
        </form>
      </div>
    </FormContainer>
  );
}

export default Login;