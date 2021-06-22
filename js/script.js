let generate = document.getElementById('generate');

generate.addEventListener('click', function() {
    let length = document.getElementById('length').value;
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    
    let arr = [];    

    for (let i = 0; i < length; i++) {
        arr.push(randomInteger(min, max));        
    };

    document.getElementById('showArr').innerHTML = arr;


    function average(arr) {
        let n = Math.max.apply(null, arr);
        console.log(n) //наибольшее значение в массиве
        
        let b = arr.reduce((a, b) => (a + b)) / arr.length;
        console.log(b) //среднее арифметическое
        
        function inBetween(a, b) {
            return function(x) {
              return x >= a && x <= b;
            };
        }

        return arr.filter(inBetween(b, n));    
    }
    
    document.getElementById('showFilteredArr2').innerHTML = average(arr);    


    arr = arr.filter(function(elem) {
        if (elem % 2 == 0) {
            return true;
        } else {
            return false;
        }
    });
    
    document.getElementById('showFilteredArr1').innerHTML = arr;    

    return arr;
});


function randomInteger(min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    random =  Math.round(random);
    return random;
};