import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Dimensions
} from "react-native";
import theme from "../../Theme";
import { ActivityIndicator, Button, Card, Title, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import YoutubePlayer from 'react-native-youtube-iframe';
import Rating from "../Shared/Rating";
import Genres from "../Shared/Genres";
import BackImage from "../Shared/BackImage";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const AnimeDetails = ({ route, navigation }) => {
    const { item } = route.params;
    const [shouldShow, setShouldShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={{flex:1}}>
            <ScrollView style={styles.container} bounces={true}>
            <BackImage image={item.images.jpg.large_image_url}/>
            <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
            >
                <Ionicons
                    name="close"
                    size={34}
                    color={theme.colors.white}
                />
            </TouchableOpacity>
            <View style={styles.playerContainer}>
                <View style={styles.player}>
                    <YoutubePlayer
                        height={deviceHeight*0.35}
                        width={deviceWidth * 0.9}
                        play={false}
                        videoId={item.trailer.youtube_id}
                        style={styles.playerYT}
                    />
                </View>
            </View>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>{item.title}</Title>
                        <Rating score={item.score}/>
                        <Genres genres={item.genres}/>
                        <Text style={{color: theme.colors.grayClaro}}>{item.episodes} Episodes - {Intl.NumberFormat().format(item.members)} Fans</Text>
                    </Card.Content>
                </Card>
            </View>
            <View style={styles.cardSynopsis}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Synopsis</Title>
                        <Button
                        style={styles.buttonDown}
                        onPress={() => setShouldShow(!shouldShow) || setIsOpen(!isOpen)}
                        >
                            { isOpen ? (
                                <Ionicons name="chevron-up" size={35} color={theme.colors.acento} />
                            ) : (
                                <Ionicons name="chevron-down" size={35} color={theme.colors.acento} />
                            )}
                        </Button>
                        {
                            shouldShow ? (
                                <Text>{item.synopsis}</Text>
                            ) : null
                        }
                    </Card.Content>
                </Card>
            </View>
            </ScrollView>
            <View>
                <Button style={styles.buttonContainer} onPress={() => console.log("button pressed")}>
                    <Text style={styles.addButton}>Add to "Saved Animes"</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        marginBottom: deviceHeight * -0.1
    },
    back: {
        marginTop: deviceHeight * -0.67,
        marginLeft: "5%",
        position: "relative",
        alignSelf: "flex-start",
        flexDirection: "row",
    },
    playerContainer: {
        marginTop: "6%",
        alignItems: 'center',
    },
    player: {
        borderRadius: 30,
        overflow: 'hidden',
        width: deviceWidth * 0.9,
        height: deviceHeight*0.28
    },
    playerYT: {
        overflow: 'hidden'
    },
    backImage: {
        marginTop: deviceHeight * -0.5,
        flex: 1,
        justifyContent: 'center'
    },
    cardContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%"
    },
    cardSynopsis: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
        marginBottom: "25%"
    },
    card: {
        backgroundColor: theme.colors.primary,
        width: deviceWidth * 0.9,
        padding: 10
    },
    buttonDown: {
        width: 1,
        marginTop: deviceHeight * -0.059,
        left: deviceWidth * 0.65,
    },
    buttonContainer: {
        width: deviceWidth * 0.6,
        borderWidth: 1, 
        borderColor: theme.colors.acento, 
        borderRadius: 20,
        alignSelf: 'center',
        bottom: 15
    },
    addButton: {
        color: theme.colors.acento,
    }
})

export default AnimeDetails;