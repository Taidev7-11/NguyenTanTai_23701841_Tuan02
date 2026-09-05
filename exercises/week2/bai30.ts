import { AsyncExercise } from '../../types/exercise';

export const bai30: AsyncExercise = {
  id: 30,
  title: 'Bai 30: Promise.allSettled() kiem tra status API',
  description:
    'Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.',
  code: `const results = await Promise.allSettled([
  fetch("https://jsonplaceholder.typicode.com/todos/1").then(r => r.json()),
  fetch("https://api-loi-khong-ton-tai-404.xyz").then(r => r.json()),
  Promise.resolve({ id: 30, name: "Backup Item" })
]);`,
  run: async () => {
    const results = await Promise.allSettled([
      fetch('https://jsonplaceholder.typicode.com/todos/1').then((r) =>
        r.json(),
      ),
      fetch('https://api-loi-khong-ton-tai-404.xyz').then((r) => r.json()),
      Promise.resolve({ id: 30, name: 'Task cuc bo thanh cong' }),
    ]);

    const formatted = results.map((res, index) => {
      if (res.status === 'fulfilled') {
        return `- Task ${index + 1}: [Fulfilled] Thanh cong -> ${JSON.stringify(res.value).slice(0, 45)}...`;
      } else {
        return `- Task ${index + 1}: [Rejected] That bai -> ${res.reason}`;
      }
    });

    return `Ket qua tong hop Promise.allSettled:\n${formatted.join('\n')}`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 30 (Promise.allSettled)... ===');
  console.log(await bai30.run());
})();
