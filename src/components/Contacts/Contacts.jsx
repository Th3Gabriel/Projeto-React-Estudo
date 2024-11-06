import { useState, useEffect } from "react";
import "./Contatcs.css";

//Componentes
import Button from "../Button/Button";


function Contacts(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            setFormSubmitLoading(true)
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...formData, access_key:"65300ca7-9f70-41b2-9c43-eb5233748559"})
                })
                
                if(response.ok){
                    setFormSubmitted(true)
                }else{
                    alert('Erro ao Enviar!')
                }
            }catch (e){
                alert('Erro: ',e)
            }finally{
                setFormSubmitLoading(false)
            }             
        } 
    };

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email); // Corrigido: `test` ao invés de `toLocaleString`
        };

        const isValid = formData.name.trim() &&
                        formData.email.trim() &&
                        isValidEmail(formData.email) && // Corrigido: `isValidEmail` ao invés de `isFormValid`
                        formData.message.trim();

        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="contact-form d-flex fd-column al-center">
            <h2>We love meeting new people and helping them.</h2>
            <form onSubmit={handleSubmit}> 
                <div className="d-flex form-group">
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        onChange={handleChange} // Removido () para passar a função corretamente
                    />
                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        onChange={handleChange} // Removido () para passar a função corretamente
                    />
                </div>

                <div className="d-flex form-group">
                    <textarea
                        className="form-input"
                        id="message"
                        name="message"
                        placeholder="Message *"
                        onChange={handleChange} // Removido () para passar a função corretamente
                        rows="4"
                    ></textarea>
                </div>

                <div className="al-center d-flex jc-end form-group">
                    {formSubmitted && <p className="text-primary">Sucess</p>}
                    <Button type="submit" buttonStyle="primary" disabled={!isFormValid || formSubmitLoading}>
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Contacts;
