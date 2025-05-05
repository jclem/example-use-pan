import "./styles.postcss";
import {
  UsePanExample,
  UseScaleExample,
  UsePanScaleExample,
  BufferExample,
  TrackingExample,
  WrappedExampleWithFallback,
} from "./examples";
import React from "react";
import VideoFallback from "./VideoFallback";

export default function App() {
  switch (window.location.hash) {
    case "#use-pan":
      return (
        <WrappedExampleWithFallback
          fallbackURL="https://assets.jclem.net/2020-10-16-pan-zoom-canvas-react/offset-only.mp4"
          example="usePan"
        />
      );
    case "#use-scale":
      return (
        <WrappedExampleWithFallback
          fallbackURL="https://assets.jclem.net/2020-10-16-pan-zoom-canvas-react/scale-only.mp4"
          example="useScale"
        />
      );
    case "#use-pan-scale":
      return (
        <WrappedExampleWithFallback
          fallbackURL="https://assets.jclem.net/2020-10-16-pan-zoom-canvas-react/offset-scale.mp4"
          example="usePanScale"
        />
      );
    case "#buffer":
      return (
        <WrappedExampleWithFallback
          fallbackURL="https://assets.jclem.net/2020-10-16-pan-zoom-canvas-react/buffer.mp4"
          example="buffer"
        />
      );
    case "#tracking":
      return (
        <WrappedExampleWithFallback
          fallbackURL="https://assets.jclem.net/2020-10-16-pan-zoom-canvas-react/tracking.mp4"
          example="tracking"
        />
      );
    default:
      return <p>Choose an example.</p>;
  }
}
