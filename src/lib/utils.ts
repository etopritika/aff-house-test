export function getTranslateY(
  speed: number,
  viewportHeight: number,
): [number, number] {
  const offset = (speed * viewportHeight) / 100;
  return [-offset / 2, offset / 2];
}
