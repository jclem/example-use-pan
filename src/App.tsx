import "./styles.postcss";
import {
  UsePanExample,
  UseScaleExample,
  UsePanScaleExample,
  BufferExample,
  TrackingExample
} from "./examples";

export default function App() {
  switch (window.location.hash) {
    case "#use-pan":
      return <UsePanExample />;
    case "#use-scale":
      return <UseScaleExample />;
    case "#use-pan-scale":
      return <UsePanScaleExample />;
    case "#buffer":
      return <BufferExample />;
    case "#tracking":
      return <TrackingExample />;
    default:
      return <p>Choose an example.</p>;
  }
}
