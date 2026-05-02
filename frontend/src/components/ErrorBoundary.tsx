import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackMessage: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary capturou erro:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-700 shadow-soft">
          <h2 className="text-xl font-semibold">Algo deu errado</h2>
          <p className="mt-2 text-sm leading-6">{this.props.fallbackMessage}</p>
        </section>
      );
    }

    return this.props.children;
  }
}
