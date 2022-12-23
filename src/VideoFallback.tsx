import type {FC, PropsWithChildren} from 'react'

interface Props {
  fallbackURL: string
  caption?: string
}

const VideoFallback: FC<PropsWithChildren<Props>> = ({
  fallbackURL,
  caption,
  children
}) => {
  const hasTouch = typeof document !== 'undefined' && 'ontouchstart' in document

  return hasTouch ? (
    <figure>
      <video controls>
        <source src={fallbackURL} type="video/mp4" />
      </video>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  ) : (
    <div className="children">{children}</div>
  )
}

export default VideoFallback
