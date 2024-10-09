import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import ProjectLists from "../components/ProjectList/ProjectLists";


function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
                <ProjectLists/>
            </div>
            <Footer />

        </>
    );
}

export default Home