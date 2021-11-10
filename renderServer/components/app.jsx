const React = require("react");

function Hello(data) {
  console.log("received data: " + data.color);

  return "Hello, World!";
  // TODO: jsx compile
  //return <p>Hello, World!</p>;
}

module.exports = Hello;
