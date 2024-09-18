import { App as SendbirdApp, SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

function Inbox() {
  const { user } = useUser();
  const [userId, setUserId] = useState();
  useEffect(() => {
    if (user) {
      const id = (user.primaryEmailAddress?.emailAddress).split("@")[0];
      setUserId(userId);
    }
  }, [user]);

  return (
    <div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <SendBirdProvider
          appId={import.meta.env.VITE_SENDBIRD_APP_ID}
          userId={userId}
          nickname={user?.imageUrl}
          profileUrl={user?.imageUrl}
          allowProfileEdit={true}
        >
          {/* CHANNEL LIST */}
        </SendBirdProvider>
      </div>
    </div>
  );
}

export default Inbox;
