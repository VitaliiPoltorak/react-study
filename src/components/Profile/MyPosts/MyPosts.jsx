import s from './MyPosts.module.css'
import Post from "./Post/Post";



function MyPosts () {
    return (
            <div>
                my post
                <div>
                    <textarea/>
                    <button>add post</button>
                    <button>remove</button>
                </div>
                <div className={s.posts}>
                    <Post />
                    <Post />
                </div>
            </div>
    )
}

export default MyPosts