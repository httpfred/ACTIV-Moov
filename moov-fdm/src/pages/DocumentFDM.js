
import React from "react";

function DocumentFDM() {
    return (
        <div className="transition" id="transition">
            <span className="none" id="close" onClick={closeIcon}>x</span>
            <div className="elts">
                <form action="" method="" className="form" id="form">
                    <div className="elts">
                        <fieldset className="form-elts">
                            <legend>Demandeur</legend>
                            <label>
                                Matricule
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Nom & Prénoms
                                <input type="number" name="name" placeholder="" />
                            </label>
                            <label>
                                Categorie
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Direction
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Division
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Service
                                <input type="text" name="name" placeholder="" />
                            </label>
                        </fieldset>
                        <fieldset className="form-elts">
                            <legend>
                                Interimaire
                                <span className="note">
                                    L'interim ne concerne que les validations dans Moovinside.
                                    Toutes vos taches à venir seront automatiquement ré-affeccté à
                                    l'interimaire durant la periode de la mission
                                </span>
                            </legend>
                            <label>
                                Nom & Prénoms
                                <input type="number" name="name" placeholder="" />
                            </label>
                            <label>
                                Matricule
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Categorie
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Direction
                                <input type="text" name="name" placeholder="" />
                            </label>
                        </fieldset>
                        <fieldset className="form-elts">
                            <legend>Mission</legend>
                            <div className="ligne">
                                <label>
                                    Periode du
                                    <input type="date" name="name" placeholder="" />
                                </label>
                                <label>
                                    Au
                                    <input type="date" name="name" placeholder="" />
                                </label>
                            </div>
                            <div className="ligne">
                                Zone Géographique
                                <label>
                                    <input type="checkbox" name="CI" placeholder="" />Cote d'ivoire
                                </label>
                                <label>
                                    <input type="checkbox" name="Afrique" placeholder="" />Afrique
                                </label>
                                <label>
                                    <input type="checkbox" name="Afrique" placeholder="" />Hors Afrique / Afrique du sud
                                </label>
                            </div>
                            <label>
                                Motif
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Destination
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Commentaire
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Site BTS
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Caisse de paiement
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Mode de paiement
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Doc justificatifs
                                <input type="file" name="name" placeholder="Importer un fichier" />
                            </label>
                        </fieldset>
                        <fieldset className="form-elts">
                            <legend>Frais de mission</legend>
                        </fieldset>
                    </div>
                    <div className="input-optn">
                        <input className="Submit" type="submit" value="Annuler demande" />
                        <input className="Submit" id="validate" type="submit" value="Valider" />
                    </div>
                </form>
            </div>
        </div>

    )
}

function closeIcon() {
    let transElt = document.querySelector('#transition'),
        close = document.querySelector('#close');

    transElt.style.transition = 'width 2s';
    transElt.style.width = '0%';
    close.style.display = 'none';
}



export default DocumentFDM;