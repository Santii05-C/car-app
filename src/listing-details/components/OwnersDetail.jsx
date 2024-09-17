import { Button } from "@/components/ui/button";
import Service from "@/Shared/Service";
import { useUser } from "@clerk/clerk-react";

function OwnersDetail({ carDetail }) {
  const { user } = useUser();

  const OnMessageOwerButtonClick = async () => {
    //CREATE CURRENT USER ID
    try {
      const userId = user.primaryEmailAddress.emailAddress.split("@")[0];
      await Service.CreateSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}
    //OWNER USER ID
    //CREATE CHANNEL
  };

  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <h2 className="font-medium text-2xl mb-3">Owner / Deals</h2>
      <img
        src={carDetail?.userImageUrl}
        className="w-[70px] h-[70px] rounded-full"
      />
      <h2 className="mt-2 font-bold text-xl">{carDetail?.userName}</h2>
      <h2 className="mt-2 text-gray-500">{carDetail?.createdBy}</h2>

      <Button className="w-full mt-6" onClick={OnMessageOwerButtonClick}>
        Message Owner
      </Button>
    </div>
  );
}

export default OwnersDetail;
