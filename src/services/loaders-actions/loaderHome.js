export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}