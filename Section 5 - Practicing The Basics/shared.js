let planButtons = document.querySelectorAll('.plans-div button');
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalCancelButton = document.querySelector('.modal__action--negative');

planButtons.forEach(button => {
    button.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    })
})

let cancelButton = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

modalCancelButton.addEventListener('click', cancelButton)

backdrop.addEventListener('click', cancelButton)
