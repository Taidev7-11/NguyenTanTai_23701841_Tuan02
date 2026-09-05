import { AsyncExercise } from '../../types/exercise';

export const bai08: AsyncExercise = {
  id: 8,
  title: 'Bai 8: Promise chain tinh toan (2^2 -> * 2 -> + 5)',
  description:
    'Create a Promise chain: square the number 2, then double it, then add 5.',
  code: `Promise.resolve(2)
  .then((num) => num * num)  // 2^2 = 4
  .then((num) => num * 2)    // 4 * 2 = 8
  .then((num) => num + 5);   // 8 + 5 = 13`,
  run: () => {
    return Promise.resolve(2)
      .then((num) => {
        const squared = num * num;
        return squared;
      })
      .then((squared) => {
        const doubled = squared * 2;
        return doubled;
      })
      .then((doubled) => {
        const result = doubled + 5;
        return `Ket qua chuoi Promise chain bat dau tu 2: (2^2 * 2 + 5) = ${result}`;
      });
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 8 (Promise Chaining)... ===');
  console.log(await bai08.run());
})();
