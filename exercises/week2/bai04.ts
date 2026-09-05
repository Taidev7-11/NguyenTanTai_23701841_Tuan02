import { AsyncExercise } from '../../types/exercise';

export const bai04: AsyncExercise = {
  id: 4,
  title: 'Bai 4: Xu ly Promise bang .then() va .catch()',
  description:
    'Use .then() and .catch() to handle a Promise that returns a random number.',
  code: `const randomPromise = new Promise<number>((resolve, reject) => {
  const num = Math.random();
  // Neu so >= 0.4 thi resolve, nguoc lai reject
  if (num >= 0.4) {
    resolve(num);
  } else {
    reject(new Error(\`So \${num.toFixed(3)} nho hon 0.4\`));
  }
});

randomPromise
  .then((val) => console.log("Success:", val))
  .catch((err) => console.error("Error:", err.message));`,
  run: () => {
    return new Promise<string>((resolveOuter) => {
      // Khoi tao Promise tra ve so ngau nhien
      const randomPromise = new Promise<number>((resolve, reject) => {
        const num = Math.random();
        if (num >= 0.4) {
          resolve(num);
        } else {
          reject(new Error(`Gia tri ${num.toFixed(3)} nho hon 0.4`));
        }
      });

      // Xu ly bang .then() va .catch() theo yeu cau
      randomPromise
        .then((val) => {
          resolveOuter(
            `.then() bat duoc (Thanh cong): So ngau nhien la ${val.toFixed(3)}`,
          );
        })
        .catch((err: Error) => {
          resolveOuter(`.catch() bat duoc (That bai): ${err.message}`);
        });
    });
  },
};

// Chay truc tiep de in ket qua ra Terminal
(async () => {
  console.log('=== Dang chay Bai 4 ===');
  console.log(await bai04.run());
})();
