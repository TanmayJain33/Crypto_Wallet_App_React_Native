import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import MainLayout from './MainLayout';
import HeaderBar from '../components/HeaderBar';
import {FONTS, COLORS, SIZES} from '../constants/theme';
import dummyData from '../constants/dummy';
import icons from '../constants/icons';

const SectionTitle = ({title}) => {
  return (
    <View style={{marginTop: SIZES.padding}}>
      <Text style={{color: COLORS.lightGray3, ...FONTS.h4}}>{title}</Text>
    </View>
  );
};

const Setting = ({title, value, type, onPress}) => {
  if (type == 'button') {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
        }}>
        <Text style={{flex: 1, color: COLORS.white, ...FONTS.h3}}>{title}</Text>
        <Text
          style={{
            color: COLORS.lightGray3,
            ...FONTS.h3,
            marginRight: SIZES.radius,
          }}>
          {value}
        </Text>
        <Image
          source={icons.rightArrow}
          style={{tintColor: COLORS.white, width: 15, height: 15}}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
        <Text style={{flex: 1, color: COLORS.white, ...FONTS.h3}}>{title}</Text>
        <Switch
          value={value}
          onValueChange={value => onPress(value)}
          thumbColor={COLORS.white}
        />
      </View>
    );
  }
};

const ProfileScreen = () => {
  const [faceId, setFaceId] = useState(true);

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.black,
        }}>
        {/* Header Section */}
        <HeaderBar title="Profile" />

        {/* Details Section */}
        <ScrollView>
          {/* Email, user id and status */}
          <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
            {/* Email and user id */}
            <View style={{flex: 1}}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>
                {dummyData.profile.email}
              </Text>
              <Text style={{color: COLORS.lightGray3, ...FONTS.body4}}>
                ID: {dummyData.profile.id}
              </Text>
            </View>
            {/* Status */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={icons.verified} style={{width: 25, height: 25}} />
              <Text
                style={{
                  color: COLORS.lightGreen,
                  ...FONTS.body4,
                  marginLeft: SIZES.base,
                }}>
                Verified
              </Text>
            </View>
          </View>
          {/* App Section */}
          <SectionTitle title="APP" />
          <Setting title="Launch Screen" value="Home" type="button" />
          <Setting title="Appearance" value="Dark" type="button" />
          {/* Account Section */}
          <SectionTitle title="ACCOUNT" />
          <Setting title="Payment Currency" value="USD" type="button" />
          <Setting title="Language" value="English" type="button" />
          {/* Security Section */}
          <SectionTitle title="SECURITY" />
          <Setting
            title="Face ID"
            value={faceId}
            type="switch"
            onPress={value => setFaceId(value)}
          />
          <Setting title="Password Settings" value="" type="button" />
          <Setting title="Change Password" value="" type="button" />
          <Setting title="2-Factor Authentication" value="" type="button" />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default ProfileScreen;
