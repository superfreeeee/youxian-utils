export const waitAsync = (delay: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
