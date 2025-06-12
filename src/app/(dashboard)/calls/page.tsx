import CallsTable from "@/app/components/CallsTable";

export default function CallsPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Calls</h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <CallsTable />
      </div>
    </>
  );
}
