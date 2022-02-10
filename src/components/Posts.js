import React, { Component } from "react";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({
      posts: data,
    });
  }

  render() {
    return (
      <div>
        
        <h1>Posts</h1>
        {this.state.posts.map((pos) => {
          return (
            <div key={pos.id}>
              <h3>{pos.title}</h3>
              <p>{pos.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
