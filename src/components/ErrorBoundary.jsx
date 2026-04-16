import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="text-muted mb-8 max-w-md">{this.state.error?.message || "An unexpected error occurred."}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary-blue rounded-xl font-bold"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
