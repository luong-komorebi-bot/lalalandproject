import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
const loginInfo = { logId: 'admin', logPass: 'admin' }

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMess: '',
            errStyle: '',
        }
    }
    authenLogin = () => {
        const id = this.state.username;
        const pass = this.state.password;
        if ((id === loginInfo.logId )&& (pass === loginInfo.logPass)) {
            this.props.navigation.navigate("Interests");
        }
        else {
            this.setState({
                errMess: "Invalid value !!!",
            }
            )
        }

    }

    render() {
        return (
            <View style={styles.container}>
        
                <View style={{alignItems:'center'}}>
                    <Image
                        style={{ width: 250, height: 100, resizeMode: "stretch"}}
                        source={require('../assets/images/app-logo.png')
                        }
                    />
                </View>
                <View style={styles.loginform}>
                    <View style={styles.inputArea}>
                        <Input
                            placeholder='Email@address.com'
                            inputStyle={{ color: 'black' }}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color= 'black'
                                    style={{ marginRight: 20 }}
                                />
                            }
                        />
                    </View>
                    <View style={styles.inputArea}>
                        <Input
                            placeholder='Password'
                            inputStyle={{ color: 'black' }}
                            style={{ width: 50 }}
                            errorMessage={this.state.errMess}
                            errorStyle={{ color: 'red' }}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            secureTextEntry={true}
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={24}
                                    color='black'
                                    style={{ marginRight: 20 }}
                                />
                            }
                        />
                    </View>
                </View>
                <View>
                    <Button
                        title="Log in"
                        buttonStyle={{
                            backgroundColor: '#fc8c03',
                            borderRadius: 40,
                            marginBottom: 5,
                            marginHorizontal: 30

                        }
                        }
                        onPress={() => {
                            this.authenLogin();
                        }}
                    />

                    <Button
                        title="Sign in with Facebook"
                        buttonStyle={{
                            backgroundColor: '#3461eb',
                            borderRadius: 40,
                            marginBottom: 50,
                            marginTop: 10,
                            marginHorizontal: 30
                        }}

                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fdce09",
        flex: 1,
        justifyContent: "center",
        flexDirection: "column"
    },
    loginform: {
        marginTop: 50,
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: 30,
        borderRadius: 50,
    },

    inputArea: {
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 10,
        marginHorizontal: 30
    }

});