import { AsyncExercise } from '../../types/exercise';

export const bai21: AsyncExercise = {
  id: 21,
  title: 'Bai 21: Fetch data tu public API (jsonplaceholder)',
  description:
    'Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).',
  code: `const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await res.json();
console.log(data);`,
  run: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return `Ket qua fetch API Todo #1:\n- ID: ${data.id}\n- Title: "${data.title}"\n- Completed: ${data.completed}`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 21 (Fetch API)... ===');
  console.log(await bai21.run());
})();
