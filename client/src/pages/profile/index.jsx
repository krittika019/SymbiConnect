import { useAppStore } from "@/store/index.js";

const Profile = () => {
  const {userInfo} = useAppStore() ;
    return (
      <div>Profile
        <div>Email:{userInfo.id}</div>
      </div>
    )
  };
  
  export default Profile;