import React, { Component } from 'react';
import { Button, Card, CardSection, InputField } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' }

  render () {
    return (
      <Card>
        <CardSection>
          <InputField
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Login"
            autoCorrect={false}
            placeholder="user@gmail.com"
            />
        </CardSection>
        <CardSection>
          <InputField
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label="Login"
            autoCorrect={false}
            placeholder="user@gmail.com"
            />
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  };
}

export default LoginForm;
