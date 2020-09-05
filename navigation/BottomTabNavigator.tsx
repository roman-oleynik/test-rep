import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainTabScreen from '../screens/MainTabScreen/MainTabScreen';
import HistoryTabScreen from '../screens/HistoryTabScreen/HistoryTabScreen';
import MapTabScreen from '../screens/MapTabScreen/MapTabScreen';
import ChosenLocationResponse from '../screens/ChosenLocationResponse/ChosenLocationResponse';
import {
  BottomTabParamList,
  MainTabParamList,
  HistoryTabParamList,
  MapTabParamList 
} from '../types/navigatorTypes';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Main">
      <BottomTab.Screen
        name="Main"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-alarm" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-map" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<MainTabParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="MainTabScreen"
        component={MainTabScreen}
        options={{ headerTitle: 'Главная' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<HistoryTabParamList>();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="HistoryTabScreen"
        component={HistoryTabScreen}
        options={{ headerTitle: 'Журнал подключений' }}
      />
      <TabTwoStack.Screen
        name="ChosenLocationResponse"
        component={ChosenLocationResponse}
        options={{ headerTitle: 'Подключение' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<MapTabParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="MapTabScreen"
        component={MapTabScreen}
        options={{ headerTitle: 'Карта' }}
      />
    </TabThreeStack.Navigator>
  );
}
