import { AsyncExercise } from '../../types/exercise';

// Hàm giả lập tác vụ ném ra ngoại lệ sau một khoảng thời gian
export async function taskWithError(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Ket noi den may chu that bai (Loi mo phong)'));
    }, 800);
  });
}

export const bai13: AsyncExercise = {
  id: 13,
  title: 'Bai 13: Xu ly loi bang try/catch voi async/await',
  description: 'Handle errors using try/catch with async/await.',
  code: `async function handleAsyncError() {
  try {
    const data = await taskWithError();
    console.log(data);
  } catch (error: any) {
    console.error("Loi bat duoc:", error.message);
  }
}`,
  run: async () => {
    try {
      await taskWithError();
      return 'Tac vu chay thanh cong khong co loi';
    } catch (err: any) {
      // Bắt lỗi bằng khối try/catch
      return `[try/catch] Da bat duoc ngoai le thanh cong: "${err.message}"`;
    }
  },
};

// Chạy trực tiếp để in kết quả ra Terminal
(async () => {
  console.log('=== Dang chay Bai 13 (try/catch voi async/await)... ===');
  console.log(await bai13.run());
})();
