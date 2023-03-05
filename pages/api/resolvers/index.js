import hotel from '../../../data/hotel.json';
import { generateRandomFloat, generateRandomInt } from '../../../utils/numbers';
import { log, error } from '../../../logs/server-logger';

const generateHotel = (hotel, id) => ({
    ...hotel,
    id,
    rate: generateRandomInt(0, 5),
    price: Number(generateRandomFloat(100, 400).toFixed(2))
});

const generatedHotels =  new Array(20).fill(0).map((zero, id) => (generateHotel(hotel, id)));

export const resolvers = {
    Query: {
        hotels: async () => {
            log('REQUEST "hotels"');
            if (generateRandomInt(1, 10) === 1) {
                const message = 'FAILED LOADING "hotels"';
                error(message);
                throw new Error(message);
            }
            return generatedHotels;
        },
        hotel: async () => {
            return generateHotel(hotel, 0);
        }
    }
};
