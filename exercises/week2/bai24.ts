import { AsyncExercise } from '../../types/exercise';

export async function postData(): Promise<any> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Bai tap TypeScript Tuan 2',
      body: 'Nguyen Tan Tai - MSSV: 23701841',
      userId: 1,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return await res.json();
}

export const bai24: AsyncExercise = {
  id: 24,
  title: 'Bai 24: postData() gui POST request',
  description:
    'Write an async function postData() that sends a POST request to a test API.',
  code: `async function postData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title: "Test", body: "Content", userId: 1 }),
    headers: { "Content-type": "application/json" }
  });
  return await res.json();
}`,
  run: async () => {
    const data = await postData();
    return `POST thanh cong! Ban ghi vua tao:\n- ID: ${data.id}\n- Title: "${data.title}"\n- Body: "${data.body}"`;
  },
};

(async () => {
  console.log('=== Dang chay Bai 24 (POST Request)... ===');
  console.log(await bai24.run());
})();
