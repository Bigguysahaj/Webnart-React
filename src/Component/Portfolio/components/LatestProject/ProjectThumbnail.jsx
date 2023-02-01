import React from 'react'
import "./ProjectThumbnail.css"


const ProjectThumbnail = ({ data, i, onclick }) => {

    let thumbnail = "https://drive.google.com/uc?id=" + data?.thumbnail?.replace("https://drive.google.com/file/d/", "").replace("/view?usp=share_link", "")

    return (
        <div onClick={() => onclick(data)} className='PT-main'>
            <img src={thumbnail} alt="p" />
            <div className='PT-serialNoDiv'>
                {(i < 9) ? `0${i + 1}` : i + 1}
            </div>
            <div className='PT-name'>
                {data.name}
            </div>
        </div>
    )
}

export default ProjectThumbnail