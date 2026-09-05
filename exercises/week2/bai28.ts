import { AsyncExercise } from '../../types/exercise';

export async function batchProcess(): Promise<string[]> {
  const tasks = [1, 2, 3, 4, 5].map(
    (id) =>
      new Promise<string>((resolve) =>
        setTimeout(() => resolve(`Task #${id} da xu ly xong`), 500),
      ),
  );
  return await Promise.all(tasks);
}

export const bai28: AsyncExercise = {
  id: 28,
  title: 'Bai 28: batchProcess() xu ly 5 tasks dong thoi',
  description:
    'Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).',
  code: `async function batchProcess() {
  const tasks = [1, 2, 3, 4, 5].map(i =>
    new Promise(r => setTimeout(() => r(\`Task #\${i} done\`), 500))
  );
  return await Promise.all(tasks);
}`,
  run: async () => {
    const start = Date.now();
    const list = await batchProcess();
    const duration = Date.now() - start;
    return (
      `BatchProcess hoan tat 5 tasks dong thoi trong ${duration}ms:\n` +
      list.join('\n')
    );
  },
};

(async () => {
  console.log('=== Dang chay Bai 28 (Batch process song song)... ===');
  console.log(await bai28.run());
})();
