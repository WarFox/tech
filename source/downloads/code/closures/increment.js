var incrementBy = function(x) {
    return function(y) {
        return x+y;
    };
};

// this will remember the value of 'x' forever
var incrementBy2 = incrementBy(2);
var incrementBy3 = incrementBy(3);

console.log(incrementBy2(4));
console.log(incrementBy3(8));
// Here you are creating a closure and calling it immediately
console.log(incrementBy(5)(8));
