import React from 'react';

function Bouton() {
    return (
        <section className="sect-btn">
            <button className="btn btn1" id="demande" onClick={showForms}>
                {/* <span className='elt'>Demande de congés</span> */}
                Afficher le document
            </button>

            {/* 
            <button className="btn btn2">
                Regulation de frais de mission
            </button>
            <button className="btn btn3">
                Frais de mission
            </button>
            <button className="btn btn4">
                Regulation sortie de caisse
            </button>
            <button className="btn btn5">
                Autorisation d'absence
            </button>
            <button className="btn btn6">
                Sortie de caisse
            </button> 
            */}
        </section>
    )
}



function showForms() {
    let transElt = document.querySelector('#transition'),
        close = document.querySelector('#close');


    transElt.className = 'transition';
    transElt.style.width = '100%';

    close.style.zIndex = '15';
    close.style.display = 'flex';
    close.style.flexDirection = 'row';
    close.style.justifyContent = 'center';
    close.style.alignItems = 'center';
    close.style.position = 'absolute';
    close.style.top = '5px';
    close.style.right = '5px';
    close.style.color = 'white';
    close.style.backgroundColor = '#E96805';
    close.style.textAlign = 'center';
    close.style.width = '20px';
    close.style.height = '20px';
    close.style.padding = '5px';
    close.style.fontSize = '20px';
    close.style.borderRadius = '20px';

}



export default Bouton;