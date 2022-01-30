import { GOOGLE_MAPS_API_KEY } from "./constants";

export const getGoogleMapsLocation = async (address) => {
    try {
        const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+123&key=${GOOGLE_MAPS_API_KEY}`
        );
        return await res.json();
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const isGameValid = (game) => {
    return game.title
        && game.content
        && game.location
        && game.dateTime
        && game.category;
};
