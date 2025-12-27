export function formatIndoDateTime(isoString: string): {
  date: string;
  time: string;
} {
  const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const dateObj = new Date(isoString);
  const date = dateObj.getDate();
  const monthStr = month[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const hour = dateObj.getHours().toString().padStart(2, "0");
  const minute = dateObj.getMinutes().toString().padStart(2, "0");
  return {
    date: `${date} ${monthStr} ${year}`,
    time: `${hour}:${minute} WIB`,
  };
}
