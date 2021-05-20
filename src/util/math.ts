export function getRandom([min, max]: [number, number]): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function roundTo(num: number, rnd: number): number {
  return Math.round(num / rnd) * rnd;
}
