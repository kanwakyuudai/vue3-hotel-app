import dayjs from "dayjs";

export const formatMonthDay = (date, formatStr = 'MM月DD日') => {
  return dayjs(date).format(formatStr)
}

export const countDateDiff = (from, to) => {
  return dayjs(to).diff(from, 'day')
}
