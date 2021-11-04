import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Connexion</h3>

                <div className="form-group">
                    <label>ID</label>
                    <input type="email" className="form-control" placeholder="Entrez votre ID" />
                </div>

                <div className="form-group">
                    <label>Mot de Passe</label>
                    <input type="password" className="form-control" placeholder="Entrez votre mot de passe" />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
                <div>
                    <Link to="/home"> <button type="submit" className="btn btn-success btn-lg btn-block">Sign in</button></Link>
                </div>
                

                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
