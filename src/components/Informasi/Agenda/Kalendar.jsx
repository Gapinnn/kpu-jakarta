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

export default function Kalendar() {
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
    const content = (
      <div className="fc-event-main-frame">
        <div className="fc-event-time flex items-center flex-row gap-1 px-1">
          <Clock className="w-5 h-5 text-stone-700 " />
          <div className="flex text-sm text-stone-800 font-semibold">
            {formatTime(eventInfo.event.start)} -{" "}
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
                <div className="text-sm text-stone-900 font-semibold">Umum</div>
              </div>
            ) : (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                <Private className="w-5 h-5 text-stone-700" />
                <div className="text-sm text-stone-900 font-semibold">
                  Terbatas
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
                  Gedung {eventInfo.event.extendedProps.gedung}
                </div>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fff1c6] w-fit rounded-xl">
                <Room className="w-5 h-5 text-stone-700" />
                <div className="text-sm text-stone-900 font-semibold">
                  Ruang {eventInfo.event.extendedProps.ruang}
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
    <div className="w-full bg-white rounded-2xl shadow-xl px-4 py-8 flex flex-col items-center gap-2">
      <h1 className="text-2xl mb-6 font-bold text-stone-900">
        Kalendar Agenda KPU DKI Jakarta
      </h1>
      <div className="flex w-full m-0 p-0">
        <div className="flex w-full" ref={calendarRef}></div>
        {/* <FullCalendar
          className="w-full"
          ref={calendarRef}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            bootstrap5Plugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          locale={"id"}
          themeSystem="bootstrap5"
          buttonText={{
            today: "Hari Ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            dayGridMonth: "Bulanan",
            timeGridWeek: "Mingguan",
            timeGridDay: "Harian",
          }}
          allDaySlot={false}
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            omitZeroMinute: false,
          }}
          slotLabelInterval="00:30:00"
          slotMinTime="07:00:00"
          slotMaxTime="18:00:00"
          slotDuration="00:30:00"
          events={JSON.parse(data)}
          views={{
            timeGridWeek: {
              eventContent,
              hiddenDays: [0, 6],
            },
            timeGridDay: {
              eventContent,
              hiddenDays: [0, 6],
            },
          }}
          initialView="dayGridMonth"
          navLinks={true}
          nowIndicator={true}
        /> */}
      </div>
    </div>
  );
}
