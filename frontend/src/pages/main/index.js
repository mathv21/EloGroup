import React, { Component } from "react";
import api from '../../services/api';
import './styles.css';
import undraw  from '../../assets/undrawn.svg'

export default class Main extends Component{

    state = {
        users: [],
        userInfo: {},
        page: 1,
    };

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = async (page = 1) =>{
        const response = await api.get(`/users?page=${page}`);
        
        const {docs , ...userInfo} = response.data;

        this.setState({ users: docs, userInfo, page});
    };

    prevPage = () =>{
        const { page, userInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadUsers(pageNumber);
    }
    
    nextPage = () =>{
        const { page, userInfo} = this.state;

        if(page === userInfo.pages) return;

        const pageNumber = page + 1;

        this.loadUsers(pageNumber);

    }

    render(){
        const { users, page, userInfo } = this.state; 

        return (
           <div className="Users-List">
               {users.map(user => (
                   <article key={user._id}>
                       <strong>{user.Name}</strong>
                       <p>Telefone: {user.Telphone}</p>
                       <p>Como nos Conheceu?: {user.Cnc}</p>
                       <p>Redes Sociais: {user.SocialMidia}</p>
                   </article>
               ))}

               <div className="actions">
                   <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                   <button disabled={ page === userInfo.pages} onClick={this.nextPage}>Proximo</button>
               </div>
           </div>  
        );
    }
}