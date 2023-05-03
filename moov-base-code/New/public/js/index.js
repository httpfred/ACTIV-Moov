let pop = document.getElementById('pop'),
    profil = document.getElementById('pro'),
    conges = document.querySelector('.btn1'),
    transElt = document.querySelector('#transition'),
    close = document.querySelector('#close'),
    demande = document.querySelector('#demande');

function none() {
    profil.addEventListener('click', function () {
        pop.className = 'pop';
        activ();
    });
}
function activ() {
    profil.addEventListener('click', function () {
        pop.className = 'none';
        none();
    });
}
none();

pop.addEventListener('mouseleave',function () {
    pop.className = 'none';
});

transElt.className = 'transition';
demande.addEventListener('click', function () {
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
});

conges.addEventListener('click', function () {
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
});

close.addEventListener('click', function () {
    transElt.style.transition = 'width 2s';
    transElt.style.width = '0%';
    close.style.display = 'none';
});