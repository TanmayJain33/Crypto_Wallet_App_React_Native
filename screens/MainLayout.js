import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import icons from '../constants/icons';
import TradeButtons from '../components/TradeButtons';
import {connect} from 'react-redux';

function MainLayout({children, isTradeModalVisible}) {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isTradeModalVisible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 280],
  });

  return (
    <View style={{flex: 1}}>
      {children}

      {/* Dim Background */}
      {isTradeModalVisible && (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.transparentBlack,
          }}
          opacity={modalAnimatedValue}
        />
      )}

      {/* Modal */}
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: modalY,
          width: '100%',
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
        }}>
        <TradeButtons
          label="Transfer"
          icon={icons.send}
          onPress={() => console.log('Transfer Pressed')}
        />
        <TradeButtons
          label="Withdraw"
          icon={icons.withdraw}
          onPress={() => console.log('Withdraw Pressed')}
          containerStyle={{
            marginTop: SIZES.base,
          }}
        />
      </Animated.View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible,
  };
}

export default connect(mapStateToProps)(MainLayout);
