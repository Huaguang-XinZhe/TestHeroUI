// sample booking durations
export let DurationEnum = /*#__PURE__*/ (function (DurationEnum) {
  DurationEnum["FifteenMinutes"] = "15m";
  DurationEnum["ThirtyMinutes"] = "30m";


  return DurationEnum;
})({});


export const durations = [
  {key: DurationEnum.FifteenMinutes, label: "15m"},
  {key: DurationEnum.ThirtyMinutes, label: "30m"},
];


// sample time zone options
export const timeZoneOptions = Intl.supportedValuesOf("timeZone").map((timeZone) => ({
  label: timeZone,
  value: timeZone,
}));


export let TimeFormatEnum = /*#__PURE__*/ (function (TimeFormatEnum) {
  TimeFormatEnum["TwelveHour"] = "12h";
  TimeFormatEnum["TwentyFourHour"] = "24h";


  return TimeFormatEnum;
})({});


export const timeFormats = [
  {key: TimeFormatEnum.TwelveHour, label: "12h"},
  {key: TimeFormatEnum.TwentyFourHour, label: "24h"},
];

