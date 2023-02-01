import React, { useEffect, useState } from 'react'
import "./LatestProject.css"
import ProjectThumbnail from './ProjectThumbnail';
import { Menu, ExpandMoreRounded, ExpandLessRounded } from '@mui/icons-material';
import SingleProjectView from './SingleProjectView';




const LatestProject = ({ projectsList }) => {
    const [projectSelection, setProjectSelection] = useState("All Projects")
    const [projectSelectionDis, setProjectSelectionDis] = useState("none")
    const projectSelectionBtn = (type) => {
        if (type === "all") setProjectSelection("All Projects")
        else if (type === "nodejs") setProjectSelection("Node Js")
        else if (type === "reactjs") setProjectSelection("React Js")
        setProjectSelectionDis("none")
        setExpandText("See More")
    }
    const [expandText, setExpandText] = useState("See More")
    const projectSelectionMenuBtn = () => {
        if (projectSelectionDis === "none") return setProjectSelectionDis("block")
        setProjectSelectionDis("none")

    }

    const expandMoreBtn = () => {
        if (expandText === "See More") return setExpandText("See Less")
        setExpandText("See More")
    }
    // eslint-disable-next-line
    const [totalPTMain, setTotalPTMain] = useState(0)
    useEffect(() => {
        let x = document.getElementsByClassName("PT-serialNoDiv")
        setTotalPTMain(x.length)
        for (let i = 0; i < x.length; i++) {
            if (i < 9) x[i].innerHTML = "0" + (i + 1)
            else x[i].innerHTML = i + 1
        }
    }, [projectSelection, expandText])

    const [projectDivDis, setProjectDivDis] = useState(false)
    const [projectData, setProjectData] = useState("")
    const thumbnailClicked = (value) => {
        setProjectData(value)
        setProjectDivDis(true)
    }
    const SPDivHide = () => {
        setProjectDivDis(false)
    }


    return (
        <div id="project" className='project-main'>
            <div className='project-top-div'>
                <span>Latest Projects</span>
                <div className='project-selectionDiv'>
                    {projectSelection}<Menu onClick={projectSelectionMenuBtn} className='projectMenuIcon' />
                    <div style={{ display: projectSelectionDis }} className='project-selection'>
                        <button onClick={() => (projectSelectionBtn("all"))}>All Projects</button>
                        <button onClick={() => (projectSelectionBtn("nodejs"))}>Node Js</button>
                        <button onClick={() => (projectSelectionBtn("reactjs"))}>React Js</button>
                    </div>
                </div>
            </div>
            <div className='project-middle-div'>
                {projectsList?.filter((value, i) => {
                    return (projectSelection !== "All Projects") ? value.type.includes(projectSelection) : value
                }).map((value, key) =>
                    (expandText === "See More") ? (key < 3) && (<ProjectThumbnail data={value} i={key} key={key} onclick={thumbnailClicked} />) : <ProjectThumbnail data={value} i={key} key={key} onclick={thumbnailClicked} />
                )}
                {projectDivDis && <SingleProjectView data={projectData} hideFun={SPDivHide} />}
            </div>
            <div onClick={expandMoreBtn} className='project-last-div'>
                {expandText}{(expandText === "See More") ? <ExpandMoreRounded /> : <ExpandLessRounded />}
            </div>
        </div>
    )
}

// const projectsList = [
//     {
//         "name": "Webnart",
//         "description": "The focus of the project is to develop a platform where students of Fresher can present their project or work and get hired on the basis of Knowledge or requirement to any individual.Technologies used : MERN (Mongo Db, Express Js, React Js, Node Js), Adobe Xd for Designing.",

//         "deployLink": "https://webnart.netlify.app/",

//         "githubLink": "https://github.com/kumarohan0115/Webnart-React",

//         "type": ["React Js", "Node Js"],
//         "thumbnail": "1TTR9m-O42JKTdL39EqZuxFtBvYTOw8S_",
//         "photos": [
//             "1gu1ybYaXfCGZkEMREBiR_Du6cCrD8Dnf",
//             "1HzXiTbIEWA5iTKtUS_0FCuKKn3SA_IDN",
//             "17oclqSOIGhZ4RJw8E59aCfPUHDX-Gc3C",
//             "1Hu3ef8BJIV4H6eHkD7vez4key_KByHWe"
//         ],
//         "videos": []
//     },
//     {
//         "name": "Netflix Clone",
//         "description": "Web App of Netflix (Clone) Including Trailer API of YouTube.",

