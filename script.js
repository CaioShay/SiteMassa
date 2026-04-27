const menu_bt = document.getElementById('menu-bt')
const close_bt = document.getElementById('close-bt')
const menu = document.getElementById('menu')

menu_bt.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

close_bt.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

const contact_bts = document.querySelectorAll('.contact-bt')

contact_bts.forEach(
    (bt)=>{
        bt.addEventListener('click',()=>{
            window.open("https://www.instagram.com/caio_shay123/", "_blank")
        })
    }
)