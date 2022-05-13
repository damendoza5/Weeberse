import getEnvVars from "../../environment";

const { apiUrl } = getEnvVars();

export const fetchTop = async () => {
    try {
        const endpoint = `${apiUrl}top/anime`;
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};