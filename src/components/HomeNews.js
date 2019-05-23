import React, { Component } from "react";

class HomeNews extends Component {
  constructor() {
    super();
    this.state = {
      specials: [],
      response: ""
    };
  }

  render() {
    return (
      <div>
        <h2>News</h2>
        <p1>
          Resilience of Yellowstone's forests tested by unprecedented fire
        </p1>
        <p>
          {" "}
          Researchers describe what happens when Yellowstone -- adapted to
          recurring fires every 100 to 300 years -- instead burns twice in fewer
          than 30 years. Yellowstone as we know it faces an uncertain future,
          the researchers say, and one of the big questions they hope to answer
          is whether the forests can recover.
        </p>
      </div>
    );
  }
}
export default HomeNews;
