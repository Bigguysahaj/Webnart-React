import React from 'react'
import "./HomePage.css"

const HomePage = ({ details }) => {
    return (
        <div className='homeDiv' id="home">
            <div className='homeLeftPartition'>
                <div className='homeNameNDes'>
                    <div className='homeName'>
                        My Name is <span>{details?.name}</span>
                    </div>
                    <div className='homeDes'>
                        {details?.aboutme}
                    </div>
                </div>
                <div className='homeLangBtn'>
                    {details?.skills?.map(value => (
                        <button>{value}</button>
                    ))}
                </div>
            </div>
            <div className='homeRightPartition'>
                <RightPartPhoto photo={details?.photo} exp={details?.experience} />
            </div>

        </div>
    )
}

const RightPartPhoto = ({ photo, exp }) => {
    // https://drive.google.com/uc?id=${data?.thumbnail}`

    const photoId = "https://drive.google.com/uc?id=" + photo?.replace("https://drive.google.com/file/d/", "").replace("/view?usp=share_link", "")

    return (
        <div className='homeP'>
            <div className='homePhotoBase'>
                <div className='homePhotoBrownP'>
                </div>
                <img src={photoId} alt="myPhoto" />
                <div className='expDiv'>
                    <span>{exp}+</span><br />
                    Years Experience
                </div>
            </div>
        </div>

    )
}


export default HomePage