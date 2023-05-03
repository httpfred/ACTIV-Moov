import profilcon from '../asserts/person-vcard-fill.svg'
import see from '../asserts/eye.svg'


function Nav() {
    return (
        <nav className="nav">
            <ul className="show-color">
                <li className="color-0 color-ad" id="color-0" onClick={showForms}>
                    <img src={profilcon} alt="" />
                </li>
                <li className="color-1 color-ad" id="color-1">
                    <img src={see} alt="" />
                </li>
                {/* 
                <li className="color-2 color-ad" id="color-2">
                    <img src={see} alt="" />
                </li>
                <li className="color-3 color-ad" id="color-3">
                    <img src={see} alt="" />
                </li>
                <li className="color-4 color-ad" id="color-4">
                    <img src={see} alt="" />
                </li>
                <li className="color-5 color-ad" id="color-5">
                    <img src={see} alt="" />
                </li>
                <li className="color-6 color-ad" id="color-6">
                    <img src={see} alt="" />
                </li> 
                */}
            </ul>
        </nav>
    )
}

function showForms() {
    let transProfil = document.querySelector('#transitionProfil'),
        closeProfil = document.querySelector('#closeProfil');

    transProfil.className = 'transition';
    transProfil.style.width = '100%';

    closeProfil.style.zIndex = '15';
    closeProfil.style.display = 'flex';
    closeProfil.style.flexDirection = 'row';
    closeProfil.style.justifyContent = 'center';
    closeProfil.style.alignItems = 'center';
    closeProfil.style.position = 'absolute';
    closeProfil.style.top = '5px';
    closeProfil.style.right = '5px';
    closeProfil.style.color = 'white';
    closeProfil.style.backgroundColor = '#E96805';
    closeProfil.style.width = '20px';
    closeProfil.style.height = '20px';
    closeProfil.style.padding = '5px';
    closeProfil.style.fontSize = '20px';
    closeProfil.style.borderRadius = '20px';

}

export default Nav;