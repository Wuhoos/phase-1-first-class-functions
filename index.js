function receivesAFunction(name) {
    console.log(name());
}

receivesAFunction(function () {return 'Hello'})

function returnsANamedFunction() {
    return function nameFunction() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}