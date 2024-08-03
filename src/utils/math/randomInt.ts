const _randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export function randomInt(max: number): number;
export function randomInt(min: number, max: number): number;
export function randomInt(min: number, max?: number): number {
  if (max === undefined) {
    return _randomInt(0, min);
  }
  return _randomInt(min, max);
}
