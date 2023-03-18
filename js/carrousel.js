

(function () {
    // fonction IFEE
    let index = 0; // initialise la variable index au chargement de la page
    let index__precedent = -1; // initialise la variable index__precedent au chargement de la page
    console.log('debut du carrousel');
    //let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure') // conteneur des images
    let elmCarrousel__form = document.querySelector('.carrousel__form') //conteneur des radio bouton
    //console.log(elmGalerie__img.length)
    ajouter_carrousel(); // appeller la function carrousel au chargement de la page 
    let elmBoutonReculer = document.querySelector('.fleche__gauche') // conteneur du bouton de navigation fleche gauche
    elmBoutonReculer.addEventListener('mousedown', function () {
        naviguer(elmBoutonReculer.dataset.direction)
    })
    let eleBoutonAvancer = document.querySelector('.fleche__droite')  // conteneur du bouton de navigation fleche droite
    eleBoutonAvancer.addEventListener('mousedown', function () {
        naviguer(eleBoutonAvancer.dataset.direction)
    })
    //console.log(bouton__ouvrir.tagName)

    // bouton__ouvrir.addEventListener('mousedown', function () {
    //     console.log('boite modale')
    //     if (!elmCarrousel.classList.contains('carrousel--ouvrir')) {
    //         elmCarrousel.classList.add('carrousel--ouvrir')
    //         //ajouter_carrousel()
    //     }
    // })

    elmBouton__x.addEventListener('mousedown', function () {
        console.log('boite modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })

    // fonction appelée au clic des boutons de navigation (fleches gauche et droit)
    function naviguer(direction) {
        let valeur
        if (direction == 'avancer') {
            valeur = 1
        }
        else if (direction = 'reculer') {
            valeur = -1
        }

        if (index + valeur < 0) {
            index = elmGalerie__img.length - 1
        }
        else if (index + valeur >= elmGalerie__img.length) {
            index = 0;
        }
        else {
            index += valeur;
        }

        activer__image(index);
    }

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
        elmImg.dataset.index = index // affecter le dataset.index de la photo cliquée à la variable index
        elmImg.addEventListener('mousedown', function () {
            index = parseInt(this.dataset.index)
            //check_radio(index)
            activer__image(index)
        })
        //console.log(elmImg.dataset.index);
        elmCarrousel__figure.appendChild(elmCarrousel__img)
    }

    function ajouter_radio() {
        let elmCarrousel__radio = document.createElement('input')
        elmCarrousel__radio.setAttribute('type', 'radio')
        elmCarrousel__radio.setAttribute('name', 'radCarrousel')
        elmCarrousel__radio.setAttribute('checked', '')
        elmCarrousel__radio.dataset.index = index // affecter le dataset.index du radio bouton cliquée à la variable index
        index++
        elmCarrousel__form.appendChild(elmCarrousel__radio)
        elmCarrousel__radio.addEventListener('mousedown', function () {
            index = parseInt(this.dataset.index)
            //check_radio(index)
            activer__image(index)
        })
    }

    function activer__image(index) {
        // ajout de la classe carrousel--ouvrir dans la liste de classes du elmCarrousel
        check_radio(index)
        if (!elmCarrousel.classList.contains('carrousel--ouvrir')) {
            elmCarrousel.classList.add('carrousel--ouvrir')
        }

        console.log("index activer image " + index)
        if (index__precedent != -1) {
            elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer')
        index__precedent = index;
    }

    //Fonction pour sélectionner le radio bouton correspondent à la valeur de la variable index
    function check_radio(index) {
        document.querySelector('input[type="radio"][data-index="' + index + '"]').checked = true
    }

})()