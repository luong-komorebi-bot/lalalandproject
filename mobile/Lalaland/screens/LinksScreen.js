import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Image, KeyboardAvoidingView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { GiftedChat } from 'react-native-gifted-chat';
import { Input, Button, colors, Rating } from 'react-native-elements';
import { tsImportEqualsDeclaration } from '@babel/types';


var Num = 0;
var userMess = [];
const sentProduct = {  
  id: '1',
  name: 'iPad Pro 11 Inch 256',
  price: '20 900 000',
  color: 'Blue',
  condition: '98%',
  view: '120',
  size: 'S',
  soldby: "Peter Parker",
  location: 'Phu Nhuan, TP Ho Chi Minh',
  description: 'Cần pass lại 1 em Ipad pro 11 inch 256gb wifi + cellular fullbox + bút apple pen 2 fullbox Mới xài 2 tháng, còn hạn bảo hành tới tháng 9/2020Giá: máy 20tr , bút 2.5tr',
  imageURL: 'https://cdn.chotot.com/MXwr6qE0YfjMulZ-Kk2ldc5a1RBfedmphzywYuG3uVw/preset:view/plain/b7ac3b783915e3d51b78eddf523042f9-2642271319962147595.jpg',
  moreImage: ['https://cdn.chotot.com/MXwr6qE0YfjMulZ-Kk2ldc5a1RBfedmphzywYuG3uVw/preset:view/plain/b7ac3b783915e3d51b78eddf523042f9-2642271319962147595.jpg',
      'https://cdn.chotot.com/2hc4plEwGeq4qihXS8H1zEXdJCAARnL-C5vOlyWjHBE/preset:view/plain/1eae05801bf358a08f4a70673edaa0c1-2642271324472898497.jpg',
      'https://cdn.chotot.com/fGvsKEk5n4BhJsKy-6WxHvskOeok2TD65BCNgFjrMXc/preset:view/plain/2a5f446df96c5e7d4ffc1e7e7b414044-2642271318905051915.jpg'
  ],
}

const botMess = [
  {
    _id: 2,
    text: 'Hello, you want to buy something?',
    createdAt: new Date(),
    quickReplies: {
      type: 'radio', // or 'checkbox',
      values: [
        {
          title: '😋 Mobile',
          value: 'yes',
        },
        {
          title: '📷 Tablet',
          value: 'yes_picture',
        },
        {
          title: '😞 Laptop',
          value: 'no',
        },
      ],
    },
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://i.imgur.com/NJH98f7.png',
    },
  },

  {
    _id: 3,
    text: 'Tell me the brand?',
    createdAt: new Date(),
    quickReplies: {
      type: 'radio', // or 'checkbox',
      values: [
        {
          title: 'Apple',
          value: 'yes',
        },
        {
          title: 'Samsung',
          value: 'yes_picture',
        },
        {
          title: 'Xiaomi',
          value: 'no',
        },
      ],
    },
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://i.imgur.com/NJH98f7.png',
    },
  },

  {
    _id: 4,
    text: 'So estimate the price?',
    createdAt: new Date(),
    quickReplies: {
      type: 'radio', // or 'checkbox',
      values: [
        {
          title: '$ 800',
          value: 'yes',
        },
        {
          title: '$ 900',
          value: 'yes_picture',
        },
        {
          title: '$ 1000',
          value: 'no',
        },
      ],
    },
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://i.imgur.com/NJH98f7.png',
    },
  },
]
var NumReply = 0;

export default class LinksScreen extends React.Component {

  state = {
    messages: [],
  }

  constructor() {
    super();
    this.state.show = false;
  }


  onSendQuickReply = () => {
    var replies = [
      {
        title: 'Tablet',
        value: 'no',
      },
      {
        title: 'Apple',
        value: 'no',
      },
      {
        title: '$ 1000',
        value: 'no',
      },
    ]
    const createdAt = new Date()
    // if (replies.length === 1) {
    {
      this.onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies[NumReply].title,
          user: {
            _id: 1,
          }
        },
      ])
    }
    NumReply++;
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };


  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 0,
          text: 'Hello, you want to buy something?',
          createdAt: new Date(),
          quickReplies: {
            type: 'radio', // or 'checkbox',
            values: [
              {
                title: 'Mobile',
                value: 'yes',
              },
              {
                title: 'Tablet',
                value: 'yes_picture',
              },
              {
                title: 'Laptop',
                value: 'no',
              },
            ],
          },
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://i.imgur.com/NJH98f7.png',
          },
        },
      ],
      prodtitle: "",
      proddescription: "",
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    userMess.push(messages[0].text);

    if (Num < 2) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, botMess[Num]),
      }));
      Num++;
    }
    else {
      this.ShowHideComponent();
      //  Num = 0;
      return;
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
     

        <View style={styles.productContainer}>

          <View style={styles.chatContainer}>

          
          <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              onQuickReply={this.onSendQuickReply}
              user={{
                _id: 1,
              }}
              style={{marginBottom:50}}
            />
          </View>
          {this.state.show ? (

            <View style={styles.responseContainer}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: 'https://ipadpro.com.vn/wp-content/uploads/2019/08/ipad-pro-2018.jpg',
                  }}
                  style={{ width: 100, height: 100 }}
                />
                <View style={styles.infoContainer}>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}> {userMess[0]}</Text>
                  <Text> {userMess[1]}</Text>
                  <Text> {userMess[2]}</Text>
                  <View style={{ flexDirection: 'row' }}>

                    <Rating
                      imageSize={20}
                      readonly
                      startingValue={5}
                      ratingColor="#fdce09"
                    />
                    <Text> (2048)</Text>
                  </View>
                </View>

              </View>

              <View style={styles.buttonContainer}>

                <Button
                  title='Buy now'
                  titleStyle={{ color: 'black' }}
                  buttonStyle={{
                    width:130,
                    height:50,
                    backgroundColor: '#fdce09',
                    borderRadius: 40,
                    marginBottom: 5,
                    marginHorizontal: 15
                        }}
                        onPress={() => {
                          this.props.navigation.navigate('ProductDetail', {
                              id: sentProduct.id,
                              name: sentProduct.name,
                              price: sentProduct.price,
                              imageURL: sentProduct.imageURL,
                              moreImage: sentProduct.moreImage,
                              description: sentProduct.description,
                              soldby: sentProduct.soldby,
                              location: sentProduct.location
                          });}}

                />

                <Button
                  title='View more'
                  titleStyle={{ color: 'black' }}
                  buttonStyle={{
                    width:130,
                    height:50,
                    backgroundColor: '#fdce09',
                    borderRadius: 40,
                    marginBottom: 5,
                    marginHorizontal: 15
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('ProductListing');}}

                />
              </View>
              

            </View>
          ) : null}

        </View>
      </KeyboardAvoidingView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Quick Buy Bot',
  headerStyle: {
    backgroundColor: '#fdce09',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flex: 7,
    marginBottom:80
  },
  productContainer: {
    flex: 3,
  },
  responseContainer: {
    flexDirection: "column"
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "center",
    marginBottom: 85,
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: "center",
    marginLeft: 30,
  }
});
