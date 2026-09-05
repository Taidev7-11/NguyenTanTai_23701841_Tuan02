import { AsyncExercise } from '../../types/exercise';

export async function fetchWithRetry(
  url: string,
  retries: number,
): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP Status ' + res.status);
      return await res.json();
    } catch (err: any) {
      if (attempt === retries) {
        throw new Error(`That bai sau ${retries} lan thu: ${err.message}`);
      }
    }
  }
}

export const bai27: AsyncExercise = {
  id: 27,
  title: 'Bai 27: fetchWithRetry(url, retries)',
  description:
    'Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.',
  code: `async function fetchWithRetry(url: string, retries: number) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (e) {
      if (i === retries - 1) throw e;
    }
  }
}`,
  run: async () => {
    const data = await fetchWithRetry(
      'https://jsonplaceholder.typicode.com/todos/5',
      3,
    );
    return `fetchWithRetry thanh cong voi Todo #5: "${data.title}"`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 27 (Fetch retry)... ===');
  console.log(await bai27.run());
})();
