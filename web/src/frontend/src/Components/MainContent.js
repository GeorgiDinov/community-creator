import TipOfTheDayContainer from "./TipOfTheDayContainer";
import FormContainer from "./FormContainer";

const MainContent = () => {
    return (
        <div className='container-fluid'>
            <div className='row justify-content-start'>
                <TipOfTheDayContainer/>
                <FormContainer/>
            </div>
        </div>
    );
}

export default MainContent;