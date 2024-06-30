import './MountainItem.css'
function MountainItem(props) {
  const { mountain, onMountainClick } = props
  return (
    <div className="mountain-item">
        <img src={mountain.thumbnailUrl} onClick={() => {onMountainClick(mountain)}} alt='mountain' />
        <h4>{mountain.title}</h4>
    </div>
     
  )
}

export default MountainItem