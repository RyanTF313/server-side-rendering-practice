const React = require("react");

class Show extends React.Component {
  render() {
    const { veggie } = this.props;
    return (
      <div>
        <a href="/veggies">Veggies Home</a>
        <h1> Veggie Show Page </h1>
        <p>
          The {veggie.name} is {veggie.color}
        </p>
        <p>
          {veggie.readyToEat
            ? "Its is ready to eat"
            : "It is not ready to eat... Cant touch this"}
        </p>
      </div>
    );
  }
}

module.exports = Show;
