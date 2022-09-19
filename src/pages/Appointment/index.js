import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import MyNavbar from '../../Home/navbar';

//import logo from '../../assets/logo.svg';

export default function Register() {
   // const [patientId, setpatientId] = useState('');
    const [patientName, setpatientName] = useState('');
    const [doctorName, setdoctorName] = useState('');
    const [email, setemail] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [address, setaddress] = useState('');
    const [dateofAppointment, setdateofAppointment] = useState('');
    const [reason, setreason] = useState('');
    
    
    
   

    const history = useHistory();

    async function handleRegister(e){
       
        e.preventDefault();

        const data = {
        

       
       patientName,
       doctorName,
         address ,
         email,
        mobileNumber,
        dateofAppointment,
        reason


         
        }
        

        try{
            const response = await api.post('bookAppointment', data);
            alert(`Booking Successful`);
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

                    <h1>Appointment</h1>
                    <p>Book your Appointment now </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#17333C" />
                    
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Enter patient Name" 
                        value={patientName}
                        onChange={e=>setpatientName(e.target.value)}
                    />
                    <input placeholder="Enter doctor name" 
                        value={doctorName}
                        onChange={e=>setdoctorName(e.target.value)}
                    />

                   <input placeholder="Enter reason" 
                        value={reason}
                        onChange={e=>setreason(e.target.value)}
                    />

                    <input type="email" placeholder="E-mail" 
                        value={email}
                        onChange={e=>setemail(e.target.value)}
                    />

                   <input placeholder="dateofAppointment" 
                        value={dateofAppointment}
                        onChange={e=>setdateofAppointment(e.target.value)}
                    />

                    <input placeholder="mobileNumber" 
                        value={mobileNumber}
                        onChange={e=>setmobileNumber(e.target.value)}
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
                        <button type="submit">Book Appointment</button>
                    </div>
                    
                        
                </form>
            </div>
        </div>
        </>
    );
}