export default function getLanguage() {
  // Ekstrak ID/EN dari URL
  const path = window.location.href.split("5173")[1].split("/");
  return path[1];
}
