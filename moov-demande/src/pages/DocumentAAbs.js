
import React from "react";

function DocumentAAbs() {
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
                            <legend>Motif de la demande</legend>
                            <div className="radio">
                                Nature Absence :
                                <div>
                                    <label>
                                        <input type="radio" name="Absence" id="" value="Absence exceptionnelle" />
                                        Absence exceptionnelle
                                    </label>
                                    <label>
                                        <input type="radio" name="Absence" id="" value="Permission exceptionnelle" />
                                        Permission exceptionnelle
                                    </label>
                                </div>
                            </div>
                            <label>
                                Motif
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Durée
                                <input type="number" name="name" placeholder="" />
                            </label>
                            <label>
                                Date de debut
                                <input type="date" name="name" placeholder="" />
                            </label>
                            <label>
                                Date de Fin
                                <input type="date" name="name" placeholder="" />
                            </label>
                            <label>
                                Date de reprise
                                <input type="date" name="name" placeholder="" />
                            </label>
                            <label>
                                Doc justificatifs
                                <input type="file" name="name" placeholder="Importer un fichier" />
                            </label>
                        </fieldset>
                    </div>
                    <div className="note note-bas">
                        NB: Le nombre total de jours accordés au titre des permissions exceptionnelles elt
                        limité à 10 jours ouvrables par employé et par an
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

export default DocumentAAbs;