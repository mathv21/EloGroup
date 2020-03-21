import React, { useState }  from 'react';
import api from '../../services/api';

// |> Importando Css e logo.
import '../components/FormStyle/BaseForm.css';
import '../components/FormStyle/Triangle.css';
import '../components/FormStyle/RadioButtom.css';
import '../components/FormStyle/Checkboxes.css';

import './styles.css';
import Logo  from '../../assets/EloGroup.png';


function Form(){

    const [Name, setName] = useState('');
    const [Telphone, setTelphone] = useState('');
    const [Cnc, setCnc] = useState('');
    const [SocialMidia, setSocialMidia] = useState('');

   async function handleSubmit(e){
        e.preventDefault()
        
        const response = await api.post('/users', {
            Name,
            Telphone,
            Cnc,
            SocialMidia
        })

        console.log(response.data);

        setName('');
        setTelphone('');
        setCnc('');
        setSocialMidia('');
    }

    return(
    <article className="formBase">

        <div className="triangle-right"/>
        <div className="triangle-left"/>

        <div className="LogoElo">
                 <img src={Logo} alt="LogoELo"/> 
                 <h1>FORM</h1><h4>CHALLENGER</h4>
                 
             <div className="box-form">
                <form onSubmit={handleSubmit} className="formElo" method="post">
                    <h3>INSCREVA-SE</h3>
                    <input 
                        onChange={e => setName(e.target.value)} 
                        value={Name} 
                        name="Name" 
                        type="text" 
                        placeholder="Nome"
                        required
                        />    

                    <input 
                        onChange={e => setTelphone(e.target.value)} 
                        value={Telphone}  
                        name="Telphone" 
                        type="text" 
                        placeholder="Telefone"
                        required
                        />

                    <select onChange={e => setCnc(e.target.value)} value={Cnc}  type="select" name="Cnc" required>
                        <option value="Tv">Tv</option>
                        <option value="Internet">Internet</option>
                        <option value="Outros">Outros</option>
                    </select>
                        <label name="Redes">Possui Redes Sociais?</label>
                    <div className="SocialM">
                        <input  type="radio" name="rdo" id="yes"/>
                        <input  type="radio" name="rdo" id="no"/>

                        <div className="switch">
                            <label htmlFor="yes">Sim</label>
                            <label htmlFor="no">Não</label>
                            <span></span>

                            <div className="Checkboxes" onChange={e => setSocialMidia(e.target.value)} value={SocialMidia} >
                                <div className="box" >
                                    <input value="Instagram" id="one" type="checkbox" />
                                    <span className="check"></span>
                                    <label htmlFor="one">Instagram</label>
                                </div>

                                <div className="box">
                                    <input  value="Linkedin" id="two" type="checkbox"/>
                                    <span className="check"></span>
                                    <label htmlFor="two">Linkedin</label>
                                </div>
                                
                                <div className="box">
                                    <input value="Facebook" id="three" type="checkbox"/>
                                    <span className="check"></span>
                                    <label htmlFor="three">Facebook</label>
                                </div>
                            </div>
                        </div>
                    </div>

                        <button name="buttom-Elo" type="submit">ENVIAR</button>
                </form>
            </div>
         </div>
    </article>
    );
}

export default Form;