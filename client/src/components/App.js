import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Dahsboard from "./Dashboard";
import SearchProduct from "./SearchProduct";
import Product from "./Product";
import Alta from "./Alta"
import Baja from "./Baja"
import Register from "./Register";
import Inventario from "./Inventario";
import Success from "./confirmation/Success";
import Failure from "./confirmation/Failure";

const App = () => {

    return(
        <div className="container"> 
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Dahsboard}/>
                    <Route exact path="/producto" component={SearchProduct}/>
                    <Route exact path="/producto/:codigo" component={Product}/>
                    <Route exact path="/alta" component={Alta}/>
                    <Route exact path="/baja" component={Baja}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/inventario" component={Inventario}/>
                    <Route exact path="/success" component={Success}/>
                    <Route exact path="/failure" component={Failure}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;