const content = document.querySelector('.content')
const modal = document.querySelector('.modal')
const btns = document.querySelectorAll('.btn')

// .console.log(btns);

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        content.classList.toggle('active')
        modal.classList.toggle('active')
    })
});