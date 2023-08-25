export const GifItem = ( {title, url} ) => {
  return (
    <>
      <div className="bg-slate-300 p-2 rounded-sm">
        <img src={url} />
        <small className='leading-none'>{title}</small>
      </div>
    </>
  )
}