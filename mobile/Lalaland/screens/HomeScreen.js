import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground
} from 'react-native';
import { Card, SearchBar } from 'react-native-elements'
import { collections, dailypicks, trendings, collectionsforyou, explores } from '../utils/data'
import { MonoText } from '../components/StyledText';
import Carousel from 'react-native-snap-carousel';
import { Constants } from 'expo'
import { Icon, Ionicons } from 'react-native-vector-icons';

export default class HomeScreen extends React.Component {

  renderCollectionItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("ProductListings") }}>
        <ImageBackground

          imageStyle={{ borderRadius: 17, flexWrap: 'wrap', resizeMode: 'stretch' }}
          source={{
            uri: item.backgroundImage
          }}
          style={{
            height: 250,
            justifyContent: 'center',
            textAlign: 'center',

          }}>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  renderDailyPickItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('ProductDetail', {
          id: item.id,
          name: item.name,
          price: item.price,
          imageURL: item.imageURL,
          moreImage: item.moreImage,
          description: item.description,
          soldby: item.soldby,
          location: item.location,
          condition: item.condition
        });
      }}>
        <Card image={{ uri: item.imageURL }}
          titleStyle={{ fontSize: 15 }}
          containerStyle={{
            borderRadius: 15, marginBottom: 20, width: 165, height: 200, justifyContent: "center", flexDirection: "column"
          }}
          imageWrapperStyle={{ borderRadius: 15, }} imageStyle={{ height: 120, width: 60 }} imageProps={{ resizeMode: "stretch" }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 13 }}>{item.name}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ alignSelf: "center", color: "#545663", fontSize: 13, fontWeight: "bold" }}> {item.price}đ</Text>
              <Text style={{ alignSelf: "center", color: "#545663", fontSize: 13 }}>-</Text>
              <Text style={{ alignSelf: "center", color: "#545663", fontSize: 13 }}>{item.condition}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  renderTrendingItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row', }}
        onPress={() => {
          this.props.navigation.navigate('ProductDetail', {
            id: item.id,
            name: item.title,
            price: item.price,
            imageURL: item.imageURL,
            moreImage: item.moreImage,
            description: item.description,
            soldby: item.soldby,
            location: item.location
          });
        }}
      >
        <View style={{ flexDirection: 'row', }}>
          <Image
            style={{ width: 64, height: 64 }}
            source={{
              uri: item.imageURL,
            }}
          />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold' }}>{item.price}đ</Text>

              <Ionicons name='md-person' size={20} color='black' style={{ marginLeft: 22, marginRight: 4, }} />
              <Text>{item.soldby}</Text>

            </View>

          </View>
        </View>
        <Text style={{ fontSize: 13 }}>{item.view} Views</Text>

      </TouchableOpacity>
    );
  };


  renderExploreItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ marginVertical: 7, marginHorizontal: 15 }}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image
            style={{ width: 64, height: 64 }}
            source={{
              uri: item.imageURL,
            }}
          />
          <Text style={{ fontSize: 13 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderCollectionForYouItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ marginVertical: 7, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', }}>
          <Image
            style={{ width: 64, height: 64 }}
            source={{
              uri: item.imageURL,
            }}
          />
          <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.numItems} items</Text>
          </View>

        </View>
        <Text style={{ fontSize: 13, textAlign: 'center', marginTop: 5 }}> {item.view} Views </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          marginTop: 24, borderRadius: 8,
          borderWidth: 3,
          borderColor: '#d6d7da',
        }}>
          <SearchBar platform="android"
            placeholder="Search"

          />
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.collectionContainer}>
            <Carousel data={collections}
              renderItem={this.renderCollectionItem}
              keyExtractor={(item) => item.id}
              horizontal
              sliderWidth={390}
              itemWidth={390}
            ></Carousel>
          </View>
          <View style={styles.dailypickContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, fontFamily: 'pt-sans' }}> Daily picks for you</Text>
              <Text style={{ alignSelf: "center", color: "#545663", fontSize: 13, fontStyle: 'italic' }}
               onPress={() => {
                this.props.navigation.navigate('ProductListings');
              }} >View all  ></Text>
            </View>
            <FlatList data={dailypicks}
              renderItem={this.renderDailyPickItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
            ></FlatList>
          </View>

          <View style={styles.trendingContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, fontFamily: 'pt-sans' }}> Trending products</Text>
              <Text style={{ alignSelf: "center", color: "#545663", fontSize: 13, fontStyle: 'italic' }}  onPress={() => {
                this.props.navigation.navigate('ProductListings');
              }}>View all  ></Text>
            </View>
            <FlatList data={trendings}
              height={230}
              renderItem={this.renderTrendingItem}
              keyExtractor={(item) => item.id}
            ></FlatList>
          </View>

          <View style={styles.exploreContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, fontFamily: 'pt-sans' }}>Explore more products</Text>
              <Text style={{ alignSelf: "center", color: "#545663", fontSize: 13, fontStyle: 'italic' }}  onPress={() => {
                this.props.navigation.navigate('ProductListings');
              }}>View all  ></Text>
            </View>

            <FlatList data={explores}
              contentContainerStyle={{
                justifyContent: 'center'
              }}
              renderItem={this.renderExploreItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
            ></FlatList>

          </View>

          <View style={styles.collectionforyouContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, fontFamily: 'pt-sans' }}>Collections for you</Text>
              <Text style={{ alignSelf: "center", color: "#545663", fontSize: 13, fontStyle: 'italic' }}  onPress={() => {
                this.props.navigation.navigate('ProductListings');
              }}>View all</Text>
            </View>
            <FlatList data={collectionsforyou}
              height={230}
              renderItem={this.renderCollectionForYouItem}
              keyExtractor={(item) => item.id}
            ></FlatList>
          </View>

        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  collectionContainer: {
    justifyContent: 'center',
    alignItems: 'center'

  },
  collectionforyouContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 40,
  },
  trendingContainer: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  exploreContainer: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  dailypickContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  contentContainer: {
    paddingTop: 15,
  },

 
});
