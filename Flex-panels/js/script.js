window.addEventListener('DOMContentLoaded', () => {

    const panels = document.querySelectorAll('.panel')

    function openToggle () {
        this.classList.toggle('open');
    }
    
    function toggleActive (e) {
        if(e.propertyName.includes('flex')) {
            
            this.classList.toggle('open-active')
        }
    }

    panels.forEach(panel => panel.addEventListener('click', openToggle))
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))


})