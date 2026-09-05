import { AsyncExercise } from '../../types/exercise';

// Hàm trả về "Hello Async" sau 2 giây bằng cú pháp async/await
export async function getHelloAsync(): Promise<string> {
  const message = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Hello Async');
    }, 2000);
  });

  return message;
}

export const bai11: AsyncExercise = {
  id: 11,
  title: 'Bai 11: Convert Bai 1 sang async/await',
  description: 'Convert Exercise 1 into async/await.',
  code: `async function getHelloAsync(): Promise<string> {
  const msg = await new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
  return msg;
}`,
  run: async () => {
    const result = await getHelloAsync();
    return `Ket qua async/await (Bai 11): ${result}`;
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 11 (Vui long doi 2 giay)... ===');
  console.log(await bai11.run());
})();
