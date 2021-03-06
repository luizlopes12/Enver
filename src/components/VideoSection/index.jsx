import React from 'react'
import {
    Container,
    Texts,
    Video
} from './style'
const VideoSection = () => {
  return (
      <Container>
          <Texts>
                <h2>Why Enver Is The Best Choice?</h2>
                <p>
                    Watch this one minute video so you understand why you should use our services!
                </p>
          </Texts>
          <Video>
            <iframe src="https://www.youtube.com/embed/uLkkNcAk6tE" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
          </Video>
      </Container>
  )
}

export default VideoSection