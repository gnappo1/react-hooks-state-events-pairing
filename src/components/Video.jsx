const Video = ({ video: {id, title, embedUrl, views, createdAt} }) => {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h2>{title}</h2>
      <p>{views} Views | Uploaded {createdAt} </p>
    </div>
  );
};

export default Video;
