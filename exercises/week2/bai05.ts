import { AsyncExercise } from '../../types/exercise';

// Hàm simulateTask(time) trả về Promise resolve "Task done" sau time ms
export function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Task done');
    }, time);
  });
}

export const bai05: AsyncExercise = {
  id: 5,
  title: 'Bai 5: Ham simulateTask(time)',
  description:
    "Create a function simulateTask(time) that returns a Promise resolving with 'Task done' after time ms.",
  code: `function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
}

// Su dung ham:
simulateTask(1500).then(result => console.log(result));`,
  run: async () => {
    const delayTime = 1500;
    const result = await simulateTask(delayTime);
    return `Ket qua simulateTask(${delayTime}ms): ${result}`;
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 5 (Vui long doi 1.5 giay)... ===');
  console.log(await bai05.run());
})();
