
const Video = ({title, embedUrl, views, createdAt}) => {
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <span>{views} Views | Uploaded {createdAt}</span> 
        </div>
    )
}

export default Video