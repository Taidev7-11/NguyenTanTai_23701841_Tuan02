import { AsyncExercise } from '../../types/exercise';

// Hàm nhận vào mảng số, chờ 1 giây rồi lọc các số chẵn
export function filterEvenNumbers(numbers: number[]): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evens = numbers.filter((num) => num % 2 === 0);
      resolve(evens);
    }, 1000);
  });
}

export const bai09: AsyncExercise = {
  id: 9,
  title: 'Bai 9: Doc mang va loc so chan sau 1 giay',
  description:
    'Write a Promise that reads an array after 1 second and filters even numbers.',
  code: `function filterEvenNumbers(numbers: number[]): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(numbers.filter((n) => n % 2 === 0)), 1000);
  });
}`,
  run: async () => {
    const inputList = [12, 5, 8, 130, 44, 7, 9, 22];
    const evenList = await filterEvenNumbers(inputList);
    return `Mang ban dau: [${inputList.join(', ')}]\nCac so chan loc duoc sau 1 giay: [${evenList.join(', ')}]`;
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 9 (Cho 1 giay)... ===');
  console.log(await bai09.run());
})();
