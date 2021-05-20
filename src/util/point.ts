import { Point } from "../state/types";
import * as math from "./math";

export const ORIGIN = Object.freeze({ x: 0, y: 0 });

export function applyFn(pt: Point, fn: (n: number) => number): Point {
  return {
    x: fn(pt.x),
    y: fn(pt.y)
  };
}

export function sum(a: Point, b: Point) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}

export function mult(point: Point, scale: number): Point {
  return {
    x: point.x * scale,
    y: point.y * scale
  };
}

export function diff(a: Point, b: Point) {
  return sum(a, negate(b));
}

export function negate(p: Point) {
  return mult(p, -1);
}

export function scale(point: Point, scale: number): Point {
  return mult(point, 1 / scale);
}

export function roundTo(point: Point, rnd: number): Point {
  return applyFn(point, (n) => math.roundTo(n, rnd));
}
