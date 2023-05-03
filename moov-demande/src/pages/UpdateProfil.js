
import React from "react";

function UpdateProfil() {
    return (
        <div className="transition" id="transitionProfil">
            <span className="none" id="closeProfil" onClick={closeIcon}>x</span>
            <div className="elts">
                <form action="" method="" class="form" id="form">
                    <div class="elts">
                        <fieldset class="form-elts">
                            <legend>Informations personnelles</legend>
                            <label>
                                Matricule
                                <input type="text" name="name" placeholder="" />
                            </label>
                            <label>
                                Nom & Prénoms
                                <input type="text" name="name" placeholder="" />
                            </label>
                        </fieldset>
                        <fieldset class="form-elts">
                            <legend>
                                Informations Administratives
                            </legend>
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
                    </div>
                    <div class="input-optn">
                        <input class="Submit" id="validate" type="submit" value="Modifier" />
                    </div>
                </form>
            </div>
        </div>

    )
}

function closeIcon() {
    let transProfil = document.querySelector('#transitionProfil'),
        closeProfil = document.querySelector('#closeProfil');

    transProfil.style.transition = 'width 2s';
    transProfil.style.width = '0%';
    closeProfil.style.display = 'none';
}


export default UpdateProfil;