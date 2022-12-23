const panels = document.querySelectorAll('.panel')

function toggleOpen(){
    
    console.log(this); // direk panel clasının kapladığı alır
    this.classList.toggle('open')

    /* Başka Bir Yol */
    // if(e.target.classList.contains('panel')){
    //     console.log('hello here is panel');
    //     e.target.classList.toggle('open')
    // }
}

function toggleActive(e){

    console.log('panel class:', this, e.propertyName);
    if(e.propertyName.includes('flex-grow')){
        console.log('flex-grow içeriyor');
        this.classList.toggle('open-active')
    }
    /* Benim Yöntemim */
    // if(e.target.classList.contains('panel')){
    //     if(e.propertyName.includes('flex'))
    //     e.target.classList.toggle('open-active')
    // }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))