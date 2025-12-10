export async function fetchProductByID(id) {
  const res = await fetch(`http://localhost:3000/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
