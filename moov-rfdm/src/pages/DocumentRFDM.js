
import React from "react";

function DocumentRFDM() {
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
                                Regularisation de la mission
                                <span className="note">
                                </span>
                            </legend>
                            <div className="block">
                                <p>Certication de l'execution effective de la mission</p>
                                <label>
                                    <input type="radio" name="mission" value="" placeholder="" />
                                    La mission a été effectuée
                                </label>
                                <label>
                                    <input type="radio" name="mission" value="" placeholder="" />
                                    La mission n'a été effectuée
                                </label>
                            </div>
                            <div>
                                <p>Remboursement des frais complementaires</p>
                                <label>
                                    Avance N°
                                    <input type="number" name="" value="" placeholder="" />
                                </label>
                                <label>
                                    Du
                                    <input type="date" name="" value="" placeholder="" />
                                </label>
                            </div>
                            <table className="form-table">
                                <tr>
                                    <th>Date debut</th>
                                    <th>Date Fin</th>
                                    <th>Libellé</th>
                                    <th>Nbre</th>
                                    <th>Forfait</th>
                                    <th>Total</th>
                                </tr>
                                <tr>
                                    <td><input type="date" name="" id="" /></td>
                                    <td><input type="date" name="" id="" /></td>
                                    <td>Hotel/Nuits</td>
                                    <td><input type="text" name="" id="" /></td>
                                    <td><input type="text" name="" id="" /></td>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <td><input type="date" name="" id="" /></td>
                                    <td><input type="date" name="" id="" /></td>
                                    <td>Repas/Jours</td>
                                    <td><input type="text" name="" id="" /></td>
                                    <td><input type="text" name="" id="" /></td>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <td><input type="date" name="" id="" /></td>
                                    <td><input type="date" name="" id="" /></td>
                                    <td>Frais de transport</td>
                                    <td><input type="text" name="" id="" /></td>
                                    <td><input type="text" name="" id="" /></td>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <td><input type="date" name="" id="" /></td>
                                    <td><input type="date" name="" id="" /></td>
                                    <td>Autre frais à justifier</td>
                                    <td><input type="text" name="" id="" /></td>
                                    <td><input type="text" name="" id="" /></td>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <td className="colspan" colspan="5">Total (F CFA)</td>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <td className="colspan" colspan="5">Total des Frais déja perçus (F CFA)</td>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                                <tr>
                                    <td className="colspan" colspan="5">Solde à renverser à la caisse (F CFA)</td>
                                    <td><input type="text" name="" id="" /></td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <th>Reference de la transaction</th>
                                    <th>Visa de demandeur</th>
                                    <th>Visa superieur hierachique n+1</th>
                                    <th>Visa controleur interne</th>
                                    <th>Visa service engagement</th>
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


export default DocumentRFDM;