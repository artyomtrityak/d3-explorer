import ReactDOM from "react-dom";
import React from "react";
import _ from "lodash";

module.exports = Child =>
  class extends React.Component {
    state = {
      width: null,
      height: null
    };

    constructor(props) {
      super(props);
      this.containerRef = React.createRef();
      this.setSize = this.setSize.bind(this);
      this.setSizeDebounced = _.debounce(this.setSize, 1000);
      window.addEventListener("resize", this.setSizeDebounced);
    }

    componentDidMount() {
      this.setSize();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.setSizeDebounced);
    }

    setSize() {
      const width = ReactDOM.findDOMNode(this).clientWidth;
      const height = ReactDOM.findDOMNode(this).clientHeight;
      this.setState({ width, height });
    }

    render() {
      const { width, height } = this.state;
      return (
        <div style={{ width: "100%", height: "100%" }}>
          {width && height ? <Child width={width} height={height} {...this.props} /> : null}
        </div>
      );
    }
  };
