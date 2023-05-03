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
    close.style.width = '20px';
    close.style.height = '20px';
    close.style.padding = '5px';
    close.style.fontSize = '20px';
    close.style.borderRadius = '20px';

}

export default Nav;