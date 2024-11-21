import './LoadingSpinner.css'
import loadingImage from '../../assets/loading-spinner.gif';

function LoadingSpinner() {
    return (
        <div className='d-flex al-center jc-center loading-overlay-container'>
            <img src={loadingImage} alt='Loading' height="80px"/>
        </div>
    );
}

export default LoadingSpinner;



