import React from "react";
import '../App.css';
import Header from "./Header";
import Nav from './Nav';
import Help from "./Help";
import Bouton from './Bouton';
import Table from './Table';
import { docList } from './DocumentList';
import DocumentDDC from './DocumentDDC'

function Home() {
  return (
    <div className='App'>
      <Header />
      <div className="block2">
        <Nav />
        <section className="block2-change2">
          {/* <Search /> */}
          <h2 className="bord-title">Tableau de bord</h2>
          <Help />
          <section className="sect1">
            <h3 className="type-document">
              <span>Type de document :</span>
              <span className="document"> {docList[0]} </span>
            </h3>
          </section>
          <Bouton />
          <section className="sect1">
            <h3>Historique</h3>
          </section>
          <Table />
        </section>
        <DocumentDDC />
      </div>
    </div>

  );


}


export default Home;
