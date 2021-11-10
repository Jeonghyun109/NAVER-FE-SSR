const React = require("react");

function Hello(data){
    console.log("received data: " + data.type);

    return "Hello, World!";
}

module.exports = Hello;
