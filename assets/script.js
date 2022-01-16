window.addEventListener('scroll', sticky);
function sticky(){
    if(window.scrollY > 100){
        document.querySelector('header').classList.add('sticky')
    }else{
        document.querySelector('header').classList.remove('sticky')
    }
}
document.querySelector('.hamburger').addEventListener('click', openn)
function openn(){
    document.querySelector('body').classList.toggle('active')
    document.querySelector('.line1').classList.toggle('active')
    document.querySelector('.line2').classList.toggle('active')
    document.querySelector('.line3').classList.toggle('active')
    document.querySelector('.hamburger').classList.toggle('active')
    if(screen.width < 640){
        document.querySelector('.hamburger').style.display = 'none'
    }
}
function closee(){
    document.querySelector('body').classList.toggle('active')
    document.querySelector('.line1').classList.toggle('active')
    document.querySelector('.line2').classList.toggle('active')
    document.querySelector('.line3').classList.toggle('active')
    document.querySelector('.hamburger').classList.toggle('active')
    if(screen.width < 640){
        document.querySelector('.hamburger').style.display = 'flex'
    }
}