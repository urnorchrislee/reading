import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import CDRead from './../read/CDRead';
import CDDiscover from './../discover/CDDiscover';
import CDPark from './../park/CDPark';
import CDMine from './../mine/CDMine';

export default class extends Component {

    constructor(props){
        super(props);

        // 初始化状态
        this.state = {
            selectedTab : 'reading'
        }
    }

    render() {
        return (
            <TabNavigator>
                {/*
                    read
                     <TabNavigator.Item
                         selected={this.state.selectedTab === 'reading'}
                         title="Reading"
                         selectedTitleStyle = {styles.selectedTitleStyle}
                         renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                         renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                         onPress={() => this.setState({ selectedTab: 'reading' })}>
                         <CDRead />
                     </TabNavigator.Item>
                */}
                {this._renderItem("Reading", 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'reading', <CDRead />, '10')}

                {/*park*/}
                {this._renderItem("Parking", 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'parking', <CDPark />, '1')}

                {/*discover*/}
                {this._renderItem("Discovering", 'icon_tabbar_nearby_normal', 'icon_tabbar_nearby_selected', 'discovering', <CDDiscover />, '2')}

                {/*mine*/}
                {this._renderItem("Mine", 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', <CDMine />, '')}

            </TabNavigator>
        );
    }

    /**
     * 封装tab
     * @param title 标题
     * @param renderIcon 渲染图标
     * @param renderSelectedIcon 选中图标
     * @param selectedTab 选中tab
     * @param component 组件
     * @param badgeText 气泡效果
     * @returns {XML}
     * @private
     */
    _renderItem(title, renderIcon, renderSelectedIcon, selectedTab, component, badgeText){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                renderBadge = {()=>this._renderBadge(badgeText)}
                title={title}
                selectedTitleStyle = {styles.selectedTitleStyle}
                renderIcon={() => <Image source={{uri:renderIcon}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:renderSelectedIcon}} style={styles.iconStyle}/>}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                {component}
            </TabNavigator.Item>
        )
    }

    _renderBadge(badgeText){
        if(badgeText == '') return <View />;

        return (
            <View style={styles.badgeStyle}>
                <Text style={styles.badgeTextStyle}>{badgeText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26
    },
    selectedTitleStyle: {
        color: 'rgba(62, 184, 175, 1)'
    },
    badgeStyle: {
        width: 18,
        height: 18,
        backgroundColor: 'red',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        top: -3
    },
    badgeTextStyle:{
        fontSize: 12,
        color: '#fff',
        backgroundColor:'transparent'
    }
});

