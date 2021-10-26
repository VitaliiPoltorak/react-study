import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import MyImg from "./MyImg/MyImg";
import MyInfo from "./MyInfo/MyInfo";

function Profile () {
    return (
        <main className={s.content}>
            <MyImg />
            <MyInfo />
            <MyPosts />
        </main>
    )
}

export default Profile