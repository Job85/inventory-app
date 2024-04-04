import React from "react";

const Profile = ({ user }) => {
    return (
        <div>
            <h2>Welcome to your profile  {user.name}</h2>
        </div>
    )
}

export default Profile