const pessoas = [{
        nome: 'Ricardo',
        ano: 2018
    },
    {
        nome: 'Aline',
        ano: 1986
    },
    {
        nome: 'Marina',
        ano: 1987
    },
    {
        nome: 'Filipe',
        ano: 2012
    }
];

const comentarios = [{
        texto: 'Amo isso!',
        id: 535353
    },
    {
        texto: 'Muito bom!',
        id: 454545
    },
    {
        texto: 'Você é o melhor!',
        id: 232323
    },
    {
        texto: 'Lasanha é meu preferido!',
        id: 121212
    },
    {
        texto: 'Uhhuuuu!',
        id: 898989
    }
]

// usando SOME
//tem pelo menos alguma pessoa maior que 19 anos??
// const adulto = pessoas.some(pessoa => {
//             const anoAtual = new Date().getFullYear();
//             const idade = anoAtual - pessoa.ano;
//             if (idade >= 19) {
//                 return true;
//             }
//         })
//     const adulto = pessoas.some( pessoa => (new Date().getFullYear()) -pessoa.ano >= 19);
//     console.log({adulto})


// //Todo mundo tem 19?

// const maiorIdade = pessoas.every( pessoa => (new Date().getFullYear()) - pessoa.ano >= 19);
// console.log({maiorIdade})


//Usando FIND
//encontre um comentario com o ID 898989
// const comment = comentarios.find( item => item.id === 898989 ? true : false )
// console.log({comment})

//encontre o comentário com o id 454545 e delete ele

const encontraIndex = comentarios.findIndex(item => item.id === 454545);

console.log(encontraIndex)
//usa o SPLICE para deletar
comentarios.splice(encontraIndex, 1)
console.table(comentarios)