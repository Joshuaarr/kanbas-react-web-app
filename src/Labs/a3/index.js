import JavaScript from "./JavaScript";
function Assignment3() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];
  console.log("Working with Arrays");
  console.log("numberArray1 = ", numberArray1);
  console.log("stringArray1 = ", stringArray1);
  console.log("variableArray1 = ", variableArray1);
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <JavaScript />
    </div>
  );
}
export default Assignment3;
