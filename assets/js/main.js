let header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    console.log(header.clientHeight);
    if(window.pageYOffset > header.clientHeight*2){
        header.classList.add('header_show');
    }else{
        header.classList.remove('header_show');
    }
});