import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Constructeur extends Component {
  constructor(props) {
    super(props);
    this.state = { infos: this.props.data };
  }
  componentDidMount=()=>{
    if (this.props.id) {
      fetch("http://localhost/contructeur.php?id="+this.props.id).then((reponse)=>reponse.json()).then((data)=>{this.setState({infos:data})})
    }
  }
  render() {
    if (this.props.id) {
      
    }
    if (this.props.crud === "read") {
      return (
        <div className="card m-2 p-1 " style={{ width: 18 + "rem" }}>
          <img
            className="card-img-top"
            src={this.state.infos.image}
            alt="Logo de la marque"
          />
          <div className="card-body d-flex flex-column justify-content-around">
            <h5 className="card-title">{this.state.infos.nom}</h5>
            <div className="card-text">
              La société {this.state.infos.nom} fut fondée en{" "}
              {this.state.infos.creation}.<br /> Elle a pour activité la
              production de :{" "}
              <ul>
                {this.state.infos.activites.map((act) => (
                  <li key={act.id}>{act.label}</li>
                ))}{" "}
              </ul>{" "}
            </div>
            <Link to={`constructeur/` + this.props.id}>
              <button className="btn btn-primary">Voir les véhicules</button>
              <br />
              <br />
            </Link>
            <button className="btn btn-danger" onClick={this.effacer}>
              supprime les véhicules
            </button>
            <br />
            <br />
            <button className="btn btn-warning">modifier les véhicules</button>
            <br />
            <br />
          </div>
        </div>
      );
    } else if (this.props.crud === "update") {
      return(
      <>
        <form>
          <input
            name="id"
            type="number"
            hidden
            required
            readOnly
            defaultValue={this.props.id}
          />
          <label for="inputNom">Nom</label>
          <input
            type="text"
            id="inputNom"
            name="nom"
            required
            defaultValue={this.state.infos.nom}
            className="form-control"
          />
          <label for="inputCreation">Année de création</label>
          <input
            type="number"
            id="inputCreation"
            name="creation"
            required
            defaultValue={this.state.infos.creation}
            className="form-control"
          />
          <label for="inputPays">Pays</label>
          <input
            type="text"
            id="inputPays"
            name="siegeSocial"
            required
            defaultValue={this.state.infos.siegeSocial}
            className="form-control"
          />
          <label for="">URL Image</label>
          <input
            type="url"
            id="inputImage"
            name="image"
            required
            defaultValue={this.state.infos.image}
            className="form-control"
          />
          <button>Modifier</button>
        </form>
      </>
      );
    }
  }

  renderVehicules = () => {
    alert(this.props.id);
    //ReactDOM.render(<ListVehicule id={this.props.id} data={this.state.infos.vehicules}/>,document.querySelector('#root'))
  };

  handleChange = (event) => {
    let nouvelleValeur = event.target.value; // la valeur de l'etat Online, Offline ...
    let etatAchanger = event.target.name; // le state que je cherche a modifier (il corespond au name du select ou input ...)
    let changement = {}; //un objet
    changement[etatAchanger] = nouvelleValeur; // l'objet changement contient maintenant la clé du state et la nouvelle valeur
    this.setState(changement); // Modification de l'etat
  };
  effacer = () => {
    if (window.confirm("effacer le constructeur ?" + this.state.infos.nom)) {
    }
    fetch(
      "http://localhost/VoitureAPI/deleteconstructeur.php?id=" + this.props.id
    ).then((response) => {
      window.location.reload();
    });
  };
}
