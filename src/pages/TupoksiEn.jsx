import { useEffect } from "react";
import TupoksiComponent from "../components/TugasPokok/Tupoksi";

export default function TupoksiEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TupoksiComponent />
    </>
  );
}
