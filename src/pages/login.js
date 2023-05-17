import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: 'default',
    email: 'default@gmail.com',
    occupation: 'student',
    gender: '',
  })

  const onChangeHandler = (event) => {

    console.log(event)


      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  
  }
  return (
    <>
    
    <div className="login" >
    <h1 className='header' style={{color:"blue"}} > User Login</h1>
     <form className='form' onSubmit={onSubmitHandler}>
      <div className="form-group1">
        <label htmlFor="username" className="form-label1">User Name</label>
        <input className="form-control1" name="username" onChange={onChangeHandler} value={formData.username} />
      </div>
      <div className="form-group1">
        <label htmlFor="email" className="form-label1">Email</label>
        <input className="form-control1" name="email" onChange={onChangeHandler} value={formData.email} />
      </div>
      <div className="form-group1">
        <label htmlFor="occupation" className="form-label1">Occupation</label>
        <select className="form-select1" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
          <option value="student">Student</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group1">
        <label htmlFor="gender" className="form-label1">Gender</label>
        <div>
          <div>
            <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
      
      <div className="form-group1">
        <button className="btn" type="submit" onClick={() => navigate('/dashboard',{state:{name:formData.username,occupation:formData.occupation,gender:formData.gender}})} > Submit</button>
      </div>
    </form>
  </div>  
    
    </>
    
  );
}

export default Login;