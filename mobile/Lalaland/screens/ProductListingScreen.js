
import React, { Component } from 'react'
import { Constants } from 'expo'
import { Text, View, FlatList, StyleSheet, Image } from 'react-native'
import { Card, Rating, SearchBar , Button} from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Entypo } from 'react-native-vector-icons';
const PRODUCTITEMS = [
    {
        id: '1',
        name: 'Nexus 9',
        price: '1 000 000',
        color: 'Blue',
        condition: '99%',
        view: '120',
        size: 'S',
        soldby: "Peter Parker",
        location: 'Phu Nhuan, TP Ho Chi Minh',
        description: 'Dư dùng bán máy tính bảng nexus 9 máy dùng trâu bò full chức năng ko lỗi lầm máy kèm bao flip , xạc 25w motorola đang chạy Android 7 chạy mượt zalo face pin dùng ngon lành , trâu bò màn hình 9" xem phim đọc báo ngon lành bản dùng wifi',
        imageURL: 'https://cdn.chotot.com/eY5w7-xu4gsbncPzlr8Dnu3dE04ek64dpIE_DSPVeDI/preset:view/plain/84ade17c98e0f9e90481275f5e6a81d7-2642613054759151033.jpg',
        moreImage: ['https://cdn.chotot.com/XgdCF_mGF09BBOv-VqdbC1f-9eIserYIHoxR6oyKeIg/preset:view/plain/b6884de48dc1b1f7ff0b221da1bf432b-2642613054798487265.jpg',
            'https://cdn.chotot.com/eY5w7-xu4gsbncPzlr8Dnu3dE04ek64dpIE_DSPVeDI/preset:view/plain/84ade17c98e0f9e90481275f5e6a81d7-2642613054759151033.jpg',
            'https://cdn.chotot.com/eY5w7-xu4gsbncPzlr8Dnu3dE04ek64dpIE_DSPVeDI/preset:view/plain/84ade17c98e0f9e90481275f5e6a81d7-2642613054759151033.jpg'
        ],
    },

    {
        id: '2',
        name: 'Huawei Nova 3i',
        price: '4.200.000',
        color: 'Red',
        condition: '99%',
        view: '120',
        size: 'S',
        soldby: "Tony Stark",
        location: 'Binh Thanh, TP Ho Chi Minh',
        description: 'Cần bán lại điện thoại Huawei Nova 3i trắng. Tình trạng mới 99%, không 1 vết trầy xước. Lên đời máy mới nên bán lại Bộ nhớ 128Gb, thoải mái lưu trữ hình ảnh, dữ liệuChụp hình đẹp lung linh Còn bảo hành chính hãng thế giới di động hơn 10 tháng.',
        imageURL: 'https://cdn.chotot.com/qXVBjxskEN3wy-bpFfDoiP3rnd4W8sI9NE2c4f8IX8I/preset:view/plain/d88261180a823b29ced60e79b61c4ba6-2642608957248668390.jpg',
        moreImage: ['https://cdn.chotot.com/qXVBjxskEN3wy-bpFfDoiP3rnd4W8sI9NE2c4f8IX8I/preset:view/plain/d88261180a823b29ced60e79b61c4ba6-2642608957248668390.jpg',
            'https://cdn.chotot.com/WCdVIcUCHAyM12PSDhcjE4bf-cfiZaEJkCOHXaL61Gc/preset:view/plain/13af81813e4cc87c2102a643a27bac7a-2642608957048234657.jpg',
            'https://cdn.chotot.com/WCdVIcUCHAyM12PSDhcjE4bf-cfiZaEJkCOHXaL61Gc/preset:view/plain/13af81813e4cc87c2102a643a27bac7a-2642608957048234657.jpg'
        ],
    },
    {
        id: '3',
        name: 'Galaxy S8',
        price: '3.650.000',
        color: 'Black',
        condition: '99%',
        view: '120',
        size: 'S',
        location: 'Quan 1, TP Ho Chi Minh',
        description: 'cần bán máy Samsung s8 active máy đẹp leng keng chưa qua sửa chữa. máy ram 4gbbộ nhớ 64gb máy full chức năngmáy có tặng kèm sạc cáp',
        soldby: "Khanh Nguyen",
        imageURL: 'https://cdn.chotot.com/hRgetrthSey2aCwrHylKMLLuZcR0bwCtF55s_8J7ln8/preset:view/plain/125817a38cb33a086eb76c2d09c0c435-2642595771772685126.jpg',
        moreImage: ['https://cdn.chotot.com/XgdCF_mGF09BBOv-VqdbC1f-9eIserYIHoxR6oyKeIg/preset:view/plain/b6884de48dc1b1f7ff0b221da1bf432b-2642613054798487265.jpg',
            'https://cdn.chotot.com/hRgetrthSey2aCwrHylKMLLuZcR0bwCtF55s_8J7ln8/preset:view/plain/125817a38cb33a086eb76c2d09c0c435-2642595771772685126.jpg',
            'https://cdn.chotot.com/hRgetrthSey2aCwrHylKMLLuZcR0bwCtF55s_8J7ln8/preset:view/plain/125817a38cb33a086eb76c2d09c0c435-2642595771772685126.jpg'
        ],
    },
    {
        id: '4',
        name: 'LG V40',
        price: '4.950.000',
        color: 'Red',
        condition: '99%',
        view: '120',
        size: 'S',
        soldby: "Quyen Chinh",
        location: 'Quan 1, TP Ho Chi Minh',
        description: 'Cần bán điện thoại lg v40 màu xanh nhám đẹp leng keng.',
        imageURL: 'https://cdn.chotot.com/kzTpYiMtWoiA_iiZO_hTi9ZjV8T7K2Pj5ljGIqaHgr8/preset:view/plain/b0119467cdec570ca325baa8ce04606e-2642595573307399951.jpg',
        moreImage: ['https://cdn.chotot.com/kzTpYiMtWoiA_iiZO_hTi9ZjV8T7K2Pj5ljGIqaHgr8/preset:view/plain/b0119467cdec570ca325baa8ce04606e-2642595573307399951.jpg',
            'https://cdn.chotot.com/l8fvFM9u0Sv_Ur5Pu4Fj5EQ9xius90CkNpL1OiGTwo8/preset:view/plain/5eb2547d494e758327e04f9019e3a44f-2642595575152959247.jpg',
            'https://cdn.chotot.com/gNt13u7Sw5hdkRQoWCPMLbq56z4KdoppBicznPv0_Xs/preset:view/plain/dd7d4ecf73fff5610eb4773ad9d12f75-2642595573051302256.jpg'
        ],
    },
    {
        id: '5',
        name: 'iPhone 7plus 128gb',
        price: '5.950.000',
        color: 'Brown',
        condition: '90%',
        view: '130',
        size: 'S',
        soldby: "Hieu Vu",
        location: 'Tan Phu, TP Ho Chi Minh',
        description: 'Cần bán điện thoại iPhone 7 Plus dung lượng 128 GB màu đen nhám đẹp leng keng.',
        imageURL: 'https://cdn.chotot.com/cb8igIqjSPndqY5rvtCU9M5wQg603dComhJqSOqzfSw/preset:view/plain/dffd2ff043bfbd506466d096f3f4c645-2642590209449461644.jpg',
        moreImage: ['https://cdn.chotot.com/XgdCF_mGF09BBOv-VqdbC1f-9eIserYIHoxR6oyKeIg/preset:view/plain/b6884de48dc1b1f7ff0b221da1bf432b-2642613054798487265.jpg',
            'https://cdn.chotot.com/cb8igIqjSPndqY5rvtCU9M5wQg603dComhJqSOqzfSw/preset:view/plain/dffd2ff043bfbd506466d096f3f4c645-2642590209449461644.jpg',
            'https://cdn.chotot.com/XCkrqpB6FLoY1Q_XNw4QGbyVgRJxTMMl3arMwP2QQ7o/preset:view/plain/e3711a2dc3d217d82e5414c688aa51f6-2642590209143718938.jpg'
        ],
    },
    {
        id: '6',
        name: 'Note10 Full Seal',
        price: '18.450.000',
        color: 'Black',
        condition: '99%',
        view: '120',
        size: 'S',
        soldby: "Vu Hoang Hieu",
        location: 'Tan Binh, TP Ho Chi Minh',
        description: 'Cần bán điện thoại Samsung Galaxy Note10 full seal mua ở tgdd màu xanh nhám đẹp leng keng.',

        imageURL: 'https://cdn.chotot.com/50wwsxbAe90h0vtpXD5ZiCHZb8f4hPko-MT3rTowjXw/preset:view/plain/b94dd20bcd6946ac6a562c09b5f4e3f4-2642588567908152405.jpg',
        moreImage: ['https://cdn.chotot.com/50wwsxbAe90h0vtpXD5ZiCHZb8f4hPko-MT3rTowjXw/preset:view/plain/b94dd20bcd6946ac6a562c09b5f4e3f4-2642588567908152405.jpg',
            'https://cdn.chotot.com/JLwK3vTfisNSNO-L8rL8OJy--6n_x_gUQQk4xgqzCWs/preset:view/plain/03e4c2f0ce21051bdf2a58e077d6c0d9-2642588568292216966.jpg',
            'https://cdn.chotot.com/eKFA5IbctcZNW0gqtGqmo01G9aczruo-H87MaILDK5A/preset:view/plain/03374c87b0eadaa1d9619cde49734b7e-2642588568411534421.jpg'
        ],
    },
    {
        id: '7',
        name: 'LG G6 RAM 4/32',
        price: '1.950.000',
        color: 'Red',
        condition: '99%',
        view: '120',
        size: 'S',
        soldby: "Linda",
        location: 'Binh Tan, TP Ho Chi Minh',
        description: 'Cần bán điện thoại LG G6 đẹp leng keng.',
        imageURL: 'https://cdn.chotot.com/TCRlSWNxg39oYMBXJv7NvgxFM84DNzMGEhuroHdipyI/preset:view/plain/8e6eae44aacd67d05c1085b63b2b10de-2642581205138104842.jpg',
        moreImage: ['https://cdn.chotot.com/TCRlSWNxg39oYMBXJv7NvgxFM84DNzMGEhuroHdipyI/preset:view/plain/8e6eae44aacd67d05c1085b63b2b10de-2642581205138104842.jpg',
            'https://cdn.chotot.com/lw839tbHbHoeQhd2miDX8EgL-X-oDkl0B4bRslr0htw/preset:view/plain/d555100346b9d5930256bec93b1e7530-2642581205796728043.jpg',
            'https://cdn.chotot.com/ZHDub8VDj6WK8JV8Q3oK3ZU3vQcM17SZpwFXvppkhe8/preset:view/plain/2b0e6a61fc90a0818de48f56346aab1b-2642581206417550571.jpg'
        ],
    },
    {
        id: '8',
        name: 'iPhone Xs Max 256',
        price: '13.200.000',
        color: 'Red',
        condition: 'New',
        view: '120',
        size: 'S',
        soldby: "Quynh Tran JP",
        location: 'Thu Duc, TP Ho Chi Minh',
        description: 'Chào các bạn Mình cần bán Iphone Xs Max 256gb trắng để lên đời ip pro. Thông tin máy mình như sau:\n- Máy lock nhà mạng At&t. Còn BH apple (như hình). \n- Là máy phụ nên ngoại hình 99% như mới. Pin 100%, chỉ sạc dưới 30 lần.\n- Mình chỉ bán máy trần. Tặng sim ghép cho ai nhiệt tình.',
        imageURL: 'https://cdn.chotot.com/IDTNfpyzH2bY-5nod2B3CevzW58Lgp9zKBfSyUZp7YM/preset:view/plain/5367324d1fe1f12474b466b01f62a2dc-2642560019194032225.jpg',
        moreImage: ['https://cdn.chotot.com/IDTNfpyzH2bY-5nod2B3CevzW58Lgp9zKBfSyUZp7YM/preset:view/plain/5367324d1fe1f12474b466b01f62a2dc-2642560019194032225.jpg',
            'https://cdn.chotot.com/HpVP5pAFY3pczGFwPACshn0PTLmBirFuwRUx7BKTMdw/preset:view/plain/b71bac8911ad146b14c8a8e667b496f8-2642560019007367449.jpg',
            'https://cdn.chotot.com/8I9PzydiuySRcg9qfKuA2lQCwGa0MupINVi-KOuf5nw/preset:view/plain/08db55324b00da21b312f8699660835e-2642560012853667323.jpg'
        ],
    },
    {
        id: '9',
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
];

export default class ProductListingScreen extends Component {

    renderProductItem = ({ item }) => {
        return (
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
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
                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold', color: '#d61609' }}>{item.price} đ</Text>
                            <Text style={{ marginLeft: 10 }}>Used: {item.condition}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Entypo name="location" size={15}></Entypo>
                            <Text style={{ marginLeft: 10 }}>{item.location}</Text>
                        </View>


                    </View>

                </View>
            </TouchableOpacity>
            <Button
                        title="Offer"
                        titleStyle={{fontSize:13}}
                        buttonStyle={{
                            backgroundColor: '#55eb34',
                            borderRadius: 10,
                            marginBottom: 5,
                            marginHorizontal: 30
                        } }/>
            </View>
        );
    };
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#CED0CE",
                    marginVertical: "2%"
                }}
            />
        );
    };

    render() {
        return (

            <View style={styles.container}>
                <View  style={{
                           borderRadius: 8,
                            borderWidth: 3,
                            borderColor: '#d6d7da',
                            flex: 1
                        }}>
                    <SearchBar platform="android"
                        placeholder="Search"
                       

                    />
                </View>
                <View style={styles.listingContainer}>
                    <FlatList data={PRODUCTITEMS}
                        renderItem={this.renderProductItem}
                        keyExtractor={(item) => item.id}
                        style={{ marginHorizontal: 5 }}
                        ItemSeparatorComponent={this.renderSeparator}
                    ></FlatList>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    listingContainer: {
        marginBottom: 45,
        flex:10,
        marginTop: 10
    }
}
)
ProductListingScreen.navigationOptions = {
    title: 'Latest products',
    headerStyle: {
        backgroundColor: '#fdce09',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
        fontWeight: 'bold',
    },

};