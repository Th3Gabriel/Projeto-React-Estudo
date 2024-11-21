import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Contacts from "../components/Contacts/Contacts";
import { useContext } from 'react';
import { AppContext } from "../contexts/AppContext";


function Contact() {
    const appContext = useContext(AppContext);

    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.contact} image="Banner-Contact.svg"/>
            <div className="container">
                <Contacts />
            </div>
            <Footer />
        </>
    );
}
export default Contact