import s from './Post.module.css'

function Post () {
    return (
                    <div className={s.item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Vus934rJkI6vZQKN07jnLnxkdSGmpqB9Ow&usqp=CAU" alt="ava"/>
                        post 1
                        <div><span>like</span></div>
                    </div>
    )
}

export default Post