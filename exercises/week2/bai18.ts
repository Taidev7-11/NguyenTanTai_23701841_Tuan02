import { AsyncExercise } from '../../types/exercise';

export interface UserRecord {
  id: number;
  name: string;
  role: string;
}

export async function fetchUser(id: number): Promise<UserRecord> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    id,
    name: `User_${id}`,
    role: id === 1 ? 'Admin' : 'Student',
  };
}

export const bai18: AsyncExercise = {
  id: 18,
  title: 'Bai 18: Mo phong API fetchUser(id)',
  description:
    'Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).',
  code: `async function fetchUser(id: number): Promise<UserRecord> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: \`User_\${id}\`, role: id === 1 ? "Admin" : "Student" };
}`,
  run: async () => {
    const user = await fetchUser(23701841);
    return `Ket qua fetchUser: ${JSON.stringify(user)}`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 18 (Mo phong API 1s)... ===');
  console.log(await bai18.run());
})();
