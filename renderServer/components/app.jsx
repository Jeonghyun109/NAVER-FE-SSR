const React = require("react");

const Hello = (props) => {
  console.log("received data: " + props.color);

  return `
    <div>
      <div className = "Header">Header</div>
      <div className = "Body">Body</div>
      <div className = "Footer">Footer</div>
    </div>
  `;
  // TODO: jsx compile
  //return <p>Hello, World!</p>;
};

module.exports = Hello;
