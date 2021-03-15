import React, { Component } from 'react';
export class Vehicule extends Component
{
  constructor(props)
  {
    super(props);
    this.state={infos:this.props.data}
    console.log(this.state.infos)
  }
  render()
  {
    return(   
    <div className="card m-2 p-1 " style={{width:18+"rem"}}>
    <img className="card-img-top" src={this.state.infos.image} alt="Voiture"/>
    <div className="card-body d-flex flex-column justify-content-around">
      <h5 className="card-title">{this.state.infos.nom} ({this.state.infos.annee})</h5>
      <div className="card-text">
        <ul>
          <li>Energie : {this.state.infos.energie}</li>
          <li>Puissance : {this.state.infos.puissance} ch</li>
        </ul>
      </div>
    
    </div>
  </div>)
  }
}