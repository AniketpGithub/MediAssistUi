import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import MyNavbar from '../../Home/navbar';

//import logo from '../../assets/logo.svg';

export default function Register() {
    const [patientFirstName, setpatientFirstName] = useState('');
    const [patientLastname, setpatientLastname] = useState('');
    const [userName, setuserName] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [email, setemail] = useState('');

    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('');
    const [password, setpassword] = useState('');
    const [address, setaddress] = useState('');
    
    // const [uf, setUf] = useState('');
    // const [userId, setUserId] = useState("13");

    const history = useHistory();

    async function handleRegister(e){
       // setUserId(6)
        e.preventDefault();

        const data = {
        //     userId,
        //     userName,
        //     userEmail,
        //     userPassword,
        //    // city,
        //    userPhone
         
         patientFirstName ,
         patientLastname ,
         userName ,
         mobileNumber ,
         email ,
         gender ,
         dob ,
         password ,
         address 
           

        }
        //alert(data)

        try{
            const response = await api.post('CreatePatients', data);
            alert(`Registration Successful`);
            history.push('/Home');
        }catch(err){
            alert('Invalid');
        }
    }

    return (
       
        <>
        <MyNavbar></MyNavbar>
        <div className="register-container">
            
            <div className="content">
                <section>
                    {/* <img src={logo} alt="FGAirlines" /> */}

                    <h1>Registration</h1>
                    <p>Register your name </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#17333C" />
                    
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Enter patient FirstName" 
                        value={patientFirstName}
                        onChange={e=>setpatientFirstName(e.target.value)}
                    />
                    <input placeholder="Enter patient Lastname" 
                        value={patientLastname}
                        onChange={e=>setpatientLastname(e.target.value)}
                    />

                   <input placeholder="Enter Username " 
                        value={userName}
                        onChange={e=>setuserName(e.target.value)}
                    />

                    <input type="email" placeholder="E-mail" 
                        value={email}
                        onChange={e=>setemail(e.target.value)}
                    />

                   <input placeholder="gender" 
                        value={gender}
                        onChange={e=>setgender(e.target.value)}
                    />
                    <input placeholder="dob" 
                        value={dob}
                        onChange={e=>setdob(e.target.value)}
                    />
                    <input placeholder="mobileNumber" 
                        value={mobileNumber}
                        onChange={e=>setmobileNumber(e.target.value)}
                    />
                    <input type="password" placeholder="password" 
                        value={password}
                        onChange={e=>setpassword(e.target.value)}
                    />
                   <input placeholder="Enter address" 
                        value={address}
                        onChange={e=>setaddress(e.target.value)}
                    />
                   
                  


                    
                    <div className="form-group">
                        {/* <input placeholder="UF" style={{ width: 80 }} 
                            value={uf}
                            onChange={e=>setUf(e.target.value)}
                        /> */}
                        <button type="submit">Register</button>
                    </div>
                    
                        
                </form>
            </div>
        </div>
        </>
    );
}