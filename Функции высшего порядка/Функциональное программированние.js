function example (func){
    //func();

    return function (){
        console.log('function')
    }
}

function argFunc(){
    console.log('Function from arguments')
}

const resultFunc = example(argFunc());
resultFunc();