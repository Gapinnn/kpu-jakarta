import { useEffect } from "react";
import TugasWewenangComponent from "../components/TugasWewenang/TugasWewenang";

export default function TugasWewenangEn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TugasWewenangComponent />
    </>
  );
}
