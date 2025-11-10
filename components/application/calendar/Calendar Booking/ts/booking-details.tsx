"use client";
import {
  Avatar,
  cn,
  Select,
  SelectItem,
  Tabs,
  Tab,
  type DateValue,
  type SharedSelection,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import {useMemo} from "react";
import {format} from "date-fns";


import {DurationEnum, durations, type TimeSlot, timeZoneOptions} from "./calendar";


interface BookingDetailsProps {
  className?: string;
  selectedTimeZone: string;
  selectedDuration: DurationEnum;
  onTimeZoneChange?: (keys: SharedSelection) => void;
  onDurationChange?: (selectedKey: React.Key) => void;
  selectedTimeSlotRange?: TimeSlot[];
  selectedDate?: DateValue;
}


export default function BookingDetails({
  className,
  selectedTimeZone,
  selectedDuration,
  onDurationChange,
  onTimeZoneChange,
  selectedTimeSlotRange,
  selectedDate,
}: BookingDetailsProps) {
  const bookingDate = useMemo(() => {
    if (selectedDate) {
      const date = new Date(selectedDate.toString());


      return format(date, "EEEE, MMMM d, yyyy");
    }


    return "";
  }, [selectedDate]);


  return (
    <div className={cn("flex flex-col p-6 lg:w-[220px] lg:px-4 lg:pt-8", className)}>
      <Avatar
        className="mb-3 shadow-md"
        size="sm"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704k"
      />
      <p className="text-default-500 text-xs font-medium">Zoey Lang</p>
      <p className="text-default-foreground mb-2 text-lg font-semibold">Demo call</p>
      <p className="text-small text-default-500 mb-4">
        Lorem ipsum dolor sit amet cons ectetur. Turpis gravida eget felis senectus eleifend.
      </p>
      <div className="mb-6 flex flex-col gap-3">
        <div
          className={cn("flex items-start gap-2", {
            hidden: !bookingDate,
          })}
        >
          <Icon className="text-default-300" icon="solar:calendar-minimalistic-bold" width={16} />
          <div className="text-default-600 text-xs font-medium">
            <p>{bookingDate}</p>
            <p>{`${selectedTimeSlotRange?.[0].label} - ${selectedTimeSlotRange?.[1].label}`}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Icon className="text-default-300" icon="solar:clock-circle-bold" width={16} />
          <p className="text-default-600 text-xs font-medium">{selectedDuration}</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon className="text-default-300" icon="solar:videocamera-bold" width={16} />
          <p className="text-default-600 text-xs font-medium">Zoom</p>
        </div>
        <div className="flex items-center">
          <Icon className="text-default-300 shrink-0" icon="solar:global-linear" width={16} />
          <Select
            aria-label="Time Zone"
            className="max-w-48"
            classNames={{
              trigger: "h-4 min-h-4 bg-transparent border-none shadow-none",
              value: "text-xs font-medium group-data-[has-value=true]:text-default-600",
            }}
            items={timeZoneOptions}
            placeholder="Select time zone"
            selectedKeys={[selectedTimeZone]}
            size="sm"
            variant="faded"
            onSelectionChange={onTimeZoneChange}
          >
            {(option) => (
              <SelectItem
                key={option.value}
                className="capitalize"
                classNames={{
                  title: "text-xs font-medium text-default-600",
                  description: "text-xs font-medium text-default-600",
                }}
              >
                {option.label}
              </SelectItem>
            )}
          </Select>
        </div>
      </div>
      <Tabs classNames={{tab: "h-6"}} size="sm" onSelectionChange={onDurationChange}>
        {durations.map((duration) => (
          <Tab key={duration.key} title={duration.label} />
        ))}
      </Tabs>
    </div>
  );
}

