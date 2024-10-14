import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import AboutText from "../components/AboutText/AboutText";

function About() {
    return (
        <>
            <Header />
            <Banner title="About" image="Banner-About.svg"/>
            <div className="container">
                <AboutText />
            </div>
            <Footer />
        </>
    );
}

export default About