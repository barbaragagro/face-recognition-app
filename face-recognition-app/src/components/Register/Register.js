import React, {Component} from 'react';


class Register extends Component {
	constructor(props){
	super(props);
	this.state = {
		registerEmail: '',
		registerPassword: '',
		registerName: '',
		
	}
}

onNameChange = (event) => {
	this.setState({registerName:event.target.value});
}

	onEmailChange = (event) => {
		this.setState({registerEmail: event.target.value});
	}

		onPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value});
	}

		onSubmitSignIn = () => {
			fetch ("http://localhost:3001/register", {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.registerEmail,
					password: this.state.registerPassword,
					name: this.state.registerName
				})
			})
			.then(response=> response.json())
			.then(user =>{
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChangeR('home')
				}
				else {
				 alert('Error. Check if you filled out all of the fields, if yes, then that name or email is already taken.');
				}
			})	
		}

		render() {
			const {onRouteChangeR} = this.props;
	return (
	<article className="br3 ba bw3 shadow-5 b--black-30 mv4 w-100 w-50-m w-25-l mw6 center">
		<main className="pa4 black-80">
		  <div className="measure ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0">Register</legend>
		      
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
		        <input onChange= {this.onNameChange} 
		        className="pa2 input-reset ba bw1 bg-transparent hover-bg-white hover-black w-100" type="text" name="name"  id="name" />
		      </div>

		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input onChange= {this.onEmailChange}
		        className="pa2 input-reset ba bw1 bg-transparent hover-bg-white hover-black w-100" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input onChange= {this.onPasswordChange}
		        className="b pa2 input-reset ba bw1 bg-transparent hover-bg-white hover-black w-100" type="password" name="password"  id="password" />
		      </div>
		      
		    </fieldset>
		    <div className="">
		      <input onClick={this.onSubmitSignIn} className="b pointer ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
		    </div>
		     
		  
		
		  </div>
		</main>
	</article>
		); }
}


export default Register;