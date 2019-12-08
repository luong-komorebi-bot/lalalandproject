import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card, Rating, SearchBar, Button } from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';

var items = [
    { name: 'PHONE', code: '#bbbcbd' }, { name: 'GAMING GEAR', code: '#bbbcbd' },
    { name: 'TABLET', code: '#bbbcbd' }, { name: 'POWER BANK', code: '#bbbcbd' },
    { name: 'ACCESSORIES', code: '#bbbcbd' }, { name: 'CASE', code: '#bbbcbd' },
    { name: 'HEADPHONE', code: '#bbbcbd' }, { name: 'TRIPOD', code: '#bbbcbd' },
    { name: 'LAPTOP', code: '#bbbcbd' },
    { name: 'KEYBOARD', code: '#bbbcbd' }, { name: 'BACKPACK', code: '#bbbcbd' },
    { name: 'CAMERA', code: '#bbbcbd' }, { name: 'LENS', code: '#bbbcbd' },
    { name: 'DESKTOP', code: '#bbbcbd' }, { name: 'SMARTWATCH', code: '#bbbcbd' },
    { name: 'SPEAKER', code: '#bbbcbd' },{ name: 'USB', code: '#bbbcbd' },
    { name: 'HARDDRIVE', code: '#bbbcbd' }, { name: 'ADAPTER', code: '#bbbcbd' },
    { name: 'RAM', code: '#bbbcbd' }, { name: 'DISPLAY', code: '#bbbcbd' }

];

export default class InterestScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            color: ['#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd',
            '#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd','#bbbcbd']
        }
    }
    renderInterestItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (this.state.color[items.indexOf(item)] == '#bbbcbd') {
                        this.state.color[items.indexOf(item)] = '#fdce09'
                        this.forceUpdate()
                    }
                    else {
                        this.state.color[items.indexOf(item)] = '#bbbcbd'
                        this.forceUpdate()
                    }
                }}
            >
                <View style={[styles.itemContainer, { backgroundColor: this.state.color[items.indexOf(item)] }]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
            </TouchableOpacity>

        )
    }



    render() {
        return (
            <View style={styles.container}>
                    <Image
                        style={{ width: 300, height: 180,marginTop:65 }}
                        source={require('../assets/images/interest-img.png')}
                    />
              <Text style={{ fontWeight: "bold", fontSize: 18, fontFamily: 'pt-sans',marginTop:10 }}>Choose your interests</Text>
                    <FlatGrid
                        itemDimension={100}
                        items={items}
                        extraData={this.props.color}
                        style={styles.gridView}
                        renderItem={this.renderInterestItem}
                    />
                    <View>
                    <Button
                        title="Yes, that's what I like"
                    
                        titleStyle={{ fontSize: 17 }}
                        onPress={() => { this.props.navigation.navigate("Main") }}
                        buttonStyle={{
                            height:50,
                            width: 250,
                            backgroundColor: '#fc8c03',
                            borderRadius: 10,
                            marginHorizontal: 30,
                            marginBottom:50
                        }} />
                        </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 40,
    },
    itemName: {
        fontSize: 12,
        color: 'black',
        fontWeight: '600',
        textAlign: 'center',
    },
    itemCode: {
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 12,
        color: '#fff',
    },
    gridView: {
        marginTop: 15,
       
      },
})