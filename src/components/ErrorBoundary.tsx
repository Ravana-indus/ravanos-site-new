import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-ravan-black text-white flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
          <p className="text-lg mb-2">We're sorry for the inconvenience.</p>
          <p className="text-sm text-gray-400">
            {this.state.error && this.state.error.toString()}
          </p>
          <button 
            className="mt-4 px-4 py-2 bg-ravan-green text-black rounded hover:bg-ravan-green-dark transition"
            onClick={() => window.location.reload()}
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