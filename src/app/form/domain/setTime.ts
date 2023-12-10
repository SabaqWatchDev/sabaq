export default function setTime(time: string) {
  const receivedAt = new Date();

  const [hours, minutes] = time.split(':').map(Number);

  receivedAt.setHours(hours);
  receivedAt.setMinutes(minutes);
  receivedAt.setSeconds(0);

  return receivedAt;
}
