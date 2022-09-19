import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import MyNavbar from '../../Home/navbar';

import './styles.css';

import api from '../../services/api';

import logo from '../../assets/logo.jpg';
import plane from '../../assets/big-plane.jpg'

export default function Login() {
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
       e.preventDefault();



       try{
        const response = await api.post('signin', { username, password });
       //const response =" "
        localStorage.setItem('patientuserName', username);
        localStorage.setItem('patientPassword', password);
        localStorage.setItem('patientName', response.data.name);

        history.push('/Appointment');
    } catch(err) {
        alert('invalid.');
    }

        // try{
        //     const response = await api.post('signin', { username, password });
        //    //const response =" "

        //    if(response.data==true){
        //     debugger
        //     localStorage.setItem('patientuserName', username);
        //     localStorage.setItem('patientPassword', password);
        //     localStorage.setItem('patientName', response.data.name);

        //     history.push('/bookAppointment');
            

        //    }
        //    else{
        //     alert('invalid.');
        //    }
          
        // } catch(err) {
        //     debugger
        //     alert('invalid.');
        // }
    }

    return (
        <>
         <MyNavbar />
        <div className="login-container" >
            <section className="form">
                {/* <img src={logo} alt="Medihelp" /> */}
                
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input placeholder="Enter userName" 
                        value={username}
                        onChange={e=>setuserName(e.target.value)}
                        style={{marginBottom: "10px"}}
                    />
                    <input placeholder="Enter Password" 
                        type="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        style={{marginBottom: "5px"}}
                    />
                    <button className="button" type="submit">Enter</button>

                    <Link className="back-link" to="/Register">
                        <FiUserPlus size={16} color="#17333C" />
                        New user? Register
                    </Link>
                </form>
            </section>

            {/* <img className="big-plane" src={plane} alt="Airplane" /> */}
        </div>
        </>
    );
}