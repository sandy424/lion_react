function Post({title, body, username, email}) {
    return(
        <div className="postContainer">
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="userInfo">
                <div className="avatar">{username[0]}</div>
                <div className="username">{username}</div>
                <div className="email">{email}</div>
            </div>
        </div>
    )
}
export default Post;