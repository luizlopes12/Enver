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

            <iframe width="853" height="480" src="https://www.youtube.com/embed/vTm7t9JBGfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>
      </Container>
  )
}

export default VideoSection