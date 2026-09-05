import { AsyncExercise } from '../../types/exercise';

export async function downloadFile(fileName: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return `File "${fileName}" da duoc tai xuong hoan tat!`;
}

export const bai25: AsyncExercise = {
  id: 25,
  title: 'Bai 25: Gia lap download file trong 3 giay',
  description:
    'Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.',
  code: `async function downloadFile(fileName: string): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return \`File "\${fileName}" done!\`;
}`,
  run: async () => {
    return await downloadFile('Tuan02_Async_TypeScript.pdf');
  },
};

(async () => {
  console.log('=== Dang chay Bai 25 (Gia lap download file 3s)... ===');
  console.log(await bai25.run());
})();
