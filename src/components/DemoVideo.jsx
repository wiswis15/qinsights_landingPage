export function DemoVideo({ src, title, className = '', poster }) {
  const containerClassName = ['demo-video', className].filter(Boolean).join(' ')

  return (
    <div className={containerClassName}>
      <div className="demo-video__frame">
        <video
          className="demo-video__media"
          src={src}
          title={title}
          aria-label={title}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
        />
      </div>
    </div>
  )
}
