console.log("Hello typescript");

//types simple
let helloworld: string = "Hello World";
helloworld = "123";

//array types
type stringAndNumver = [String, Number];
let arr: stringAndNumver = ["Hello", 123];

//enum
enum Constraints {
  "umar",
  "ali",
}

var region = Constraints.umar;
console.log(region);

//interface
interface User {
  name: String;
  id: Number;
}

//composing types -> union
type WindowStates = "open" | "closed";
let openwindow: WindowStates = "open";

const getLength = (params: string | string[]) => {
  return params.length;
};
getLength("test"); //4
console.log(getLength(["Hi", "Hello"])); //2
