window.addEventListener('DOMContentLoaded', () => {

    const inventors = [{
            first: 'Albert',
            last: 'Einstein',
            year: 1879,
            passed: 1955
        },
        {
            first: 'Isaac',
            last: 'Newton',
            year: 1643,
            passed: 1727
        },
        {
            first: 'Galileo',
            last: 'Galilei',
            year: 1564,
            passed: 1642
        },
        {
            first: 'Marie',
            last: 'Curie',
            year: 1867,
            passed: 1934
        },
        {
            first: 'Johannes',
            last: 'Kepler',
            year: 1571,
            passed: 1630
        },
        {
            first: 'Nicolaus',
            last: 'Copernicus',
            year: 1473,
            passed: 1543
        },
        {
            first: 'Max',
            last: 'Planck',
            year: 1858,
            passed: 1947
        }
    ]

    const pessoas = ['Medeiros, Ilza', 'Cabral, Aline', 'Medeiros, Filipe', 'Sobral, Amanda', 'Melo, Marina', 'Dantas, Ricardo', 'Cunha, Fernando', 'Medeiros, Mariana', 'Medeiros, Matheus', 'Almeida, Morgana', 'Vasconcelos, Daniele', 'Andrade, Raquel', 'Bennet, Elisabeth', 'Bennet, Mary', 'Darcy, Fitzwilliam', 'Bennet, Jane', 'Bennet, Lidia', 'Stark, Tony', 'Skywalker, Luke', 'Skywalker, Leia', 'Vader, Darth', 'Kenobi, Obi Wan', 'Solo, Han', 'Potter, Harry', 'Granger, Hermione', 'Weasley, Ronald', 'Snape, Severo', 'Dumbledore, Alvo', 'Malfoy, Draco', 'Malfoy Lucius', 'Loongbottom, Neville', 'Lovegood, Luna', 'Weasley, Gina']

    //Array Filter()
    //1. Filter the list of the inverntors for those who were born in the 1500's
    const oldAge = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
    console.table(oldAge)

    //Array Map()
    //2. Give Us an Array of the inventers first and last names

    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.log(fullNames)

    //Array Sort()
    //3. Sort the inventors by birthdate, oldest to youngest 

    // const ordered = inventors.sort( (a, b) => {
    //     if(a.year > b.year) {
    //         return 1; 
    //     } else {
    //         return -1;  
    //     }
    // }) 

    //usando operador ternário
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
    console.table(ordered)


    // Array reduce()
    //4. How many years did all the inventors lived?

    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
    console.log('Eles viveram : ' + totalYears + ' anos.')

    //.Sort the inventors by years lived
    const oldest = inventors.sort((a, b) => {
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;

        return lastGuy > nextGuy ? -1 : 1
    })
    console.table(oldest);


    //Create a list os places in Paris that contain the word 'da' un the name, using the wikipedia link

    //  const category = document.querySelector('.mw-category');
    //  //here we create an array to receive all the links
    //  const links = [category.querySelectorAll('a')];
    //  const de = links 
    //                 .map(link => link.textContent)
    //                 .filter(streetName => streetName.includes('de'))


    //Organize the people names alphabetically by the last name                

    const alphabet = pessoas.sort((lastName, firstName) => {

        const [aLast, aFirst] = lastName.split(',');
        const [bLast, bFirst] = firstName.split(',');

        return aLast > bLast ? 1 : -1
    })
    console.log(alphabet)


})