import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, SetFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        email: "",
        age: 0,
      });
    
      const navigate=useNavigate();

      const handleChange = (event) => {
        console.log(event.target);
        console.log(typeof event.target.name); // value is String
        SetFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home')
        
      };
    
      return (
        <>
          <form id="registrationForm" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <br />
            <br />
    
            <label htmlFor="lastName">LastName:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <br />
            <br />
    
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <br />
    
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <br />
            <br />
    
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <br />
    
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              required
              pattern="[0-9]{10}"
              onChange={handleChange}
            />
            <br />
            <br />
    
            <label htmlFor="age"> Age :</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              required
              onChange={handleChange}
            />
            <br />
            <br />
    
            <input type="submit" value="Submit" />
          </form>
        </>
      );
    };

export default Login