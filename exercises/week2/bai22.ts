import { AsyncExercise } from '../../types/exercise';

export const bai22: AsyncExercise = {
  id: 22,
  title: 'Bai 22: Goi fetch API nhieu lan',
  description: 'Call the API multiple times and log the results.',
  code: `for (let i = 1; i <= 3; i++) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${i}\`);
  const data = await res.json();
  console.log(data);
}`,
  run: async () => {
    const logs: string[] = [];
    for (let id = 1; id <= 3; id++) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      const item = await res.json();
      logs.push(`- Todo #${item.id}: "${item.title}"`);
    }
    return `Ket qua goi API 3 lan lien tiep:\n${logs.join('\n')}`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 22 (Goi API nhieu lan)... ===');
  console.log(await bai22.run());
})();
