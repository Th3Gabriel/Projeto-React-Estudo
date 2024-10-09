import './ProjectLists.css'

import LikedFilled from '../../assets/like-filled.svg'
import Like from '../../assets/like.svg'

function ProjectLists(props) {
    return (
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout points.</p>
            </div>
            <div className='projects-grid'>
                <div className='project-card'>
                    <div className='thumb tertiary-background'></div>
                    <h3> João Silva </h3>
                    <p> BH, Brasil </p>
                    <img src={LikedFilled} alt="Like icon" />
                </div>

                <div className='project-card'>
                    <div className='thumb tertiary-background'></div>
                    <h3> João Silva </h3>
                    <p> BH, Brasil </p>
                    <img src={LikedFilled} alt="Like icon" />
                </div>

                <div className='project-card'>
                    <div className='thumb tertiary-background'></div>
                    <h3> João Silva </h3>
                    <p> BH, Brasil </p>
                    <img src={LikedFilled} alt="Like icon" />
                </div>

                <div className='project-card'>
                    <div className='thumb tertiary-background'></div>
                    <h3> João Silva </h3>
                    <p> BH, Brasil </p>
                    <img src={LikedFilled} alt="Like icon" />
                </div>

                <div className='project-card'>
                    <div className='thumb tertiary-background'></div>
                    <h3> João Silva </h3>
                    <p> BH, Brasil </p>
                    <img src={LikedFilled} alt="Like icon" />
                </div>
            </div>
        </div>
    );
}

export default ProjectLists;
