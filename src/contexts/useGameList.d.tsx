export type TGameListContext = {
    gameList: TGame[],
    providerList: TGameProvider[],
    totalPageCount: number,
    currentPage: number,
    changePage: (page: number) => void,
    setProviderFilterParam: (param: string) => void,
    searchBy: (param: string) => void,
}

export type TGameProvider = {
    id: string,
    title: string,
}

export type TGame = {
    title: string;
    provider: string;
    collections: {
        [collection: string]: number;
    };
    real: {
        [currencyCode: string]: {
            id: number;
            jackpot: number;
        };
    };
    demo?: string;
    gameId?: string;
};

export type TGamesData = {
    [gameId: string]: TGame
}