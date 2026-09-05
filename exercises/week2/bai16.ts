import { AsyncExercise } from '../../types/exercise';

async function mockWorker(id: number): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return `Worker #${id} xu ly xong`;
}

export const bai16: AsyncExercise = {
  id: 16,
  title: 'Bai 16: Goi song song bang Promise.all()',
  description: 'Call multiple async functions in parallel using Promise.all().',
  code: `const [w1, w2, w3] = await Promise.all([
  mockWorker(1),
  mockWorker(2),
  mockWorker(3)
]);`,
  run: async () => {
    const start = Date.now();
    const results = await Promise.all([
      mockWorker(1),
      mockWorker(2),
      mockWorker(3),
    ]);
    const duration = Date.now() - start;
    return `3 Worker chay song song trong ~${duration}ms:\n- ${results.join('\n- ')}`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 16 (Chay song song)... ===');
  console.log(await bai16.run());
})();
