import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import theme from '../../Theme';
import Logo from '../Shared/Logo';
import { Entypo } from '@expo/vector-icons'; 
import { fetchTop, fetchSeasonNow } from '../../Api';
import { ActivityIndicator, Title } from 'react-native-paper';
import TopList from '../Lists/TopList';
import SeasonList from '../Lists/SeasonList';

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const Home = ({navigation}) => {
    const [top, setTop] = useState({});
    const [season, setSeason] = useState({});

    const getTop = async () => {
        const response = await fetchTop();
        setTop(response);
    }

    const getSeason = async () => {
        const responseSeason = await fetchSeasonNow();
        setSeason(responseSeason);
    }

    useEffect(() => {
        getTop();
        getSeason();
    }, []);

    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <Entypo
                    name="menu" 
                    size={34} 
                    color={theme.colors.white} 
                    style={styles.hamburguer}
                    onPress={() => navigation.toggleDrawer()}
                />
                <Logo style={styles.logo}/>
            </View>
            <View>
                <Title style={styles.titles}>Top Animes</Title>
                {top.data ? (
                    <TopList top={top} navigation={navigation}/>
                ) : (
                    <ActivityIndicator animating={true} color={theme.colors.acento}/>
                )
                }
            </View>
            <View>
                <Title style={styles.titles}>Current Season</Title>
                {season.data ? (
                    <SeasonList season={season} navigation={navigation}/>
                ) : (
                    <ActivityIndicator animating={true} color={theme.colors.acento}/>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: deviceWidth * 0.01,
        backgroundColor: theme.colors.background,
    },
    logo: {
        width: 90,
        height: 70,
        marginTop: deviceHeight * -0.05,
        marginLeft: deviceWidth * 0.71,
    },
    hamburguer: {
        marginTop: deviceHeight * 0.07,
        marginLeft: deviceWidth * 0.05,
    },
    titles: {
        marginLeft: deviceWidth * 0.07,
    }
})

export default Home;