//         "deployLink": "https://netflix-clone-7c20f.web.app/",

//         "githubLink": "https://github.com/kumarohan0115/Netflix-Clone-React",

//         "type": ["React Js"],
//         "thumbnail": "1sT31lj9FbZvbk_rliyztWs2ucB0s9cP1",
//         "photos": [
//             "1oYLAGfCfzWWb8IEt_yyCYhhtFZhM3mJ1",
//             "1EveYq89apzAKi74s00LJwGOA_HnB_lvd",
//             "1q6Xe2J9aq0yfRg1_KWDMGmNkkRAQk4RU"
//         ],
//         "videos": []
//     },
//     {
//         "name": "GPT-3 Portfolio",
//         "description": "Web App of Netflix (Clone) Including Trailer API of YouTube.",

//         "deployLink": "https://gpt3portfolioclone.netlify.app/",

//         "githubLink": "https://github.com/kumarohan0115/GPT-3-React-Project",

//         "type": ["React Js"],
//         "thumbnail": "1sHHv6qypclnPU95GxWOj88hJ_XIHeGCM",
//         "photos": ["1kp_PjWRR_xjhJxPZLC6zkoJWCYpMAcpc",
//             "1K8Lxi4slIy_DPqikErPW51tTM8-vIGYW",
//             "1FuPdigCikBFN2PHx2bqnIBw7Dj1Ucmo4",
//             "1v9HVCW9tb7wiNGImI41lTLP2BmflOm51"
//         ],
//         "videos": []
//     }
// ]

// const projectsList = [
//     {
//         "name": "GPT-3 Portfolio",
//         "description": "Web App of Netflix (Clone) Including Trailer API of YouTube.",

//         "deployLink": "https://gpt3portfolioclone.netlify.app/",

//         "githubLink": "https://github.com/kumarohan0115/GPT-3-React-Project",

//         "type": ["React Js"],
//         "thumbnail": "1sHHv6qypclnPU95GxWOj88hJ_XIHeGCM",
//         "photos": ["1kp_PjWRR_xjhJxPZLC6zkoJWCYpMAcpc",
//             "1K8Lxi4slIy_DPqikErPW51tTM8-vIGYW",
//             "1FuPdigCikBFN2PHx2bqnIBw7Dj1Ucmo4",
//             "1v9HVCW9tb7wiNGImI41lTLP2BmflOm51"
//         ],
//         "videos": [""]
//     },
//     {
//         "name": "slack clone",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
//         "deployLink": "https://slack-clone-99340.web.app",
//         "githubLink": "https://github.com/visshal14/slack-clone",
//         "type": [
//             "All Projects",
//             "React Js"
//         ],
//         "thumbnail": "1SytExe0mPG_dZ_9dyt1NgtpHwKor2v0V",
//         "photos": [
//             "1SytExe0mPG_dZ_9dyt1NgtpHwKor2v0V",
//             "1GDQb10flCq05QW_JXGUYqjoT40EmRrZ3",
//             "1qaTHmih1JQgVRX5_0BG6wdT0xsoyD9TX",
//             "1TUJF9ddjnvfWOAsKmIzOzpHYPsMMarK6",
//             "1VQYgmyq4HnoRn7OPbWRm3Jw1JV9BoSoX",
//             "1CtB5nCi51LsfdZjXB_GLpXufCJH5GUC9",
//             "1UV3ByuiN5-LH44sHLiBQyQiECmIyvGyg"
//         ],
//         "videos": [
//             "dF7cDxnbCe0"
//         ]
//     },
//     {
//         "name": "netflix clone",
//         "description": "it is a  netflix clone",
//         "deployLink": "https://netflix-clone-50751.web.app/",
//         "githubLink": "https://github.com/visshal14/netflix-clone",
//         "type": [
//             "All Projects",
//             "React Js"
//         ],
//         "thumbnail": "1FVJu4f8QKly2_MR1A522jKEfU2wb736_",
//         "photos": [
//             "1FVJu4f8QKly2_MR1A522jKEfU2wb736_",
//             "1Z3pOrGv1GNMyvKUQCmgKPrwk4eSmnDRO",
//             "1xpRUS6GzWCTOeyeHlDx6RM8smv-wiFb-",
//             "1iqLfx9jjid42evK3Yl4-R98ggH_SilDC"
//         ],
//         "videos": [
//             "sAF-uoA6sy0"
//         ]
//     },
// ]


export default LatestProject