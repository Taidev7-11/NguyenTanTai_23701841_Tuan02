import { AsyncExercise } from '../../types/exercise';

export const bai26: AsyncExercise = {
  id: 26,
  title: 'Bai 26: Cho 5 giay bang async/await + setTimeout',
  description: 'Use async/await with setTimeout to simulate a 5-second wait.',
  code: `const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
await sleep(5000);`,
  run: async () => {
    const start = Date.now();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const elapsed = Date.now() - start;
    return `Da hoan thanh thoi gian cho: ${elapsed}ms (~5s)`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 26 (Cho dung 5 giay)... ===');
  console.log(await bai26.run());
})();
