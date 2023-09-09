export default function Post(post){
    const {userId,id, title, body} = post.post
    const postStyle = {
        border: '2px solid salmon',
        margin:'20px',
        padding:'20px',
        borderRadius: '15px',
    }
    return(
        <div style={postStyle}>
            <h2>User Id : {userId} </h2>
            <h3>Id : {id} </h3>
            <h4>Title : {title} </h4>
            <h5>{body}</h5>
        </div>
    )
}