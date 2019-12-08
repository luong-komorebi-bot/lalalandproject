import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { registerRootComponent } from 'expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const slides = [
  {
    key: 'somethun',
    title: 'Chào mừng tới Lalaland',
    text: 'Nơi trải nghiệm mua sắm của bạn được đặt lên hàng đầu.',
    image: require('../assets/images/shopping.png'),
    backgroundColor: '#fdce09',
  },
  {
    key: 'somethun-dos',
    title: 'Chọn mua vô vàn sản phẩm.',
    text: 'Với nguồn gốc phong phú và giá cả vô cùng hấp dẫn.',
    image: require('../assets/images/buying-house.png'),
    backgroundColor: '#fdce09',
  },
  {
    key: 'somethun1',
    title: 'Nhanh nhất có thể.',
    text: 'Lalaland cùng trợ lí thông minh\ngiúp bạn tìm được cái mình cần nhanh nhất, tiện nhất.',
    image: require('../assets/images/saving-money.png'),
    backgroundColor: '#fdce09',
  },
  {
    key: 'somethun2',
    title: 'Dành riêng cho bạn.',
    text: 'Bạn là duy nhất, trải nghiệm của bạn là duy nhất,sản phẩm dành cho bạn là duy nhất',
    image: require('../assets/images/personalize.png'),
    backgroundColor: '#fdce09',
  }
];

export default class SliderScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showRealApp: false
    }
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imageStyle}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('Login')
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <SliderScreen />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone} />;
    }
  }
}
const styles = StyleSheet.create({

  slide: {
    backgroundColor: '#fdce09',
    flex: 1,
    alignItems: "center",
  },

  imageStyle: {
    marginTop:200,
  },
  text: {
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 20,
    fontFamily: "pt-sans",
    fontSize:20
  },
  title: {
    fontSize: 30,
    color: "#000",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 40,
    fontWeight:"bold"
  }
});
