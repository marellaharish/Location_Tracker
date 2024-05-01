
import React from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (<>
        <div className="d-flex justify-center ">
          <img className="w-600" src="/src/components/images/500.png" alt="" />
        </div>
        <h5 className="font-bold text-center mt-10">OOPS!!</h5>
        <div className="text-center ft-sz mt-10">
          Sorry, server encountered an unexpected error and could not complete your request now. Please try again!
        </div>
        <div className="d-flex justify-center mt-10">

        </div></>)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
