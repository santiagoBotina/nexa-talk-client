import ScheduleTable from "@/app/components/schedules/ScheduleTable";

export default async function Horario() {
  return (
    <div className="p-4 max-h-32">
      <ScheduleTable studentId={2} />
    </div>
  );
}
