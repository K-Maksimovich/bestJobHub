
import userIcon from '../assets/iconuser.jpg'
import {useNavigate} from "react-router-dom";


export const Profile = () => {
    const nav = useNavigate()
    const handleLikes = () => {
        nav("/liked-vacancy")
    }

    return (
        <>
            <div className="container">
                <div className="profile-block">
                    <div className="header-prof">
                        <h1>Profile</h1>
                        <a href="/">Go home</a>
                    </div>
                    <div className="profile-info">
                    <img src={userIcon} alt="" className="user-img"/>
                        <h3 id={"username"}>W1rdz</h3>
                    </div>
                    <div className="profile-more">
                        <ul>
                            <li>Settings</li>
                            <li onClick={handleLikes}>Likes</li>
                        </ul>
                        <select >
                            <option value="fullstack">Fullstack Developer</option>
                            <option value="web">Web Developer</option>
                            <option value="backend">Backend Developer</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}