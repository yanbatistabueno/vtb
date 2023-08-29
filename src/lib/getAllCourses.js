export default async function getAllSoftwares() {
  const response = await fetch(`http://localhost:3000/api/courses`);
  const data = await response.json();
  return data;
}
