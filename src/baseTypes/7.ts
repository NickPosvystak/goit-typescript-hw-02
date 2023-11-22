/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDay {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}
function isWeekend(weekday: WeekDay): boolean {
  return weekday === WeekDay.saturday || weekday === WeekDay.sunday;
}
