let menu =document.querySelector('#menu-icon');
    let navmenu =document.querySelector('.navmenu');
    
    menu.onclick = () =>{
        menu.classList.toggle('bx-x')
        navmenu.classList.toggle('open')
    }




let btn = document.getElementById('btn-img')

btn.onclick=function(){
    document.body.classList.toggle('dark-theame')

    if(document.body.classList.contains('dark-theame')){
        btn.src="./images/night-mode.png"
    }else{
        btn.src="./images/—Pngtree—sun icon design_4816760.png"
        btn.style.width='20px'
    }
}


let loader = document.getElementById('preloader');
window.addEventListener("load",function(){
    loader.style.display="none"
})


  
// image gallery
function myfun(smallllimg){
    let bigimg=document.getElementById('mainimg')
bigimg.src= smallllimg.src;

}


document.addEventListener('contextmenu',(event)=>{
    event.preventDefault();

})
  


