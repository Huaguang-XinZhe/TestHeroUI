"use client";


import {type SharedSelection} from "@heroui/react";
import React, {useState} from "react";


import CalendarBookingDetails from "./booking-details";
import {DurationEnum, durations} from "./calendar";
import BookingForm from "./booking-form";


export default function CalendarBookingForm() {
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(
    // use system time zone as default
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );
  const [selectedDuration, setSelectedDuration] = useState<DurationEnum>(
    DurationEnum.FifteenMinutes,
  );


  const onTimeZoneChange = (keys: SharedSelection) => {
    const newTimeZone = Array.from(keys)[0];


    if (newTimeZone) {
      setSelectedTimeZone(newTimeZone.toString());
    }
  };


  const onDurationChange = (selectedKey: React.Key) => {
    const durationIndex = durations.findIndex((d) => d.key === selectedKey);


    setSelectedDuration(durations[durationIndex].key);
  };


  const onConfirm = ({name, email, notes}: {name: string; email: string; notes: string}) => {
    alert(
      `Selected Duration: ${selectedDuration}\n` +
        `Selected Timezone: ${selectedTimeZone}\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Notes: ${notes}`,
    );
  };


  return (
    <div className="rounded-large bg-default-50 shadow-small flex w-[393px] flex-col items-center gap-5 md:w-fit md:flex-row md:items-start md:px-6">
      <CalendarBookingDetails
        className="md:w-[220px] md:px-4 md:pt-8"
        selectedDuration={selectedDuration}
        selectedTimeZone={selectedTimeZone}
        onDurationChange={onDurationChange}
        onTimeZoneChange={onTimeZoneChange}
      />
      <BookingForm onConfirm={onConfirm} />
    </div>
  );
}

