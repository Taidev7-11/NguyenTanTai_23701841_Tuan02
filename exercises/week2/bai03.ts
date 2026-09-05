import { AsyncExercise } from '../../types/exercise';

// Hàm trả về Promise reject với lỗi "Something went wrong" sau 1 giây[cite: 1]
export function rejectWithError(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 1000);
  });
}

export const bai03: AsyncExercise = {
  id: 3,
  title: "Bai 3: Reject Promise voi loi 'Something went wrong' sau 1 giay",
  description:
    "Write a function that rejects a Promise with the error 'Something went wrong' after 1 second.",
  code: `function rejectWithError(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}`,
  run: async () => {
    try {
      await rejectWithError();
      return 'Promise khong bao loi';
    } catch (err: any) {
      return `Bat duoc loi tu Promise reject: "${err.message}"`;
    }
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 3 (Cho 1 giay)... ===');
  console.log(await bai03.run());
})();
