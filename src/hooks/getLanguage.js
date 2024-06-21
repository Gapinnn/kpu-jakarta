export default function getLanguage() {
  // Ekstrak ID/EN dari URL
  const path = window.location.href
    .split("kpu-jakarta.vercel.app")[1]
    .split("/");
  return path[1];
}
