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
                {/*read*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'reading'}
                    title="Reading"
                    selectedTitleStyle = {styles.selectedTitleStyle}
                    renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'reading' })}>
                    <CDRead />
                </TabNavigator.Item>

                {/*park*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'parking'}
                    title="Parking"
                    selectedTitleStyle = {styles.selectedTitleStyle}
                    renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'parking' })}>
                    <CDPark />
                </TabNavigator.Item>

                {/*discover*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'discovering'}
                    title="Discovering"
                    selectedTitleStyle = {styles.selectedTitleStyle}
                    renderIcon={() => <Image source={{uri:'icon_tabbar_nearby_normal'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_nearby_selected'}} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'discovering' })}>
                    <CDDiscover />
                </TabNavigator.Item>

                {/*mine*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="Mine"
                    selectedTitleStyle = {styles.selectedTitleStyle}
                    renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'mine' })}>
                    <CDMine />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle: {
        width: 26,
        height: 26
    },
    selectedTitleStyle: {
        color: 'rgba(62, 184, 175, 1)'
    }
});

