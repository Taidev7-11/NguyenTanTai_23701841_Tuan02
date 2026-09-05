import { AsyncExercise } from '../../types/exercise';
import { simulateTask } from './bai05';

export const bai06: AsyncExercise = {
  id: 6,
  title: 'Bai 6: Chay 3 Promise song song voi Promise.all()',
  description:
    'Use Promise.all() to run 3 simulated Promises in parallel and print the result.',
  code: `const task1 = simulateTask(500);
const task2 = simulateTask(1000);
const task3 = simulateTask(1500);

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log("Tat ca task da xong:", results);
  });`,
  run: async () => {
    const startTime = Date.now();

    // Chay 3 Promise song song
    const results = await Promise.all([
      simulateTask(500),
      simulateTask(1000),
      simulateTask(1500),
    ]);

    const totalTime = Date.now() - startTime;
    return `Ket qua Promise.all: [${results.join(', ')}]\nTong thoi gian chay song song: ~${totalTime}ms (thoi gian cua task lau nhat)`;
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log(
    '=== Dang chay Bai 6 (Chay 3 task song song trong ~1.5 giay)... ===',
  );
  console.log(await bai06.run());
})();
