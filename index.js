function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log("It is a named function");
      };
    }

    function returnsAnAnonymousFunction() {
        return () => console.log("It is an anonymous function");
    } 