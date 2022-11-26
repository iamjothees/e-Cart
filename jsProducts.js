productCounter = document.getElementsByClassName('counter');
counterIncrementor = document.getElementsByClassName('incrementButton');
counterDecrementer = document.getElementsByClassName('decrementButton');

/* Call inc/dec count for corresponding counter */
for (var i=0; i<productCounter.length; i++){
	(function(i){
        counterIncrementor[i].onclick = ()=>{   incrementCount(i)    }
    })(i);

    (function(i){
        counterDecrementer[i].onclick = ()=>{   decrementCount(i)    }
    })(i);
}


function incrementCount(x){
    productCounter[x].value = ++productCounter[x].value;
}

function decrementCount(x){    
    if(productCounter[x].value<1) return
    productCounter[x].value = --productCounter[x].value;
}