import React, { Component } from "react";
import { Constructeur } from "./Constructeur";

export class ListConstructeur extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch("http://localhost/VoitureAPI/constructeur.php")
      .then((response) => response.json())
      .then((data) => this.setState({ lesConstructeurs: data }));
  }
  renderConstructeur(uneMarque) {
    return (
      <Constructeur id={uneMarque.id} crud="read" data={uneMarque} key={uneMarque.id} />
    );
  }
  render() {
    if (this.state.lesConstructeurs) {
      return (
        <div className="row d-flex justify-content-around">
          <div>
            <button className="btn btn-success">ajouter un Constructeur</button>
          </div>
          {this.state.lesConstructeurs.map((uneMarque) =>
            this.renderConstructeur(uneMarque)
          )}
        </div>
      );
    } else {
      return <div>Chargement</div>;
    }
  }
}
