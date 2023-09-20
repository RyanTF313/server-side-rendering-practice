const React = require("react");

class Index extends React.Component {
  render() {
    const { veggies } = this.props;
    return (
      <div>
        <nav>
          <a href="/veggies/new">Create a New Veggie</a>
      </nav>
        <h1>Veggies Index Page</h1>
        <ul>
          {veggies.map((veggie, i) => {
            return (
              <li key={veggie.name}>
                The <a href={`/veggies/${i}`}>{veggie.name}</a> is {veggie.color}{" "}
                <br></br>
                {veggie.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;