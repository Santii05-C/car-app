import { useEffect, useState } from "react";
import { App as SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { useUser } from "@clerk/clerk-react";
import { GroupChannel } from "@sendbird/uikit-react/GroupChannel";
import { GroupChannelList } from "@sendbird/uikit-react/GroupChannelList";

function Inbox() {
  const { user } = useUser();
  const [userId, setUserId] = useState();
  const [channelUrl, setChannelUrl] = useState();
  console.log(channelUrl);
  useEffect(() => {
    if (user) {
      const id = (user.primaryEmailAddress?.emailAddress).split("@")[0];
      setUserId(id);
    }
  }, [user]);

  return (
    <div>
      <div style={{ width: "100%", height: "500px" }}>
        <SendBirdProvider
          appId={import.meta.env.VITE_SENDBIRD_APP_ID}
          userId={userId}
          nickname={user?.imageUrl}
          profileUrl={user?.imageUrl}
          allowProfileEdit={true}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 h-full">
            {/* CHANNEL LIST */}
            <div className="p-5 border shadow-lg">
              <GroupChannelList
                onChannelSelect={(channel) => {
                  setChannelUrl(channel?.url);
                }}
                channelListQueryParams={{
                  includeEmpty: true,
                }}
              />
            </div>
            {/* CHANNEL / MESSAGE AREA */}
            <div className="md:col-span-2 shadow-lg">
              <GroupChannel channelUrl={channelUrl} />
            </div>
          </div>
        </SendBirdProvider>
      </div>
    </div>
  );
}

export default Inbox;
