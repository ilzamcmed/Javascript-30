window.addEventListener('DOMContentLoaded', () => {

    // Seleciona as divs pela className
    const clockSeconds = document.querySelector('.clock_seconds')
    const clockMinutes = document.querySelector('.clock_minutes')
    const clockHours = document.querySelector('.clock_hours')

    //Função para configurar como cada pointer vai se comportar
    const setDate = () => {

        //diz que now recebe a data
        const now = new Date();

        //Diz que as variáveis recem o valor da data em segundo, minutos e horas com o get...()
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        
        //Diz onde as variáveis deve ficar, de acordo com a rotaçã em 360º. Os segundos e minutos são divididos por 60 e as horas por 12. Depois todos são multiplocados por 360(relativo a rotação). A soma de 90 se dá para reiniciar o default da angulação.
        const secondsDegree = ((seconds / 60) * 360 + 90);
        const minutesDegree =((minutes / 60) * 360 + 90);
        const hoursDegree = ((hours / 12) * 360 + 90);

        clockSeconds.style.transform = `rotate(${secondsDegree}deg)`;
        clockMinutes.style.transform = `rotate(${minutesDegree}deg)`;
        clockHours.style.transform = `rotate(${hoursDegree}deg)`

    }

    setInterval(setDate, 1000);
} )