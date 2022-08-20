import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {
  IC_Cart,
  IC_Menu,
  IC_Search,
  IC_Heart,
  IC_Home,
  IC_History,
  IC_User,
} from '../assets/icons/index';

export default class CustomIcon extends Component {
  render() {
    switch (this.props.type) {
      case 'cart':
        return <IC_Cart fill={this.props.fill} />;
      case 'home':
        return <IC_Home fill={this.props.fill} />;
      case 'heart':
        return <IC_Heart fill={this.props.fill} />;
      case 'menu':
        return <IC_Menu fill={this.props.fill} />;
      case 'history':
        return <IC_History fill={this.props.fill} />;
      case 'user':
        return <IC_User fill={this.props.fill} />;
      case 'search':
        return <IC_Search fill={this.props.fill} />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
