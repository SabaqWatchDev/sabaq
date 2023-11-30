export default function setTime(time: string) {
  const receivedAt = new Date();

  const [hours, minutes] = time.split('%3A').map(Number);

  receivedAt.setHours(hours - 5);
  receivedAt.setMinutes(minutes);
  receivedAt.setSeconds(0);

  return receivedAt;
}
