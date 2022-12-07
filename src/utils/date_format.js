import dayjs from "dayjs";

export const formatMonthDay = (date) => {
  return dayjs(date).format('MM月DD日')
}

export const countDateDiff = (from, to) => {
  return dayjs(to).diff(from, 'day')
}
