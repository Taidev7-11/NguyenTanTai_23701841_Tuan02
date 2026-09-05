import { AsyncExercise } from '../../types/exercise';

export const bai10: AsyncExercise = {
  id: 10,
  title: "Bai 10: Su dung .finally() de log 'Done'",
  description:
    "Use .finally() to log 'Done' when a Promise finishes (success or failure).",
  code: `new Promise<string>((resolve) => {
  setTimeout(() => resolve("Tac vu hoan tat"), 800);
})
  .then((res) => console.log("Ket qua:", res))
  .catch((err) => console.error("Loi:", err.message))
  .finally(() => console.log("Done"));`,
  run: () => {
    return new Promise<string>((resolveOuter) => {
      let output = '';

      const simulatedTask = new Promise<string>((resolve) => {
        setTimeout(() => resolve('Tac vu da chay thanh cong'), 800);
      });

      simulatedTask
        .then((result) => {
          output += `[Then]: ${result}`;
        })
        .catch((err: Error) => {
          output += `[Catch]: ${err.message}`;
        })
        .finally(() => {
          // .finally() luon luon duoc thuc thi bat ke resolved hay rejected
          output += ' -> [.finally()]: Done';
          resolveOuter(output);
        });
    });
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 10 (.finally)... ===');
  console.log(await bai10.run());
})();
