export function prismaSearchDates(date?: Date) {
  if (date) {
    const searchDate = new Date(date);
    date.setHours(0, 0, 0, 0)

    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);

    return [searchDate, nextDay];
  }

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0)

  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  return [currentDate, nextDay];
}
