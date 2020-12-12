//Get modal elements

let modalBtn = document.getElementById('modal-btn');

let modal = document.getElementsByClassName('modal')[0];

let closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

// if outside is clicked

window.addEventListener('click', e => {
    if(e.target == modal){
        modal.style.display = 'none';
    }
});