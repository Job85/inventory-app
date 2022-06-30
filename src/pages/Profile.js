import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = ({ user, authenticated }) => {

    let navigate = useNavigate();
    let { id } = useParams

    const [profiles, setProfile] = useState([])

    useEffect(() => {
        const getUser = async () => {
            let url = process.env.NODE_ENV === 'local' ? `http://localhost:3001/api/user/${id}` : `https://server-inventory-app.herokuapp.com/api/user/${id}`
            const profiles = await axios.get(url)
            setProfile(profiles.data)
            console.log(profiles.data)
        }
        getUser()
            .catch(console.error)
    }, [])

    return (user && authenticated) ? (
        <div>
            <h1>Profile Page of</h1>
            {profiles.map((profile, i) => {
                <h2 key={i}>{profile.username}</h2>
            })}
        </div>
    ) : (
        navigate('/')
    )

}

export default Profile