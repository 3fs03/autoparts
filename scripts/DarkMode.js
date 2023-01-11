const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const line = Array.from( document.getElementsByClassName('line'));
    if(localStorage.getItem("body") === 'dark'){
        
    }
    else{
        body.classList.toggle('active');
        line.forEach(element => {
            element.classList.toggle('active');
            
           });   
    }

toggle.addEventListener('click',function(){
    if(localStorage.getItem("body") === 'light'){
        this.removeAttribute('class');
        this.classList.add('fa-solid','fa-sun');
        console.log('light');
        body.classList.toggle('active');
        line.forEach(element => {
            element.classList.toggle('active');
            
           });
        localStorage.setItem("body","dark");
        
    }
    else{
        this.removeAttribute('class');
        this.classList.add('fa-solid','fa-moon');
        console.log('dark');
        body.classList.toggle('active');
        line.forEach(element => {
            element.classList.toggle('active');
            
           });
           localStorage.setItem("body","light");
    }
})