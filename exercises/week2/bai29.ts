import { AsyncExercise } from '../../types/exercise';

export async function queueProcess(
  tasks: (() => Promise<string>)[],
): Promise<string[]> {
  const results: string[] = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}

export const bai29: AsyncExercise = {
  id: 29,
  title: 'Bai 29: queueProcess() xu ly tuan tu trong queue',
  description:
    'Write an async function queueProcess() that processes tasks sequentially in a queue.',
  code: `async function queueProcess(queue: (() => Promise<string>)[]) {
  const results = [];
  for (const task of queue) {
    results.push(await task());
  }
  return results;
}`,
  run: async () => {
    const queue = [
      () =>
        new Promise<string>((r) =>
          setTimeout(() => r('Hang doi: Task 1 (300ms)'), 300),
        ),
      () =>
        new Promise<string>((r) =>
          setTimeout(() => r('Hang doi: Task 2 (300ms)'), 300),
        ),
      () =>
        new Promise<string>((r) =>
          setTimeout(() => r('Hang doi: Task 3 (300ms)'), 300),
        ),
    ];

    const results = await queueProcess(queue);
    return `Queue process hoan thanh tuan tu:\n${results.join(' -> ')}`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 29 (Queue process tuan tu)... ===');
  console.log(await bai29.run());
})();
