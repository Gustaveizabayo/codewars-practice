function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  
  let utc_start = start - tz_from;

  let utc_arrival = utc_start + duration;

  let local_arrival = utc_arrival + tz_to;

  let arrival_day = Math.floor(local_arrival / 24)
  return arrival_day === -1;
}
