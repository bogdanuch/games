import React, {ReactElement, useState, createContext, useEffect, useMemo} from 'react';

import {
    mockData,
    mockProviders,
    pageSize,
} from "../utils/constants";
import {TGame, TGameListContext, TGameProvider} from "./useGameList.d";
import {useDebounce} from "../utils/useDebounce";

const GameListContext = createContext<TGameListContext>({
    gameList: [],
    totalPageCount: 0,
    currentPage: 1,
    providerList: [],
    changePage: (): void => undefined,
    setProviderFilterParam: (): void => undefined,
    searchBy: (): void => undefined,
});

export const GameListContextApp = ({children}: { children: ReactElement }): ReactElement => {
    const [gameList, setGameList] = useState<TGame[]>([]);
    const [displayedGameList, setDisplayedGameList] = useState<TGame[]>([]);
    const [providerFilterParam, setProviderFilterParam] = useState('');
    const [searchFilterParam, setSearchFilterParam] = useState('');
    const debounceFilter = useDebounce<string>(searchFilterParam);
    const [providerList, setProviderList] = useState<TGameProvider[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1)

    const totalPageCount = useMemo(() => Math.ceil(displayedGameList.length / pageSize), [displayedGameList]);

    useEffect(() => {
        setGameList(Object.keys(mockData).map((gameId) => ({...mockData[gameId], gameId})));
        setProviderList(Object.values(mockProviders));
    }, [])

    useEffect(() => {
        setDisplayedGameList(gameList.filter((game) => {
            return game.title.includes(debounceFilter) && (!providerFilterParam || game.provider === providerFilterParam);
        }))
    }, [gameList, providerFilterParam, debounceFilter]);

    return (
        <GameListContext.Provider value={{
            gameList: displayedGameList.slice((currentPage - 1) * pageSize, currentPage * pageSize),
            totalPageCount,
            currentPage,
            providerList,
            changePage: setCurrentPage,
            setProviderFilterParam,
            searchBy: setSearchFilterParam,
        }}>
            {children}
        </GameListContext.Provider>
    )
}

export const useGameList = () => React.useContext(GameListContext);

export default useGameList;