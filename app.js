function Display({ value, style }) {
  return <div className={`display ${style}`}>{value}</div>;
}

function Button({ name, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {name}
    </button>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  incrementCount = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrementCount() {
    this.setState(({ count }) => ({ count: count - 1 }));
  }

  render() {
    const style =
      this.state.count < 0 ? "display-negative" : "display-positive";

    return (
      <div className="counter">
        <Display value={this.state.count} style={style} />
        <Button name="+" onClick={this.incrementCount} />
        <Button name="-" onClick={this.decrementCount.bind(this)} />
      </div>
    );
  }
}

function App() {
  const counters = [0, -2, 5, -3, 8];

  // It is safe to use the index of this array because it is static. If we `push()` or `pop()` this array then you should no longer use it as a key since index is no longer unique

  const items = counters.map((count, index) => (
    <Counter key={index} initialCount={count} />
  ));

  return <React.Fragment>{items}</React.Fragment>;
}

ReactDOM.render(<App />, document.getElementById("app"));
