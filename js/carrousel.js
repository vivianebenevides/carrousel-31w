

(function () {
    // fonction IFEE
    //debugger;
    console.log('debut du carrousel');
    let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure') // conteneur des images
    let elmCarrousel__form = document.querySelector('.carrousel__form') //conteneur des radio bouton
    console.log(elmGalerie__img.length)
    let index = 0; // initialise la variable index au chargement de la page
    let index__precedent = -1; // initialise la variable index__precedent au chargement de la page
    ajouter_carrousel(); // appeller la function carrousel au chargement de la page 


    console.log(bouton__ouvrir.tagName)

    bouton__ouvrir.addEventListener('mousedown', function () {
        console.log('boite modale')
        if (!elmCarrousel.classList.contains('carrousel--ouvrir')) {
            elmCarrousel.classList.add('carrousel--ouvrir')
            //ajouter_carrousel()
        }
    })

    elmBouton__x.addEventListener('mousedown', function () {
        console.log('boite modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })


    function ajouter_carrousel() {
        for (const elmImg of elmGalerie__img) {
            ajouter_img(elmImg) //ajoute l'image dans le carrousel 
            ajouter_radio() //ajoute les radio bouton dans carrousel__form
        }
        elmCarrousel__figure.children[0].classList.add('carrousel__img--activer')
    }

    function ajouter_img(elmImg) {
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__img.classList.add('carrousel__img')
        elmCarrousel__img.dataset.index = index
        elmCarrousel__figure.appendChild(elmCarrousel__img)
    }

    function ajouter_radio() {
        let elmCarrousel__radio = document.createElement('input')
        elmCarrousel__radio.setAttribute('type', 'radio')
        elmCarrousel__radio.setAttribute('name', 'radCarrousel')
        elmCarrousel__radio.dataset.index = index
        index++
        elmCarrousel__form.appendChild(elmCarrousel__radio)
        elmCarrousel__radio.addEventListener('mousedown', function () {
            activer__image(this.dataset.index)
        })
    }

    function activer__image(index) {
        //falta fazer abetura do carrousel clicando sobre uma img, e falta flecha do carrolel para poder navergar. falt colocar bouton radio e botao y em posicao absoluta
        if (index__precedent != -1) {
            elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer')
        index__precedent = index;
    }


})()