import { AsyncExercise } from '../../types/exercise';
import { simulateTask } from './bai05';

// Async function gọi hàm simulateTask(2000) và trả về kết quả
export async function runSimulatedTask(): Promise<string> {
  const result = await simulateTask(2000);
  return result;
}

export const bai12: AsyncExercise = {
  id: 12,
  title: 'Bai 12: Async function goi simulateTask(2000)',
  description:
    'Write an async function that calls simulateTask(2000) and logs the result.',
  code: `async function runSimulatedTask(): Promise<string> {
  const result = await simulateTask(2000);
  return result;
}`,
  run: async () => {
    const res = await runSimulatedTask();
    return `Ket qua sau khi await simulateTask(2000): ${res}`;
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 12 (Cho 2 giay)... ===');
  console.log(await bai12.run());
})();
