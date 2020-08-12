console.log("Before Preapare");

function prepareFood(data){
    let promise = new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            if(data!==5){
            console.log("Food preparing");
            resolve("Food is prepared");
        } else{
            reject("Food Erorr");
        }
        },10);
            
    });
    return promise;
        
    
}

function prepareCoffee(callback){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Coffee preparing");
            resolve("Coffe is prepared");
        },10);
            
    });
    return promise;
     
}


let promise=prepareFood(5);
promise.then((value)=>{
    console.log("Food Ready :",value);
    return prepareCoffee();
})
.then((value)=>{
    console.log("Coffee Ready :",value);

})
.catch((error)=>{
    console.log("Error :",error);

});




console.log("After Preapare");