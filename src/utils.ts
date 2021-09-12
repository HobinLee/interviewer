export function shuffle<T> (arr: T[]): T[] {
  const length = arr.length;

  arr.forEach((element: T, idx: number) => {
    const target = Math.floor(Math.random() * length);

    arr[idx] = arr[target];
    arr[target] = element;
  });

  return arr;
}