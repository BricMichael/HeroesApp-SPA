import { heroes } from "../data/Heroes";

export const getHeroesById = ( publisher ) => {

    return heroes.find( hero => hero.id === id);

};