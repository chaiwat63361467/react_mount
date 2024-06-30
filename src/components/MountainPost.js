import './MountainPost.css'


function MountainPost(props) {

    const { mountain , onbgClick} = props
    return(
        <div className="mountain-Post">
            <div className="mountain-post-bg" onClick={onbgClick}> </div>
            <div className="mountain-post-content">
                <img src={mountain.thumbnailUrl} alt="" />
                <h4> {mountain.title} </h4>
            </div>
        </div>
    )
}
export default MountainPost