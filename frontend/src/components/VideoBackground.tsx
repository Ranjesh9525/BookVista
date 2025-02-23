const VideoBackground = () => {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute min-w-full min-h-full object-cover"
          style={{ filter: "brightness(0.6)" }}
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c0c5c633&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }
  
  export default VideoBackground
  
  