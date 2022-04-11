// Given an array of integers (ar), find the sum of its elements.
function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(function(el) { 
        sum += el
    }); 
    
    return sum;
}

//OR: vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function simpleArraySum(ar) {
    var soma = 0;
    for (var posicao = 0; posicao < ar.length; posicao++) {
        soma += ar[posicao];   
    }
    return soma;
}

//********************************************************************************************************
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age.
//  They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
function birthdayCakeCandles(candles) {
    // Write your code here
    var tamanho= 0;
    for (var i = 0; i < candles.length; i++) {
        if (candles[i] > tamanho){
            tamanho = candles[i]
        }
    }
    
    var numeroDeVelas = 0;
    for (var i = 0; i < candles.length; i++){
        if (candles[i] == tamanho){
            numeroDeVelas++
        }
    }
    return numeroDeVelas;
}

//********************************************************************************************************
// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for 
// three categories: problem clarity, originality, and difficulty.
// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.
// Given a and b, determine their respective comparison points.
function compareTriplets(a, b) {
    // Write your code here
    var alice = 0;
    var bob = 0;
    for (var i = 0; i < a.length; i++)
        if (a[i] > b[i]){
            alice ++  
        } else if (a[i] < b[i]){
            bob ++
        }
    return [alice, bob];
}

//********************************************************************************************************
// A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to
// seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner 
// in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.
// The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number 
// occupied by the prisoner who will receive that candy.
// EX: n = 4, m = 6, s = 2 
// There are 4 prisoners,  6 pieces of candy and distribution starts at chair 2 . The prisoners arrange themselves in seats numbered  to . 
// Prisoners receive candy at positions . The prisoner to be warned sits in chair number .
function saveThePrisoner(n, m, s) {
    // Write your code here
    var resto =  m % n;
    if (resto == 0){
        if (s == 1){
            return n;
        }else {
            return s - 1;            
        }
    }else{
        var formulaDaCadeiraFinal = (s + resto) - 1;
        if (formulaDaCadeiraFinal <= n){
            return formulaDaCadeiraFinal;
        } else {
            return formulaDaCadeiraFinal - n;
        }      
    }
}

//********************************************************************************************************
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each 
//fraction on a new line with 6 places after the decimal.
function plusMinus(arr) {
    var positivo = 0;
    var negativo = 0;
    var zero = 0;
    var tamanhoDoArray = arr.length;
  
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            negativo++;
        } else if( arr[i]  > 0){
            positivo ++;
        } else{
            zero++;
        }
   
    }
    var razaoPositivos = Number(positivo/tamanhoDoArray).toFixed(6);
    var razaoNegativos = Number(negativo/tamanhoDoArray).toFixed(6);
    var razaoZeros = Number(zero/tamanhoDoArray).toFixed(6);
        
    console.log(razaoPositivos);
    console.log(razaoNegativos);
    console.log(razaoZeros); 
}

//********************************************************************************************************
// Staircase detail
// This is a staircase of size :
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.
function staircase(n) {
    for(var i = 1; i <= n; i++){
        console.log(" ".repeat(n-i) + "#".repeat(i))
    }
}

//********************************************************************************************************
//********************************************************************************************************
//********************************************************************************************************
//********************************************************************************************************
//********************************************************************************************************
//********************************************************************************************************