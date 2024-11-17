export function getStartOfWeek(date = new Date()) {
  const startOfWeek = new Date(date);
  startOfWeek.setHours(0, 0, 0, 0); // Reset time to midnight
  const day = startOfWeek.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Adjust if it's Sunday
  startOfWeek.setDate(startOfWeek.getDate() + diff); // Set to previous Monday
  return startOfWeek.toISOString().slice(0, 10); // Return YYYY-MM-DD
}
