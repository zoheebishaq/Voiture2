import React, { Component } from 'react';
import { Vehicule } from "./Vehicule";

export class ListVehicule extends Component
{
  constructor(props)
  {
    super(props)
    this.state={}
  }
  
  componentDidMount()
  {
    const id = this.props.idConstructeur.match.params.idConstructeur;    
    console.log(id);
    fetch("http://localhost/VoitureAPI/vehicule.php?idConstructeur="+id).then(
      (response)=>response.json()
    ).then(
      (response)=>this.setState({lesVehicules:response})
    )
  }

  renderVehicule(unVehicule){
    console.log("RENDERvehicule : "+unVehicule.id)
    return(
     
      <Vehicule id={unVehicule.id} data={unVehicule} key={unVehicule.id}/>
    )
  }
  render()
  {
    if(this.state.lesVehicules)
    {
    return (
      <React.Fragment>
      <div className="row d-flex justify-content-around" >
        
      {this.state.lesVehicules.map((unVehicule)=>this.renderVehicule(unVehicule))}
    </div>
    </React.Fragment>
    )
    }
    else {
      return (<h2>Chargement</h2>)
    }
  }
}