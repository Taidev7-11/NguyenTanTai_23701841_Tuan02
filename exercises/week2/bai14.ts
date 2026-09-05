import { AsyncExercise } from '../../types/exercise';

// Hàm nhận vào number, dừng 1s và trả về number * 3
export async function tripleAfter1s(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}

export const bai14: AsyncExercise = {
  id: 14,
  title: 'Bai 14: Cho 1 giay va tra ve number * 3',
  description:
    'Write an async function that takes a number, waits 1 second, and returns the number x 3.',
  code: `async function tripleAfter1s(num: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return num * 3;
}`,
  run: async () => {
    const inputNumber = 7;
    const result = await tripleAfter1s(inputNumber);
    return `So truyen vao: ${inputNumber} -> Cho 1s -> Ket qua nhan 3: ${result}`;
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 14 (Cho 1 giay)... ===');
  console.log(await bai14.run());
})();
