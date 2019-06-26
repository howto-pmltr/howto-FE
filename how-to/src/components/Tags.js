import React from "react";

class Tags extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.tag.tag_title}</div>
      </div>
    );
  }
}

export default Tags;
