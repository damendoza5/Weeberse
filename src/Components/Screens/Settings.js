import React from 'react';
import { ScrollView, View,  StyleSheet } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import theme from '../../Theme';
import { getAuth } from "firebase/auth";

const Settings = () => {
    const auth = getAuth();
    const userInfo = auth.currentUser;
    const email = userInfo.email

    return (
        <ScrollView style={styles.container}>
            <Title>Settings</Title>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    }
})

export default Settings;