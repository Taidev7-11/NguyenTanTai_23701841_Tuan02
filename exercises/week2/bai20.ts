import { AsyncExercise } from '../../types/exercise';

export async function fetchWithTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number = 2000,
): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error(`API qua thoi gian quy dinh (> ${timeoutMs}ms)`));
    }, timeoutMs);
  });

  return Promise.race([promise, timeoutPromise]);
}

export const bai20: AsyncExercise = {
  id: 20,
  title: 'Bai 20: Huy API neu vuot qua 2 giay (Timeout)',
  description:
    'Add a timeout: if the API call takes more than 2 seconds, throw an error.',
  code: `async function fetchWithTimeout(task, timeoutMs = 2000) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), timeoutMs)
  );
  return Promise.race([task, timeout]);
}`,
  run: async () => {
    try {
      // Gia lap API cham ton 2.5s (vuot moc 2s)
      const slowApi = new Promise<string>((resolve) => {
        setTimeout(() => resolve('Du lieu tra ve tre'), 2500);
      });

      await fetchWithTimeout(slowApi, 2000);
      return 'Goi API thanh cong trong moc cho phep';
    } catch (err: any) {
      return `[Da bat loi Timeout]: ${err.message}`;
    }
  },
};

(async () => {
  console.log('=== Dang chay Bai 20 (Kiem tra Timeout 2s)... ===');
  console.log(await bai20.run());
})();
