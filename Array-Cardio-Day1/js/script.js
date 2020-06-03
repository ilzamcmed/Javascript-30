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

  

})