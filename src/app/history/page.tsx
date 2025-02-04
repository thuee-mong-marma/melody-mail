import CustomAlert from "@/components/CustomAlert";
import { historyAlert } from "@/data/alert";
import SubmissionHistory from "@/components/SubmissionHistory";

export default function HistoryPage() {
  return (
    <div className="w-full sm:max-w-[65%] mx-auto space-y-4">
      <CustomAlert description={historyAlert.description} className="bg-blue-600"/>
      <SubmissionHistory />
    </div>
  );
}
