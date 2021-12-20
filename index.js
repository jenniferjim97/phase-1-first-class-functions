function receivesAFunction(spy){
   return spy();
}

function returnsANamedFunction(receivesAFunction){
    return function receivesAfunction(){

    }
}

function returnsAnAnonymousFunction() {
    return function (){

    }
}