import React, { Component } from 'react';


class Formulairenote extends Component{
    
    constructor(props){
        super(props)
        this.state={
            nom:"",
            prenom:"",
            password:"",
            boxcheck:false,
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.handlersubmit= this.handlersubmit.bind(this)
    } 

    handlerChange=(e)=>{
        const name=e.target.name
        const type=e.target.type
        const value=type==="checkbox"?e.target.checked:e.target.value
        
        this.setState({
            [name]:value
        }) 
        
    }
    handlersubmit=(e)=>{
            e.preventDefault()
            const data=JSON.stringify(this.state)
            console.log(data);
            this.setState=({
            nom:"",
            prenom:"",
            password:"",
            boxcheck:false,
            })
            
    }
   render(){
    return(
        <form onSubmit={this.handlersubmit} className='mt-8'> 
                <div class="mt-2">
                    <label htmlFor='nom' class="mr-1 ">entrez votre nom</label>
                    <input type='text' id='nom' name='nom' value={this.state.nom} onChange={this.handlerChange} required class="border border-pink-950 px-3"/>
                </div>
                    
                <div class="mt-2">
                    
                    <label htmlFor='prenom' class="mr-1">entrez votre prénom</label>
                    <input type='text' id='prenom' name='prenom' value={this.state.prenom} onChange={this.handlerChange} required class="border border-pink-950 px-3"/> 
                </div>
                <div class="mt-2">
                    <label htmlFor='password' class="mr-1">entrez votre mot de passe</label>
                    <input type='password' id='password' name='password' value={this.state.password} onChange={this.handlerChange} required class="border border-pink-950 px-3"/> 
                </div>
                <div class="mt-2">
                    <label htmlFor='boxcheck' class="mr-1">acceptez vous les CGV</label>
                    <input type="checkbox" checked={this.state.boxcheck} onChange={this.handlerChange} id='boxcheck' name='boxcheck' value={this.state.password}  class="border border-pink-950 px-3"/> 
                </div>
                { this.state.boxcheck === true ? <div><p>si un produit est acheté automatiquement il ne sera plus repris</p></div>:null}
                
                    <button class="my-4 border-blue-700 border-[1px] px-2 rounded bg-blue-700 text-neutral-50 "><span>inscription</span></button>
                <div>
                    {JSON.stringify(this.state)}
                </div>
        </form>
    )
   }
} 

export default Formulairenote;