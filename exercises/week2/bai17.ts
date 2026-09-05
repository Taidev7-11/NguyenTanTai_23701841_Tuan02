import { AsyncExercise } from '../../types/exercise';

export const bai17: AsyncExercise = {
  id: 17,
  title: 'Bai 17: Su dung for await...of duyet mang Promise',
  description: 'Use for await... of to iterate over an array of Promises.',
  code: `const promises = [
  new Promise(r => setTimeout(() => r("Goi tin 1"), 200)),
  new Promise(r => setTimeout(() => r("Goi tin 2"), 200)),
  new Promise(r => setTimeout(() => r("Goi tin 3"), 200))
];

for await (const item of promises) {
  console.log(item);
}`,
  run: async () => {
    const promises = [
      new Promise<string>((r) => setTimeout(() => r('Goi tin 1'), 200)),
      new Promise<string>((r) => setTimeout(() => r('Goi tin 2'), 200)),
      new Promise<string>((r) => setTimeout(() => r('Goi tin 3'), 200)),
    ];

    const logs: string[] = [];
    for await (const item of promises) {
      logs.push(item);
    }
    return `Ket qua duyet bang for await...of: [${logs.join(', ')}]`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 17 (for await...of)... ===');
  console.log(await bai17.run());
})();
