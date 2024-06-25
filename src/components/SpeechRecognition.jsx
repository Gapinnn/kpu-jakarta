import { useEffect, useRef, useState } from "react";
import getLanguage from "../hooks/getLanguage";
import Cancel from "./Icon/Cancel";
import useSpeechToText from "../hooks/useSpeechToText";

export default function SpeechRecognition({
  isOpen,
  setIsOpen,
  setKataKunci,
  setIsRecord,
}) {
  const lang = getLanguage();
  const [textInput, setTextInput] = useState("");
  const [tempTranscript, setTempTranscript] = useState("");
  const textAreaRef = useRef(null);

  const { isListening, transcript, startListening, stopListening } =
    useSpeechToText({ continuous: true });

  const startStopListening = () => {
    if (isListening) {
      stopVoiceInput();
    } else {
      startListening();
    }
  };

  const stopVoiceInput = () => {
    setTextInput(
      (prevValue) =>
        prevValue +
        (transcript.length
          ? (prevValue.length ? " " : "") + transcript
          : prevValue)
    );
    stopListening();
  };

  useEffect(() => {
    if (isListening) {
      setTempTranscript(transcript);
    }
  }, [transcript, isListening]);

  return (
    <div
      className={`bg-black bg-opacity-65 z-50 fixed top-0 justify-center items-center w-full min-h-screen ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white p-4 flex flex-col gap-4 w-3/4 md:w-1/2 lg:w-1/4 rounded-lg shadow-lg relative">
        <button
          onClick={() => setIsOpen(false)}
          className="flex justify-center items-center absolute top-4 right-4"
        >
          <Cancel className="w-6 h-6 text-stone-600 hover:text-stone-900" />
        </button>
        <h2 className="text-base md:text-lg lg:text-xl text-stone-900 font-semibold">
          {lang === "id"
            ? "Pengenalan Suara (Pencarian)"
            : "Voice Recognition (Search)"}
        </h2>
        <p className="text-stone-600 text-sm md:text-base">
          {lang === "id" &&
            (!isListening
              ? "Silahkan tekan tombol rekam suara untuk memulai"
              : "Sedang merekam suara... Klik tombol berhenti untuk menghentikan")}
          {lang === "en" &&
            (!isListening
              ? "Please press the record button to start"
              : "Recording... Click the stop button to end")}
        </p>
        <div className="flex w-full">
          <textarea
            ref={textAreaRef}
            onChange={(e) => setTextInput(e.target.value)}
            value={
              isListening
                ? textInput +
                  (transcript.length
                    ? (textInput.length ? " " : "") + transcript
                    : "")
                : textInput
            }
            disabled={isListening}
            className="w-full h-24 p-2 border bg-white rounded-lg text-stone-800"
          ></textarea>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => startStopListening()}
            className="flex-1 rounded-lg py-1.5 px-3 text-sm md:text-base font-semibold bg-maroon-light text-white "
          >
            {lang === "id" && (isListening ? "Berhenti" : "Rekam")}
            {lang === "en" && (isListening ? "Stop" : "Record")}
          </button>
          <button
            onClick={() => {
              if (textAreaRef.current && textAreaRef.current.value.length > 0) {
                setKataKunci(textAreaRef.current.value);
                setIsRecord(true);
                setIsOpen(false);
                textAreaRef.current.value = "";
                setTextInput("");
              }
            }}
            className={`flex-1 rounded-lg py-1.5 px-3 mt-0 text-sm md:text-base font-semibold ${
              !(textInput.length === 0)
                ? "bg-maroon-light text-white"
                : "bg-stone-300"
            }`}
            disabled={textInput.length === 0}
          >
            {lang === "id" ? "Cari" : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
}
