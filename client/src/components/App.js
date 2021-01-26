import React, {useEffect} from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from "./Header";
import SearchProduct from "./SearchProduct";
import Product from "./Product";
import Alta from "./Alta"
import Baja from "./Baja"
import Register from "./Register";
import Inventario from "./Inventario";
import Orden from "./Orden";
import OrdenStatus from "./OrdenStatus";
import CantidaddesTotales from "./CantidadesTotales";
import OrdenesActivas from "./OrdenesActivas";
import Success from "./confirmation/Success";
import Failure from "./confirmation/Failure";
import DashboardAdmin from "./admin/DashboardAdmin";
import NuevoProducto from "./admin/NuevoProducto";
import Root from "./Root";

const App = ({currentUser, user}) => {

    useEffect(() =>{
        currentUser()
    },[currentUser])

    return(
        <div className="container"> 
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Root}/>
                    <Route exact path="/producto">
                        {!user? <Redirect to="/"/>: <SearchProduct/>}
                    </Route>
                    <Route exact path="/producto/:codigo" render={(props)=>{
                        if(!user) {
                            return <Redirect to="/"/> 
                        }
                        return <Product {...props}/>
                    }} />
                    <Route exact path="/alta">
                        {!user? <Redirect to="/"/>: <Alta/>}
                    </Route>
                    <Route exact path="/baja">
                        {!user? <Redirect to="/"/>: <Baja/>}
                    </Route>
                    <Route exact path="/register">
                        {!user? <Redirect to="/"/>: <Register/>}
                    </Route>
                    <Route exact path="/inventario">
                        {!user? <Redirect to="/"/>: <Inventario/>}
                    </Route>
                    <Route exact path="/orden">
                        {!user? <Redirect to="/"/>: <Orden/>}
                    </Route>
                    <Route exact path="/ordenstatus">
                        {!user? <Redirect to="/"/>: <OrdenStatus/>}
                    </Route>
                    <Route exact path="/cantidades">
                        {!user? <Redirect to="/"/>: <CantidaddesTotales/>}
                    </Route>
                    <Route exact path="/ordenesactivas">
                        {!user? <Redirect to="/"/>: <OrdenesActivas/>}
                    </Route>
                    <Route exact path="/admin" component={DashboardAdmin}/>
                    <Route exact path="/admin/nuevoproducto" component={NuevoProducto}/>
                    <Route exact path="/success" component={Success}/>
                    <Route exact path="/failure" component={Failure}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(App);