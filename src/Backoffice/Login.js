import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            mdp: "",
            developers: []
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMdp = this.handleChangeMdp.bind(this);
        this.handleSubmitConnection = this.handleSubmitConnection.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    handleChangeMdp(e) {
        this.setState({mdp: e.target.value});
    }

    handleSubmitConnection(e) {
        e.preventDefault();
        alert("Email : " + this.state.email + "/n Mdp : " + this.state.mdp);
    }

    componentDidMount(){
        
    }

    render() {
        return <div className="component">
            <form className="" onSubmit={this.handleSubmitConnection}>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail} />
                <input type="password" name="mdp" value={this.state.mdp} onChange={this.handleChangeMdp} />

                <input type="submit" value="Connexion" />
            </form>
        </div>
        
    }
}
