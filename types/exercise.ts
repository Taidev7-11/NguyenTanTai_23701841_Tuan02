export interface AsyncExercise {
  id: number;
  title: string;
  description: string;
  code: string;
  run: () => Promise<string> | string;
}
