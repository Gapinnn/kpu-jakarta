import { Calendar } from "@fullcalendar/core";
import { createRoot } from "react-dom/client";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Clock from "../../Icon/Clock";

import { dataKalendar } from "../../../contents/agenda";
import { useEffect, useRef } from "react";
import Building from "../../Icon/Building";
import Leader from "../../Icon/Leader";
import Room from "../../Icon/Room";
import Public from "../../Icon/Public";
import Private from "../../Icon/Private";
import Breadcumb from "./Breadcumb";
import getLanguage from "../../../hooks/getLanguage";

export default function Kalendar() {
  const lang = getLanguage();
  const data = JSON.stringify(dataKalendar);
  const calendarRef = useRef(null);
  const formatTime = (date) => {
    return (
      date.getHours() +
      "." +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes()
    );
  };

  const eventContent = (eventInfo) => {
    const content =
      window.innerWidth < 768 ? (
        <div className="fc-event-main-frame">
          <div className="fc-event-time flex flex-col items-center gap-0 p-0">
            <p className="text-[0.65rem] inline-flex items-center gap-0.5 font-bold text-stone-800">
              <Clock className="w-2.5 h-2.5 text-stone-700 " />
              {formatTime(eventInfo.event.start)}
            </p>
            <p className="text-[0.65rem] font-bold text-stone-800">
              - {formatTime(eventInfo.event.end)}
            </p>
            <p className="text-[0.65rem] text-stone-800">WIB</p>
          </div>
          <div className="fc-event-title text-[0.8rem] leading-tight font-bold mt-0.5">
            <p className="font-bold text-stone-900 text-center">
              {eventInfo.event.title}
            </p>
          </div>
          <div className="mt-0.5">
            {eventInfo.event.extendedProps.public === true ? (
              <div className="flex items-center justify-center gap-0.5 w-fit rounded-lg">
                <Public className="w-2.5 h-2.5 text-stone-700" />
                <div className="text-[0.6rem] text-stone-900 font-semibold">
                  {lang === "id" ? "Umum" : "General"}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-0.5 w-fit rounded-xl">
                <Private className="w-2.5 h-2.5 text-stone-700" />
                <div className="text-[0.5rem] text-stone-900 font-semibold">
                  {lang === "id" ? "Terbatas" : "Limited"}
                </div>
              </div>
            )}
            <div className="flex flex-col justify-center items-center gap-0 mt-0.5 w-fit rounded-xl">
              <Leader className="w-4 h-4 text-stone-800" />
              <div className="text-[0.6rem] text-center text-stone-900 font-semibold">
                {eventInfo.event.extendedProps.leader}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-0 mt-0.5 w-fit rounded-xl">
              <Building className="w-4 h-4 text-stone-800" />
              <div className="text-[0.55rem] text-center text-stone-900 font-semibold">
                {lang === "id" ? "Gedung" : "Building"}{" "}
                {eventInfo.event.extendedProps.gedung}
              </div>
              <div className="text-[0.55rem] text-center text-stone-900 font-semibold">
                {lang === "id" ? "Ruang" : "Room"}{" "}
                {eventInfo.event.extendedProps.ruang}
              </div>
            </div>
          </div>
        </div>
      ) : window.innerWidth < 1024 ? (
        <div className="fc-event-main-frame">
          <div className="fc-event-time flex items-center flex-row gap-1 px-1">
            <Clock className="lg:w-5 lg:h-5 text-stone-700 " />
            <div className="inline-flex text-xs lg:text-sm text-stone-800 font-semibold">
              {formatTime(eventInfo.event.start)} -
              {formatTime(eventInfo.event.end)} WIB
            </div>
          </div>
          <div className="fc-event-title-container">
            <div className="flex items-center -mt-1 pb-1 px-1.5">
              <div className="fc-event-title leading-snug text-lg font-bold">
                {eventInfo.event.title}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {eventInfo.event.extendedProps.public === true ? (
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                  <Public className="w-4 h-4 text-stone-700" />
                  <div className="text-xs text-stone-900 font-semibold">
                    {lang === "id" ? "Umum" : "General"}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                  <Private className="w-4 h-4 text-stone-700" />
                  <div className="text-xs text-stone-900 font-semibold">
                    {lang === "id" ? "Terbatas" : "Limited"}
                  </div>
                </div>
              )}
              <div className="flex flex-row items-start gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                <Leader className="w-8 h-8 lg:w-5 lg:h-5 text-stone-700" />
                <div className="text-xs text-stone-900 font-semibold">
                  {eventInfo.event.extendedProps.leader}
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row lg:items-center gap-1">
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                  <Building className="w-4 h-4 lg:w-5 lg:h-5 text-stone-700" />
                  <div className="text-sm text-stone-900 font-semibold">
                    {lang === "id" ? "Gedung" : "Building"}{" "}
                    {eventInfo.event.extendedProps.gedung}
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                  <Room className="w-4 h-4 lg:w-5 lg:h-5  text-stone-700" />
                  <div className="text-sm text-stone-900 font-semibold">
                    {lang === "id" ? "Ruang" : "Room"}
                    {eventInfo.event.extendedProps.ruang}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fc-event-main-frame">
          <div className="fc-event-time flex items-center flex-row gap-1 px-1">
            <Clock className="lg:w-5 lg:h-5 text-stone-700 " />
            <div className="inline-flex text-xs lg:text-sm text-stone-800 font-semibold">
              {formatTime(eventInfo.event.start)} -
              {formatTime(eventInfo.event.end)} WIB
            </div>
          </div>
          <div className="fc-event-title-container">
            <div className="flex items-center gap-1 pb-2 px-1.5">
              <div className="fc-event-title text-lg font-bold">
                {eventInfo.event.title}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {eventInfo.event.extendedProps.public === true ? (
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                  <Public className="w-5 h-5 text-stone-700" />
                  <div className="text-sm text-stone-900 font-semibold">
                    {lang === "id" ? "Umum" : "General"}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                  <Private className="w-5 h-5 text-stone-700" />
                  <div className="text-sm text-stone-900 font-semibold">
                    {lang === "id" ? "Terbatas" : "Limited"}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                <Leader className="w-5 h-5 text-stone-700" />
                <div className="text-sm text-stone-900 font-semibold">
                  {eventInfo.event.extendedProps.leader}
                </div>
              </div>
              <div className="w-full flex items-center gap-1">
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                  <Building className="w-5 h-5 text-stone-700" />
                  <div className="text-sm text-stone-900 font-semibold">
                    {lang === "id" ? "Gedung" : "Building"}{" "}
                    {eventInfo.event.extendedProps.gedung}
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                  <Room className="w-5 h-5 text-stone-700" />
                  <div className="text-sm text-stone-900 font-semibold">
                    {lang === "id" ? "Ruang" : "Room"}{" "}
                    {eventInfo.event.extendedProps.ruang}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // Convert the JSX to a DOM node
    const tempNode = document.createElement("div");
    const root = createRoot(tempNode);
    root.render(content);
    return { domNodes: [tempNode] };
  };

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {
      height: "1500px",
      aspectRatio: 2,
      expandRows: true,
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek",
      },
      locale: "id",
      buttonText: {
        today: "Hari Ini",
        month: "Bulan",
        week: "Minggu",
        day: "Hari",
        dayGridMonth: "Bulanan",
        timeGridWeek: "Mingguan",
      },
      allDaySlot: false,
      slotLabelFormat: {
        hour: "2-digit",
        minute: "2-digit",
        omitZeroMinute: false,
      },
      slotLabelInterval: "00:30:00",
      slotMinTime: "07:00:00",
      slotMaxTime: "18:30:00",
      slotDuration: "00:15:00",
      events: JSON.parse(data),
      views: {
        timeGridWeek: {
          eventContent,
          hiddenDays: [0, 6],
        },
      },
      initialView: "timeGridWeek",
      navLinks: true,
      nowIndicator: true,
    });

    calendar.render();
    return () => calendar.destroy();
  }, [data]);

  return (
    <div className="lg:container mx-auto pt-4 lg:pt-8 pb-8 lg:pb-12 px-4 md:px-8 lg:px-2 flex flex-col justify-center">
      {/* Breadcumb */}
      <Breadcumb />
      {/* Judul Halaman */}
      <div className="flex flex-col gap-0 lg:gap-2 my-0 mb-1 lg:mb-4">
        <h1 className="text-maroon-light font-bold text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-0 mt-2 lg:mt-4">
          {lang === "id"
            ? "Agenda KPU Provinsi DKI Jakarta"
            : "DKI Jakarta Provincial KPU agenda"}
        </h1>
        <p className="text-justify text-stone-900 text-base md:text-lg lg:text-xl mb-1">
          {lang === "id"
            ? "Sistem Pengelolaan Aduan Masyarakat KPU Provinsi DKI Jakarta adalah platform yang disediakan oleh KPU Provinsi DKI Jakarta bagi masyarakat untuk melaporkan segala bentuk pelanggaran atau masalah terkait pelaksanaan pemilu. Melalui sistem ini, masyarakat dapat menyampaikan keluhan, masukan, dan saran untuk memastikan transparansi dan integritas lembaga dan program kerja KPU DKI Jakarta."
            : "The DKI Jakarta Provincial KPU Public Complaints Management System is a platform provided by the DKI Jakarta Provincial KPU for the public to report all forms of violations or problems related to the implementation of elections. Through this system, the public can submit complaints, input and suggestions to ensure the transparency and integrity of the DKI Jakarta KPU institutions and work programs."}
        </p>
      </div>
      {/* Kalendar Agenda */}
      <div className="w-full bg-white rounded-2xl shadow-xl px-4 py-4 md:py-6 lg:py-8 flex flex-col items-center gap-2">
        <h1 className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 lg:mb-6 font-bold text-stone-900">
          {lang === "id" ? "Kalendar Agenda" : "Agenda Calendar"}
        </h1>
        <div className="flex w-full m-0 p-0">
          <div className="flex w-full" ref={calendarRef}></div>
        </div>
      </div>
    </div>
  );
}
