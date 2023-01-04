import React, {ReactElement} from 'react'
import {Pagination, TextField} from '@mui/material'

import useGameList from "../../contexts/useGameList";
import Filter from "./Filter";
import GameList from "./GameList";

function Home(): ReactElement {
    const {
        totalPageCount,
        gameList,
        currentPage,
        changePage,
        setProviderFilterParam,
        searchBy,
        providerList
    } = useGameList();
    return (
        <div>
            <header>
                <TextField label='Search' variant='outlined' onChange={(e) => searchBy(e.target.value)}/>
                <Filter label='Providers' valueList={providerList} updateFunction={setProviderFilterParam}/>
            </header>
            <GameList gameList={gameList}/>
            <footer>
                <Pagination
                    count={totalPageCount}
                    page={currentPage}
                    onChange={(event, value) => {
                        changePage(value)
                    }}
                    variant="outlined"
                    shape="rounded"
                    size="large"
                />
            </footer>
        </div>
    )
}

export default Home;