
import React from "react";

function DocumentDDC() {
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
                            <label>
                                Nature du congés
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Nombre de Jours
                                <input type="number" name="name" placeholder="" />
                            </label>
                            <label>
                                Date de depart souhaité
                                <input type="date" name="name" placeholder="" />
                            </label>
                        </fieldset>
                        <fieldset className="form-elts">
                            <legend>Adresse pendant les congés</legend>
                            <label>
                                Domicile habituel
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Contact téléphonique
                                <input type="tel" name="name" placeholder="" />
                            </label>
                            <label>
                                Personne à contacter
                                <input type="text" name="name" placeholder="" />
                            </label>
                        </fieldset>
                    </div>
                    <div className="note note-bas">
                        NB: La demande de congés une fois validée, doit etre transmise à la
                        DRHO (Gestion Administrative du Personnel) le 15 du mois M-1 précedant
                        la date de depart en congé
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


export default DocumentDDC;