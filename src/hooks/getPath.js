export default function getPath() {
  // Eksrak path dari URL (Untuk Efek Garis Underline)
  const url = window.location.href;
  const link = url.split("5173");
  const urlPath = link[1]
    .split("/")
    .filter((_, index) => index !== 3)
    .join("/");
  return urlPath;
}
