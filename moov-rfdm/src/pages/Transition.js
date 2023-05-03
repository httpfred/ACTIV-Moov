
import React from "react";

function Transition() {
    return (
        <div className="none" id="transition">
            <span className="none" id="close">x</span>
            <div className="elts">
                <form action="" method="" className="form" id="form">
                    <fieldset className="form-elts">
                        <legend>Motif de la demande</legend>
                        <label>
                            <input type="text" name="name" placeholder="Nature du congés" />
                        </label>
                        <label>
                            <input type="number" name="name" placeholder="Nombre de Jours" />
                        </label>
                        <label>
                            <input type="date" name="name" placeholder="Date de depart souhaité" />
                        </label>
                    </fieldset>
                    <fieldset className="form-elts">
                        <legend>Adresse pendant les congés</legend>
                        <label>
                            <input type="text" name="name" placeholder="Domicile habituel" />
                        </label>
                        <label>
                            <input type="tel" name="name" placeholder="Contact téléphonique" />
                        </label>
                        <label>
                            <input type="text" name="name" placeholder="Personne à contacter" />
                        </label>
                    </fieldset>
                    <div className="input-optn">
                        <input className="Submit" type="submit" value="Annuler demande" />
                        <input className="Submit" id="validate" type="submit" value="Valider" />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Transition