
import React from "react";

function DocumentSDC() {
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
                                Sortie de caisse
                            </legend>
                            <label>
                                Montant
                                <input type="text" name="" value="" placeholder="" />
                            </label>
                            <label>
                                Mode de paiement
                                <input type="text" name="" value="" placeholder="" />
                            </label>
                            <label>
                                Payer à
                                <input type="text" name="" value="" placeholder="" />
                            </label>
                            <label>
                                Caisse de paiement
                                <input type="text" name="" value="" placeholder="" />
                            </label>
                            <label>
                                Objet de regelement
                                <input type="file" name="" value="" placeholder="" />
                            </label>
                            <table>
                                <tr>
                                    <th>Reference de la transaction</th>
                                    <th>Visa superieur hierachique n+1</th>
                                    <th>Visa superieur directeur</th>
                                    <th>Visa DFC</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <th>Reference de la transaction</th>
                                    <th>Visa DG (mission de + 500 milles)</th>
                                    <th>Visa service engagement</th>
                                    <th>Visa rav (autres lieu de paiement</th>
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

function closeIcon() {
    let transElt = document.querySelector('#transition'),
        close = document.querySelector('#close');

    transElt.style.transition = 'width 2s';
    transElt.style.width = '0%';
    close.style.display = 'none';
}


export default DocumentSDC;