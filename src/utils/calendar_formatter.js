export const calendarFormatter = (day) => {
  // const month = day.date.getMonth() + 1;
  // const date = day.date.getDate();

  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day;
}
