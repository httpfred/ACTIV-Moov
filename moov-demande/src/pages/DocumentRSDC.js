
import React from "react";

function DocumentRSDC() {
    return (
        <div className="transition" id="transition">
            <span className="none" id="close">x</span>
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
                                Regularisation de la sortie de caisse
                            </legend>
                            <label>
                                Montant
                                <input type="number" name="" value="" placeholder="" />
                            </label>
                            <label>
                                Solde à renverser
                                <input type="number" name="" value="" placeholder="" />
                            </label>
                            <label>
                                Observation
                                <input type="text" name="" value="" placeholder="" />
                            </label>
                            <label>
                                Doc justifiactifs
                                <input type="file" name="" value="" placeholder="" />
                            </label>
                            <table>
                                <tr>
                                    <th>Reference de la transaction</th>
                                    <th>Visa du demandeur</th>
                                    <th>Visa superieur hierachique n+1</th>
                                    <th>Visa controle interne</th>
                                    <th>Visa Visa Service engagement</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
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

export default DocumentRSDC;