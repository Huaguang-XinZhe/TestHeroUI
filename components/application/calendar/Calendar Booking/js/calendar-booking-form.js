"use client";


import React, {useState} from "react";


import CalendarBookingDetails from "./booking-details";
import {DurationEnum, durations} from "./calendar";
import BookingForm from "./booking-form";


export default function CalendarBookingForm({
  setCalendarBookingStep,
  selectedTimeSlotRange,
  selectedDate,
}) {
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    // use system time zone as default
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  );
  const [selectedDuration, setSelectedDuration] = useState(DurationEnum.FifteenMinutes);


  const onTimeZoneChange = (keys) => {
    const newTimeZone = Array.from(keys)[0];


    if (newTimeZone) {
      setSelectedTimeZone(newTimeZone.toString());
    }
  };


  const onDurationChange = (selectedKey) => {
    const durationIndex = durations.findIndex((d) => d.key === selectedKey);


    setSelectedDuration(durations[durationIndex].key);
  };


  const onConfirm = () => {
    setCalendarBookingStep("booking_confirmation");
  };


  return (
    <div className="rounded-large bg-default-50 shadow-small flex w-[393px] flex-col items-center gap-5 md:w-fit md:flex-row md:items-start md:px-6">
      <CalendarBookingDetails
        className="md:w-[220px] md:px-4 md:pt-8"
        selectedDate={selectedDate}
        selectedDuration={selectedDuration}
        selectedTimeSlotRange={selectedTimeSlotRange}
        selectedTimeZone={selectedTimeZone}
        onDurationChange={onDurationChange}
        onTimeZoneChange={onTimeZoneChange}
      />


      <BookingForm setCalendarBookingStep={setCalendarBookingStep} onConfirm={onConfirm} />
    </div>
  );
}

