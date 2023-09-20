const React = require("react");

class Show extends React.Component {
  render() {
    const { fruit } = this.props;
    return (
      <div>
        <a href="/fruits">Fruits Home</a>
        <h1> Fruit Show Page </h1>
        <p>
          The {fruit.name} is {fruit.color}
        </p>
        <p>
          {fruit.readyToEat
            ? "Its is ready to eat"
            : "It is not ready to eat... Cant touch this"}
        </p>
      </div>
    );
  }
}

module.exports = Show;
