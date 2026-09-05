import { AsyncExercise } from '../../types/exercise';
import { fetchUser, UserRecord } from './bai18';

export async function fetchUsers(ids: number[]): Promise<UserRecord[]> {
  return await Promise.all(ids.map((id) => fetchUser(id)));
}

export const bai19: AsyncExercise = {
  id: 19,
  title: 'Bai 19: fetchUsers(ids: number[])',
  description:
    'Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.',
  code: `async function fetchUsers(ids: number[]): Promise<UserRecord[]> {
  return await Promise.all(ids.map(id => fetchUser(id)));
}`,
  run: async () => {
    const users = await fetchUsers([1, 2, 3]);
    return (
      'Danh sach users da fetch:\n' +
      users
        .map((u) => `- ID: ${u.id} | Name: ${u.name} | Role: ${u.role}`)
        .join('\n')
    );
  },
};

(async () => {
  console.log('=== Dang chay Bai 19 (fetchUsers danh sach)... ===');
  console.log(await bai19.run());
})();
