import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, InputField } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' }

  onButtonPress() {
    const { email, password } = this.state
    this.setState({error: ''})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({error: 'Authentication Failed'})
        });
      });
  }

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
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            autoCorrect={false}
            placeholder="password"
            />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  };
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

export default LoginForm;
