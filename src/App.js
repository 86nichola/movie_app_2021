import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  componentDidMount() {
    // 영화데이터 로딩
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  compo;

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
