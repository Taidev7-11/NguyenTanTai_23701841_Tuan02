import { AsyncExercise } from '../../types/exercise';

export const bai07: AsyncExercise = {
  id: 7,
  title: 'Bai 7: Lay ket qua Promise ve dich dau tien bang Promise.race()',
  description: 'Use Promise.race() to return whichever Promise resolves first.',
  code: `const fastPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Ket qua tu Fast Task (500ms)"), 500)
);

const slowPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Ket qua tu Slow Task (1500ms)"), 1500)
);

Promise.race([fastPromise, slowPromise])
  .then((winner) => console.log("Nguoi thang cuoc:", winner));`,
  run: async () => {
    // Tao 2 Promise voi 2 muc delay khac nhau
    const fastPromise = new Promise<string>((resolve) =>
      setTimeout(() => resolve('Fast Task ve dich (500ms)'), 500),
    );

    const slowPromise = new Promise<string>((resolve) =>
      setTimeout(() => resolve('Slow Task ve dich (1500ms)'), 1500),
    );

    // Promise.race se lay ket qua cua task chay xong som nhat
    const winner = await Promise.race([fastPromise, slowPromise]);
    return `Ket qua Promise.race thang cuoc: ${winner}`;
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 7 (Promise.race)... ===');
  console.log(await bai07.run());
})();
