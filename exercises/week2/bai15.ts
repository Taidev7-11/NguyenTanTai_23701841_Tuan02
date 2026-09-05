import { AsyncExercise } from '../../types/exercise';

async function executeStep(stepName: string, ms: number): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return `${stepName} (hoan tat trong ${ms}ms)`;
}

export const bai15: AsyncExercise = {
  id: 15,
  title: 'Bai 15: Goi tuan tu cac async function bang await',
  description: 'Call multiple async functions sequentially using await.',
  code: `const s1 = await executeStep("Buoc 1", 300);
const s2 = await executeStep("Buoc 2", 300);
const s3 = await executeStep("Buoc 3", 300);`,
  run: async () => {
    const s1 = await executeStep('Buoc 1: Doc cau hinh', 300);
    const s2 = await executeStep('Buoc 2: Ket noi Database', 300);
    const s3 = await executeStep('Buoc 3: Khoi dong Service', 300);
    return `Tien trinh chay tuan tu:\n- ${s1}\n- ${s2}\n- ${s3}`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 15 (Chay tuan tu)... ===');
  console.log(await bai15.run());
})();
