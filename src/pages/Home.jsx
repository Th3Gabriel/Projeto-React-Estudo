import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

function Home() {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle='primary' arrow>Olá </Button>
            <div className="container">
                <Hero />
            </div>
            <Footer />

        </>
    );
}

export default Home