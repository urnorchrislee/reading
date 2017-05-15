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
                {this._renderItem("Reading", 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'reading', <CDRead />)}

                {/*park*/}
                {this._renderItem("Parking", 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'parking', <CDPark />)}

                {/*discover*/}
                {this._renderItem("Discovering", 'icon_tabbar_nearby_normal', 'icon_tabbar_nearby_selected', 'discovering', <CDDiscover />)}

                {/*mine*/}
                {this._renderItem("Mine", 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', <CDMine />)}

            </TabNavigator>
        );
    }

    _renderItem(title, renderIcon, renderSelectedIcon, selectedTab, component){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle = {styles.selectedTitleStyle}
                renderIcon={() => <Image source={{uri:renderIcon}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:renderSelectedIcon}} style={styles.iconStyle}/>}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                {component}
            </TabNavigator.Item>
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
    }
});

