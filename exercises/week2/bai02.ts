import { AsyncExercise } from '../../types/exercise';

// Hàm trả về Promise resolve với số 10 sau 1 giây
export function getNumber10(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

export const bai02: AsyncExercise = {
  id: 2,
  title: 'Bai 2: Promise resolve so 10 sau 1 giay',
  description:
    'Write a function that returns a Promise resolving with the number 10 after 1 second.',
  code: `function getNumber10(): Promise<number> {
  return new Promise((resolve) => setTimeout(() => resolve(10), 1000));
}`,
  run: async () => {
    const result = await getNumber10();
    return `Ket qua nhan duoc sau 1 giay: ${result}`;
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 2 (Cho 1 giay)... ===');
  console.log(await bai02.run());
})();
