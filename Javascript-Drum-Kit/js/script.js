window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('keydown', (e) => {

        const audio = this.document.querySelector(`audio[data-key='${e.keyCode}']`)
        this.console.log(audio)
        audio.currentTime = 0;
        audio.play()

        const pressKey = this.document.querySelector(`.key[data-key='${e.keyCode}']`)
        pressKey.classList.add('playing')


        const removeEffect = (e) => {
            if (e.propertyName !== 'transform') return;
            console.log(e.propertyName)
            pressKey.classList.remove('playing')
        }

        const allKeys = this.document.querySelectorAll('.key')
        allKeys.forEach(key => key.addEventListener('transitionend', removeEffect));


    })


})