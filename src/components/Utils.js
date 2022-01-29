const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(dt) {
  const date = new Date(dt)
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}