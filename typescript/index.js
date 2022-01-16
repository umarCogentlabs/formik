console.log("Hello typescript");
//types simple
var helloworld = "Hello World";
helloworld = "123";
var arr = ["Hello", 123];
//enum
var Constraints;
(function (Constraints) {
    Constraints[Constraints["umar"] = 0] = "umar";
    Constraints[Constraints["ali"] = 1] = "ali";
})(Constraints || (Constraints = {}));
var region = Constraints.umar;
console.log(region);
var openwindow = "open";
var getLength = function (params) {
    return params.length;
};
getLength("test");
console.log(getLength(["Hi", "Hello"]));
