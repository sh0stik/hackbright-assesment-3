
function answersAboutMe(id) {
    if (id === 'color') {
        alert("My favorite color is Viva Magenta")
    } else if (id === 'place') {
        alert("My favorite place is Saint Petersburg")
    } else if (id === 'ritual') {
        alert("My favorite ritual is an early morning breakfast alone")
    }
}



let favColor = document.querySelector('#color');
let favPlace = document.querySelector('#place');
let favRitual = document.querySelector('#ritual');
favColor.addEventListener('click', () => answersAboutMe(favColor.id));
favPlace.addEventListener('click', () => answersAboutMe(favPlace.id));
favRitual.addEventListener('click', () => answersAboutMe(favRitual.id));
