import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  TextInput,
  Switch,
  Keyboard,
} from "react-native";

// * STYLES IMPORT
import generalStyles from './app/styles/generalStyles';
import CustomText from './app/components/general/CustomText';

// * COMPONENTS IMPORT
import Dashboard from './app/screens/dashboard/Dashboard';

export default function App() {
  return (
    <SafeAreaView style={generalStyles.appContainer}>
      <Dashboard/>
    </SafeAreaView>
  );
}
