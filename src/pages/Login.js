import React from 'react';
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  logicBtn() {
    const { email, password } = this.state;
    const emailTest = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (emailTest.test(email) && password === '123456') {
      return false;
    }
    return true;
  }

  handleTextInput({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>Ibagens eu quero Ibagens</div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          required
          onChange={ (e) => this.handleTextInput(e) }
        />
        <input
          data-testid="password-input"
          type="password"
          minLength="6"
          name="password"
          required
          onChange={ (e) => this.handleTextInput(e) }
        />
        <Button
          disabled={ this.logicBtn() }
          email={ email }
          password={ password }
        />
      </div>
    );
  }
}

export default Login;
