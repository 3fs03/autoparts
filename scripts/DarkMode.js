const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const line = Array.from( document.getElementsByClassName('line'));

toggle.addEventListener('click',function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.classList.toggle('active');
       line.forEach(element => {
        element.classList.toggle('active');
       });
        
    }
    else{
        body.classList.toggle('active');
        line.forEach(element => {
            element.classList.toggle('active');
           });
    }
})