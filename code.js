const menu_bt = document.getElementById('menu-bt')
const close_bt = document.getElementById('close-bt')
const menu = document.getElementById('menu')

menu_bt.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

close_bt.addEventListener('click',()=>{
    menu.classList.toggle('active');
})