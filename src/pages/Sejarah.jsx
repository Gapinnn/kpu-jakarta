import { useEffect } from "react";
import SejarahComponent from "../components/Sejarah/SejarahComponent";

export default function Sejarah() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-0">
        <SejarahComponent />
      </div>
    </>
  );
}
