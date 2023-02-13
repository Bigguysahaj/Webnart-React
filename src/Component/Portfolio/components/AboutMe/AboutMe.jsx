import React from 'react'
import "./AboutMe.css"
import { ArrowForwardRounded } from '@mui/icons-material';
const AboutMe = ({ details }) => {

    return (
        <div className='AM-main' id="about">
            <div className='AM-leftContent-div'>
                <div className='AM-content-tiles'>
                    <div className='AM-content-heading'>About Me</div>
                    <div>{details?.aboutme}</div>
                </div>
                <div className='AM-content-tiles'>
                    <div className='AM-content-heading'>Skills</div>
                    <div>
                        {details?.skills?.map(ele => (
                            <span>{ele}</span>
                        ))}
                    </div>

                </div>
            </div>
            <div className='AM-rightContent-div'>
                <div className='AM-devGraphic-div'>
                    <div className='AM-devGraphic-top-div'>01<div></div><a href="/"><ArrowForwardRounded /></a></div>
                    <div>Development</div>
                    <div>
                        {details?.development?.map((e) => (
                            <div className='AM-devGraphic-type-div'><div className='AM-devGraphic-smallBullet'></div> {e}</div>
                        ))}
                        {/* <div className='AM-devGraphic-type-div'><div className='AM-devGraphic-smallBullet'></div> Web Development</div> */}
                        {/* <div className='AM-devGraphic-type-div'><div className='AM-devGraphic-smallBullet'></div> iOS Development</div> */}
                    </div>
                </div>
                <div className='AM-devGraphic-div'>
                    <div className='AM-devGraphic-top-div'>02<div></div><a href="/"><ArrowForwardRounded /></a></div>
                    <div>Graphic Design</div>
                    <div>
                        {details?.graphics?.map((e) => (
                            <div className='AM-devGraphic-type-div'><div className='AM-devGraphic-smallBullet'></div> {e}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe