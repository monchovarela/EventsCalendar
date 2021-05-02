import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error: error, errorInfo: info });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="error-boundary">
          <details style={{ whiteSpace: "pre-wrap" }}>
            <summary>Something went wrong</summary>
            <div>
              {this.state.error && this.state.error.toString()}
              {this.state.errorInfo.componentStack}
            </div>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
