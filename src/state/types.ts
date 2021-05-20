/**
 * A position in 2D space
 */
export type Point = { x: number; y: number };

/**
 * A node laid out on the canvas
 */
export type CanvasNode = {
  id: number;
  location: Point;
  stackHeight: number;
};
