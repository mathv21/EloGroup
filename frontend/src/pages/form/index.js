import React, { Component }  from 'react';
import api from '../../services/api';

// |> Importando Css e logo.
import '../components/FormStyle/BaseForm.css';
import '../components/FormStyle/Triangle.css';
import '../components/FormStyle/RadioButtom.css';
import '../components/FormStyle/Checkboxes.css';
import './styles.css';
import Logo  from '../../assets/EloGroup.png';

export default class Form extends Component{
    
    state = {
        Name: '',
        Telphone: '',
        Cnc: '',
        SocialMidia: [ ]
    }

    handleSocialMidias = e =>{
       this.setState({ SocialMidia: [e.target.value]});
    }


    handleSubmit = async e =>{
        

        e.preventDefault();

        console.log(this.state);
    }
   
    handleChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(
    <body className="formBase">

        <div className="triangle-right"/>
        <div className="triangle-left"/>

        <div className="LogoElo">
                 <img src={Logo} alt="LogoELo"/> 
                 <h1>FORM <h4>CHALLENGER</h4> </h1>
                 

             <div className="box-form">
                <form onSubmit={this.handleSubmit} className="formElo" action="#" method="post">
                    <h3>INSCREVA-SE</h3>
                    <input onChange={this.handleChange} value={this.state.Name} name="Name" type="text" placeholder="Nome"/>                    
                    <input onChange={this.handleChange} value={this.state.Telphone} type="text" placeholder="Telefone" name="Telphone"/>

                    <select onChange={this.handleChange} value={this.state.Cnc}  type="select" name="Cnc">
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

                            <div className="Checkboxes" onChange={this.handleSocialMidias} value={this.state.SocialMidia }>
                                <div class="box" >
                                    <input value="Instagram" id="one" type="checkbox" />
                                    <span class="check"></span>
                                    <label htmlFor="one">Instagram</label>
                                </div>

                                <div class="box">
                                    <input  value="Linkedin" id="two" type="checkbox"/>
                                    <span class="check"></span>
                                    <label htmlFor="two">Linkedin</label>
                                </div>
                                
                                <div class="box">
                                    <input value="Facebook" id="three" type="checkbox"/>
                                    <span class="check"></span>
                                    <label htmlFor="three">Facebook</label>
                                </div>
                            </div>
                        </div>
                    </div>
                        <button name="buttom-Elo" onClick={this.handleSubmit} type="submit">ENVIAR</button>
                </form>
            </div>

         </div> 
    </body>
    );
  }
}

