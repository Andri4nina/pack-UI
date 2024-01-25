

// Prendre toute les entete des accordions
const accordionHeader = document.querySelectorAll('.accordion-header');

//Ajouter un evenement click sur chacun
accordionHeader.forEach(accordionHeader=>{
    accordionHeader.addEventListener('click', () => {
        accordionHeader.classList.toggle('active');
        // Trouver le contenu de chaque section d'accordion
        const accordionBody = accordionHeader.nextElementSibling;
        if(accordionHeader.classList.contains('active')){
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        }else{
            accordionBody.style.maxHeight = 0;
        }
    });
});


/* Carousel */
/* Activation du bouton next */
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
/* Activation du bouton prev */
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


/* Mouvement automatique du carousel */
function moveElement() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
moveElement();
setInterval(moveElement, 7000);
    
/* dropdown */
/* Affichage dans l'input */
function show(anythings){
    document.querySelector('.text-box').value =anythings;
}

/* Affichage du dropdown */
let dropdown = document.querySelector('.dropdown');
let option = document.querySelector('.option')
    dropdown.onclick = function(){
        dropdown.classList.toggle('before:top-4');
        dropdown.classList.toggle('before:top-4');
        dropdown.classList.toggle('before:rotate-45');
        dropdown.classList.toggle('before:-rotate-45');
        option.classList.toggle('hidden');
        
    }