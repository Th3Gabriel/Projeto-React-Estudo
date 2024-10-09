import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ProjectLists from "../components/ProjectList/ProjectLists";


function Projects() {
    return (
        <>
            <Header />
            <Banner title="Projects" image="Banner-Prroject.svg"/>
            <div className="container">
                <ProjectLists />
            </div>
            <Footer />
        </>
    );
}

export default Projects