import './styles.postcss';
import {
  UsePanExample,
  UseScaleExample,
  UsePanScaleExample,
  BufferExample,
  TrackingExample
} from './examples';
import React from 'react';

export default function App() {
  switch (window.location.hash) {
    case '#use-pan':
      return <UsePanExample />;
    case '#use-scale':
      return <UseScaleExample />;
    case '#use-pan-scale':
      return <UsePanScaleExample />;
    case '#buffer':
      return <BufferExample />;
    case '#tracking':
      return <TrackingExample hideData={false} />;
    default:
      return <p>Chooshhe an example.</p>;
  }
}
