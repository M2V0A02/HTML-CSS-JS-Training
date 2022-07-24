function sum(a){
    return (function(a){
        console.log(a)
        
    })(a)
}

b = sum(123);
console.log(b);