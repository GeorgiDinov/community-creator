import {Route, Switch} from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

const FormContainer = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/register" component={Registration}/>
                {/*If you need to pass props use render*/}
                <Route exact path="/login" render={() => <Login/>}/>
            </Switch>
        </div>
    );
}

export default FormContainer;