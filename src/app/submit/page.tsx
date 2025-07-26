import CustomAlert from "@/components/CustomAlert";
import SubmitPost from "@/components/forms/SubmitPost";
import { submitAlert } from "@/data/alert";


const SubmitPage = () => {
  return (
    <div className="w-full sm:max-w-[65%] mx-auto space-y-4">
      <CustomAlert
        title={submitAlert.title}
        description={submitAlert.description}
      />
      <SubmitPost />
    </div>
  );
};

export default SubmitPage;
