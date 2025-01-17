import { Vector2 } from "three";

export function coordinateCalculator({
  axis,
  size,
}: {
  size: number;
  axis: number;
}) {
  return { x: (size * axis) / 2 + size / 2, y: -(size * axis) / 2 + size / 2 };
}

export function normalizedCoordinate(
  coordinates: Vector2,
  size?: { w: number; h: number }
) {
  const { x, y } = coordinates;
  const width = size?.w || window.innerWidth;
  const height = size?.h || window.innerHeight;

  // calculate the width and height
  const [calX, calY] = [
    coordinateCalculator({ size: width, axis: x }).x,
    coordinateCalculator({ size: height, axis: y }).y,
  ];
  const position = {
    x: calX,
    y: calY,
  };
  return position;
}
