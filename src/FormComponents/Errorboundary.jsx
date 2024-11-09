// ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details, if desired
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-700 text-center">
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or contact support if the issue persists.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
