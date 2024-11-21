import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ProjectLists from "../components/ProjectList/ProjectLists";
import { useContext } from 'react';
import { AppContext } from "../contexts/AppContext";


function Projects() {
    const appContext = useContext(AppContext);

    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="Banner-Prroject.svg"/>
            <div className="container">
                <ProjectLists />
            </div>
            <Footer />
        </>
    );
}

export default Projects