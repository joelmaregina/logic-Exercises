//Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como parâmetro um array de palavras.
// Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro.

function transformaParaMaiusculo(palavras){
    var novoArray = [];
    for (i=0; i < palavras.length; i++){
        novoArray.push(palavras[i].toUpperCase());

    }        
    return novoArray; 
}

console.log(transformaParaMaiusculo(["gato","cachorro","tartaruga"]));

//Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)
// Essa função deve receber dois parâmetros:
// O primeiro deve representar o nome de um aluno
// O segundo deve representar um array com o os nomes dos alunos presentes.
// A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. false caso contrário.

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
    if (nomesDosPresentes.indexOf(nomeDoAluno) >= 0){
        return true;
    } else if (nomesDosPresentes.indexOf(nomeDoAluno) == -1){
        return false
    }
}

// O seu trabalho é escrever uma função gerarDezenas(). Essa função não recebe nenhum parâmetro. Tudo que ela deve fazer é gerar e retornar um array contendo seis números aleatórios entre 1 e 60.

function gerarDezenas(){
    var array = [];
    for (i = 1; i <= 6; i++){
        var aleatorio = Math.round(Math.random() * 60);
        array.push(aleatorio);
    }
    return array;
}

// Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
// Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros da função maxmin e o segundo elemento é o maior dos parâmetros da função maxmin.

function maxmin (a, b, c, d, e){
    novoArray = [];
    var menorValor = Math.min(a, b, c, d, e);
    var maiorValor = Math.max(a, b, c, d, e);
    novoArray.push(menorValor, maiorValor)
    return novoArray;
}

// No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas. Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador.
// Escreva um código que nos informe quais moradores poderão utilizar o elevador com base na variável moradores. O número do apartamento é a sua posição no array. O nome do morador é o valor.
// Imprima no console a seguinte frase: 'O morador <nome do morador> pode usar o elevador', substituindo <nome do morador> pelo nome do morador.
var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]

for (i = 0; i < moradores.length; i++){
    if (i % 2 == 0 ){
        console.log("O morador " + moradores[i] + " pode usar o elevador" )
    }
}

// Em uma  academia estão cadastrando nome, idade e altura de vários usuários.
// Um determinado treino exige os seguintes requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.
// Crie uma função chamada maiorAlto. Essa função irá receber um array como parâmetro. Este array terá o nome na primeira posição, a idade na segunda posição e a altura em centímetros na terceira posição. Ela também deve retornar verdadeiro (true) caso o aluno atenda os requisitos, ou falso (false) caso contrário.
function maiorAlto(array) {
    for (i = 0; i < array.length; i++){
        if(array[1] >= 18 && array[2] >= 170){
            return true;
        } else{
            return false;
        }
    }   
}

// Uma academia precisa separar grupos de pessoas tendo como base as suas alturas. Temos um array alunos que contem a altura de cada aluno da academia.
// Temos outros 3 arrays: grupoA, grupoB e grupoC. Eles devem ser preenchidos da seguinte forma: 
// grupoA - Alunos com altura entre 150 a 159
// grupoB - Alunos com altura entre 160 a 169
// grupoC - Alunos com altura de 170 ou mais
// Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. Para esse exercício, você precisará usar loops, condicionais e funções de arrays. 
var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB=[]
var grupoC =[]

for(i = 0; i < alunos.length; i++){
    if(alunos[i] >= 150 && alunos[i] <= 159){
        grupoA.push(alunos[i])
    } else if (alunos[i] >= 160 && alunos[i] <= 169){
        grupoB.push(alunos[i])
    }else{
        grupoC.push(alunos[i])
    }
}

// Um estacionamento deseja automatizar a cobrança de mensalistas. Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente. A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. A cada entrada, a placa do veículo é registrada. Ao final do mês, conta-se o número de entradas que o veículo realizou e faz-se o seguinte cálculo:
// Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por entrada realizada.
// Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente.
// 	Agora, você deve ajudar na automatização da cobrança escrevendo duas funções.
// A primeira função se chama calcularNumeroDeEntradas(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve retornar o número de entradas que esse carro realizou no estacionamento. Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.
// A segunda função se chama calcularValorDevido(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve calcular o valor que o proprietário do carro tem que pagar segundo a política de preços estabelecida. Naturalmente, será necessário utilizar a primeira função dentro da segunda.
function calcularNumeroDeEntradas(placa){
    var contador = 0;
    for (i = 0; i < placas.length; i++){
       if (placa == placas[i]){
          contador++   
       }
    } 
    return contador;
 }
  
 function calcularValorDevido(placa){
    var valorPago;
    if(calcularNumeroDeEntradas(placa) <= 20){
       valorPago = calcularNumeroDeEntradas(placa) * 10;
    } else {
       var maisDeVinte = calcularNumeroDeEntradas(placa) -20;
       var ateVinte = 10 * 20;
       valorPago = ateVinte + (maisDeVinte * 5);
    }
    return valorPago;
 }
 
 /* Esse array é utilizado dentro das funções. Cada placa neste array representa uma entrada do respectivo veículo no estacionamento. Não é necessário alterar esse array. */
 var placas = [
     'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
     'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
     'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
     'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
     'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
     'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
     'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
     'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
     'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
     'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
     'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
     'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
     'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
     'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
     'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
     'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
     'AKX-3333', 'RXB-2525'
  ]

// Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código:
// Escreva uma função calculaGostos(notas)
// Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:
// O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme
// O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano
// O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.
function calculaGostos(notas){
    var arrayFinal = [];
    var naoGostaram = 0;
    var mediano = 0;
    var gostaram = 0;
    for(i = 0; i < notas.length; i++){
        if (notas[i] <= 1){
            naoGostaram++;
        } else if (notas[i] <= 3){
            mediano++;
        }else{
            gostaram++
        }
    }
    arrayFinal.push(naoGostaram, mediano, gostaram)
    return arrayFinal;
}

// Uma rede de cinemas quer implementar um sistema para controlar a entrada nas suas salas. Os clientes, antes de entrar na sala, devem apresentar o RG em uma câmera. A câmera seria capaz de ler a data de nascimento do cliente e, caso ele não tenha idade suficiente para assistir a sessão, o acesso dele não seria autorizado.
// Um dos programadores já fez uma função que calcula a idade com base na data de nascimento. Ela recebe como parâmetro uma data de nascimento no formato dd/mm/aaaa (dia com dois dígitos, mês com dois dígitos e ano com quatro dígitos) e retorna idade da pessoa hoje.
// Precisamos agora que você escreva a função deixaEntrar(dataDeNascimento, censura).
// A função deve receber dois parâmetros:
// O primeiro deve representar a data de nascimento do cliente no formato dd/mm/aaaa 
// O segundo deve representar a censura da sessão, ou seja, a idade mínima do cliente para que ele possa acessar a sala.
// A função deve retornar true caso o cliente tenha idade maior ou igual a censura e false caso contrário.
// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
    let [dia, mes, ano] = dataDeNascimento.split('/');
    const d = new Date();
    const anoAtual = d.getFullYear();
    const mesAtual = d.getMonth() + 1;
    const diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    let quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
  
 function deixaEntrar (dataDeNascimento, censura){
     return calcularIdade(dataDeNascimento) >= censura;
 }
 
//  Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como parâmetro um array de palavras. Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro.
function transformaParaMaiusculo(palavras){
    var novoArray = [];
    for (i=0; i < palavras.length; i++){
        novoArray.push(palavras[i].toUpperCase());
    }        
    return novoArray; 
}


// Nas escolas do futuro não haverá necessidade de chamadas. Ao entrar em sala, uma câmera fará o reconhecimento facial do aluno e registrará sua presença!
// Imagine que, a cada aula, um array guardasse o nome de todos os alunos que estiveram presentes na aula.
// Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)
// Essa função deve receber dois parâmetros:
// O primeiro deve representar o nome de um aluno
// O segundo deve representar um array com o os nomes dos alunos presentes.
// A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. false caso contrário.
function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
    if (nomesDosPresentes.indexOf(nomeDoAluno) >= 0){
        return true;
    } else if (nomesDosPresentes.indexOf(nomeDoAluno) == -1){
        return false
    }
}

// Uma fábrica de biscoitos da sorte precisa de um sistema. O sistema deve gerar seis dezenas aleatórias para serem impressas. Sabe como é: Palpites para seus clientes jogarem na mega sena! O seu trabalho é escrever uma função gerarDezenas(). Essa função não recebe nenhum parâmetro. Tudo que ela deve fazer é gerar e retornar um array contendo seis números aleatórios entre 1 e 60.
function gerarDezenas(){
    var array = [];
    for (i = 1; i <= 6; i++){
        var aleatorio = Math.round(Math.random() * 60);
        array.push(aleatorio);
    }
    return array;
}

// Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
// Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros da função maxmin e o segundo elemento é o maior dos parâmetros da função maxmin.
function maxmin (a, b, c, d, e){
    novoArray = [];
    var menorValor = Math.min(a, b, c, d, e);
    var maiorValor = Math.max(a, b, c, d, e);
    novoArray.push(menorValor, maiorValor)
    return novoArray;
}

// Uma loja virtual permite a seus visitantes filtrar produtos pelo preço. Existe um array com os preços dos produtos. Um programador já criou uma função maisBaratosQue(valor, precos) que retorna um array com os preços dos produtos mais baratos que o valor passado como parâmetro. Outro programador já criou uma função maisCarosQue(valor, precos) que retorna um array com os preços mais caros que o valor passado como parâmetro. Chegou sua vez!
// Crie uma função precosEntre(valorMenor, valorMaior, precos) que deve utilizar as funções maisBaratosQue e maisCarosQue para retornar os preços que estão entre o valorMenor e o valorMaior. Sua função deve receber então dois parâmetros:
// valorMenor para representar o valor mínimo dos preços a serem listados
// valorMaior para representar o valor máximo dos preços a serem listados
// precos para representar um array com os preços dos produtos
// Ela deve retornar um array com todos os preços entre valorMenor e valorMaior
function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }
 
 function maisCarosQue(valor, precos) {
    return precos.filter(p => p >= valor);
 }
 
 function precosEntre(valorMenor, valorMaior, precos){
    var maisBaratos = maisBaratosQue(valorMaior, precos);
    return maisCarosQue(valorMenor, maisBaratos)
 }