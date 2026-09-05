import { AsyncExercise } from '../../types/exercise';
export const bai01: AsyncExercise = {
  id: 1,
  title: 'Bai 1: Promise Hello Async sau 2 giay',
  description:
    "Create a Promise that returns the string 'Hello Async' after 2 seconds.",
  code: `const p = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Hello Async"), 2000);
});`,
  run: () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => resolve('Hello Async'), 2000);
    });
  },
};

(async () => {
  console.log('=== Bai 1 ===');
  console.log(await bai01.run());
})();
