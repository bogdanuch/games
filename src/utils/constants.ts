import gameData from "../mockData.json"
import gameProviders from "../mockProviders.json"
import {TGameProvider, TGamesData} from "../contexts/useGameList.d";
export const pageSize: number = 8;

export const mockData: TGamesData = JSON.parse(JSON.stringify(gameData));
export const mockProviders: TGameProvider[] = gameProviders;

