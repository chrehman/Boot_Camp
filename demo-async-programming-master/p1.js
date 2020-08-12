console.log("Before Preapare");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("Food preparing");
        callback("Food is prepared");
    });
}

function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Coffee preparing");
        callback("Coffee is prepared");
    });
}


prepareFood((value)=>{
    console.log("Ready :",value);
    
    prepareCoffee((value)=>{
        console.log("Ready :",value);
    });

});



console.log("After Preapare");