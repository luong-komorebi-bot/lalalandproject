import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import Slideshow from 'react-native-image-slider-show';
import { Input, Button, Rating, Card } from 'react-native-elements';
import { PRODUCTS } from '../utils/data';
import { Entypo, MaterialIcons, Ionicons, AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';

export default class ProductDetailScreen extends React.Component {


    renderProductItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <Card title={item.name} image={{ uri: item.imageURL }}
                    containerStyle={{
                        borderRadius: 15, width: 180, marginBottom: 20, justifyContent: "center", flexDirection: "column"
                    }}
                    imageWrapperStyle={{ borderRadius: 15, }} imageStyle={{ height: 220 }} imageProps={{ resizeMode: "stretch" }}
                >

                    <View>
                        <Text style={{ fontWeight: "bold", alignSelf: "center" }}> {item.status}</Text>
                        <Rating
                            imageSize={20}
                            readonly
                            startingValue={5}
                            ratingColor="#fdce09"
                        />
                        <Text style={{ fontWeight: "bold", alignSelf: "center" }}> {item.price}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    };

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            description: "Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.",
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: '',
                    caption: '',
                    url: JSON.stringify(navigation.getParam('imageURL', 'default value')).replace(/['"]+/g, ''),
                }, {
                    title: '',
                    caption: '',
                    url: this.props.navigation.state.params.moreImage[0],
                }, {
                    title: '',
                    caption: '',
                    url: this.props.navigation.state.params.moreImage[0],
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000),
        });

    }



    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.sliderContainer}>
                        <Slideshow
                            height={500}
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })} />
                    </View>
                    <View style={styles.moreactionContainer}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name='md-call' size={24} />
                            <Text style={{ fontWeight: "bold", fontFamily: "pt-sans", fontSize: 20 }}>Call</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name='download' size={24} />
                            <Text style={{ fontWeight: "bold", fontFamily: "pt-sans", fontSize: 20 }}>Save</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Entypo name='share' size={24} />
                            <Text style={{ fontWeight: "bold", fontFamily: "pt-sans", fontSize: 20 }}>Share</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name='web' size={24} />
                            <Text style={{ fontWeight: "bold", fontFamily: "pt-sans", fontSize: 20 }}>Website</Text>
                        </View>

                    </View>
                    <View style={styles.productinfoContainer}>
                    <View style={{ flexDirection: "column", justifyContent: "space-between", marginHorizontal: 10, marginVertical: 10 }}>
                            <Text style={{ fontFamily: 'pt-sans', fontWeight: 'bold', fontSize: 20, }}>{JSON.stringify(navigation.getParam('name', 'default value')).replace(/['"]+/g, '')}</Text>
                            <Text style={{ fontFamily: 'pt-sans', fontWeight: 'bold', fontSize: 20, }}>{JSON.stringify(navigation.getParam('price', 'default value')).replace(/['"]+/g, '')}đ</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 10, }}>
                            <MaterialIcons color={'#474646'} name="person" size={20}></MaterialIcons>
                            <Text style={{ marginLeft: 10, color: '#474646', fontSize: 15 }}>{JSON.stringify(navigation.getParam('soldby', 'default value')).replace(/['"]+/g, '')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 7 }}>
                            <AntDesign color={'#474646'} name="Safety" size={20}></AntDesign>
                            <Text style={{ marginLeft: 10, color: '#474646', fontSize: 15 }}>{JSON.stringify(navigation.getParam('condition', 'default value')).replace(/['"]+/g, '')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 7 }}>
                            <Ionicons color={'#474646'} name="md-call" size={20}></Ionicons>
                            <Text style={{ marginLeft: 10, color: '#474646', fontSize: 15 }}> 0963 877 321</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 7 }}>
                            <Entypo color={'#474646'} name="location" size={20}></Entypo>
                            <Text style={{ marginLeft: 10, color: '#474646', fontSize: 15 }}>{JSON.stringify(navigation.getParam('location', 'default value')).replace(/['"]+/g, '')}</Text>
                        </View>
                        <View style={styles.prodDesContainer}>
                            <ScrollView>
                                <Text style={{ marginHorizontal: 15, lineHeight: 20 }}>{JSON.stringify(navigation.getParam('description', 'default value')).replace(/['"]+/g, '')}</Text>
                            </ScrollView>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            titleStyle={{ fontFamily: "pt-sans", fontWeight: "bold", color: "black" }}
                            title="Contact"
                            buttonStyle={{
                                backgroundColor: '#fdce09',
                                borderRadius: 40,
                                marginVertical: 20,
                                marginHorizontal: 20,
                                height: 47
                            }}
                        />
                    </View>
                    <View style={styles.contactinfoContainer}>
                        <View
                            style={{
                                borderBottomColor: '#dbdbdb',
                                borderBottomWidth: 1,
                            }}
                        />
                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginVertical: 10 }}>
                            <Text style={{ fontFamily: 'pt-sans', fontWeight: 'bold', fontSize: 17, }}>Seller info</Text>
                            <Text style={{ fontFamily: 'pt-sans', fontWeight: 'bold', fontSize: 17 }}>></Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                borderBottomColor: '#dbdbdb',
                                borderBottomWidth: 1,
                            }}
                        />
                        <View style={styles.recommendedContainer}>
                            <Text style={{ fontFamily: 'pt-sans', fontSize: 20, fontWeight: 'bold', marginTop: 15, marginLeft: 10 }}>
                                You may also like this
                        </Text>
                            <FlatList data={PRODUCTS}
                                horizontal
                                renderItem={this.renderProductItem}
                                keyExtractor={(item) => item.name}
                            ></FlatList>
                        </View>
                        <TouchableOpacity style={{
                            flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginVertical: 10,
                        }}>
                            <Text style={{ fontFamily: 'pt-sans', fontWeight: 'bold', fontSize: 17 }}>Suport</Text>
                            <Text style={{ fontFamily: 'pt-sans', fontWeight: 'bold', fontSize: 17 }}>></Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                borderBottomColor: '#dbdbdb',
                                borderBottomWidth: 1,
                            }}
                        />
                    </View>


                </ScrollView>
            </View >

        );
    }
}

ProductDetailScreen.navigationOptions = {
    title: 'Product detail',
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
        justifyContent: "center",
        flexDirection: "column"
    },
    sliderContainer: {

        alignContent: "center"
    },
    moreactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginVertical: 12
    },
    productPriceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginVertical: 15,
        marginHorizontal: 10,
    },

    ratingContainer: {
        flexDirection: "row",
        marginHorizontal: 10,
        justifyContent: "space-between"
    },
    prodDesContainer: {
        fontFamily: "pt-sans",
        marginTop: 15,
        flex: 1

    },
    productinfoContainer: {
        backgroundColor: "#F9F9F9",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius:10,
        marginHorizontal: 15
    },
    conditionContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginVertical: 5,
        marginHorizontal: 10,

    },

    contactinfoContainer: {


    },
    buttonContainer: {
        marginVertical: 0,
        alignContent: "center",
        justifyContent: "center"
    },
});
