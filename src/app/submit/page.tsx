import CustomAlert from "@/components/CustomAlert";
import SubmitPost from "@/components/forms/SubmitPost";

const alertData = {
  title: "Message Deletion Not Available",
  description:
    "Currently, we do not support message deletion. Once a message is posted, it cannot be removed. Please ensure your messages are appropriate before submitting.",
};

const SubmitPage = async () => {
  return (
    <div className="w-full sm:max-w-[65%] mx-auto space-y-4">
      <CustomAlert
        title={alertData.title}
        description={alertData.description}
      />
      <SubmitPost />
    </div>
  );
};

export default SubmitPage;
