import  Constants  from "expo-constants";

const ENV = {
    dev:{
        apiKey: "AIzaSyAv9oejkpMhwF5SdSyXp8Rx26Gqygoy-Hc",
        authDomain: "weeberse-f1224.firebaseapp.com",
        projectId: "weeberse-f1224",
        storageBucket: "weeberse-f1224.appspot.com",
        messagingSenderId: "53736094703",
        appId: "1:53736094703:web:6ede1b4aaf5551b97d141a",
        apiUrl: "https://api.jikan.moe/v4/",
    },
    production: {
        apiKey: "AIzaSyAv9oejkpMhwF5SdSyXp8Rx26Gqygoy-Hc",
        authDomain: "weeberse-f1224.firebaseapp.com",
        projectId: "weeberse-f1224",
        storageBucket: "weeberse-f1224.appspot.com",
        messagingSenderId: "53736094703",
        appId: "1:53736094703:web:6ede1b4aaf5551b97d141a",
        apiUrl: "https://api.jikan.moe/v4/",
    }
}

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if(__DEV__) return ENV.dev;
    else if (env == "staging") return ENV.dev;
    else if(env == "production") return ENV.production
}

export default getEnvVars;