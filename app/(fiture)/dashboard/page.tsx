import LabelValue from "./component/label-value";
export default function DashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        <LabelValue label="Total Users" value="1,234" />
        <LabelValue label="Total Revenue" value="Rp 123,456" />
        <LabelValue label="Total Orders" value="567" />
        <LabelValue label="Pending Orders" value="89" />
      </div>
      <div className="mt-4">
        
      </div>
    </div>
  );
}
