// sample booking durations
export enum DurationEnum {
  FifteenMinutes = "15m",
  ThirtyMinutes = "30m",
}


export const durations = [
  {key: DurationEnum.FifteenMinutes, label: "15m"},
  {key: DurationEnum.ThirtyMinutes, label: "30m"},
];


// sample time zone options
export const timeZoneOptions = Intl.supportedValuesOf("timeZone").map((timeZone) => ({
  label: timeZone,
  value: timeZone,
}));


export enum TimeFormatEnum {
  TwelveHour = "12h",
  TwentyFourHour = "24h",
}


export const timeFormats = [
  {key: TimeFormatEnum.TwelveHour, label: "12h"},
  {key: TimeFormatEnum.TwentyFourHour, label: "24h"},
];


export interface TimeSlot {
  value: string;
  label: string;
}

