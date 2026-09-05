import { AsyncExercise } from '../../types/exercise';

export const bai23: AsyncExercise = {
  id: 23,
  title: 'Bai 23: Loc danh sach Todo chua hoan thanh',
  description:
    'Write an async function that fetches a list of todos and filters out those that are not completed.',
  code: `const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=8");
const todos = await res.json();
const incomplete = todos.filter((t: any) => !t.completed);`,
  run: async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=8',
    );
    const list: any[] = await res.json();
    const incomplete = list.filter((t) => !t.completed);
    return (
      `Co ${incomplete.length} viec chua hoan thanh:\n` +
      incomplete.map((t) => `* [Chua xong] ID ${t.id}: ${t.title}`).join('\n')
    );
  },
};

(async () => {
  console.log('=== Dang chay Bai 23 (Loc Todo chua hoan thanh)... ===');
  console.log(await bai23.run());
})();
