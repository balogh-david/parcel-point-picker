import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

type MapErrorBoundaryProps = {
  children: ReactNode;
}

type MapErrorBoundaryState = {
  hasError: boolean;
}

export class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
  state: MapErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError(): MapErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("The map failed to render.", error, info);
  }

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="bg-muted flex size-full flex-col items-center justify-center gap-2 p-6 text-center">
        <p className="font-medium">
          An error occurred while displaying the map.
        </p>
        <p className="text-muted-foreground text-sm">
          Try refreshing the page.
        </p>
      </div>
    );
  }
}
