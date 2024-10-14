import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Contacts from "../components/Contacts/Contacts";


function Contact() {
    return (
        <>
            <Header />
            <Banner title="Contacts" image="Banner-Contact.svg"/>
            <div className="container">
                <Contacts />
            </div>
            <Footer />
        </>
    );
}
export default Contact