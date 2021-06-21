// function is_even(element)
var is_even= (element) =>{



    // if(element%2===0)
    // return true;
    // return false;



    return element%2===0;
} 
// console.log(is_even(4)); 



//arrow funtion do need a return keyword


// var result=[2, 4,7 ,8].every(is_even);
// console.log(result);




// var result=[2, 4,6 ,8].every((e) =>{  return e%2===0 }) ;

var result=[2,4,6,8].every((e) => (e%2===0))
console.log(result);


