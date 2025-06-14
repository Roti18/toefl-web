export async function fetchFromApi(tipeSoal: string) {
  const res = await fetch(
    `https://toefl-api-production.up.railway.app/api/soal/${tipeSoal}/random`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch from API");
  }
  return res.json();
}
