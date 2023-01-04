import React, {MouseEvent, ReactElement} from 'react'
import {useNavigate} from "react-router-dom";
import {Button, Typography} from "@mui/material";

import {TGame} from "../../contexts/useGameList.d";

function GameList({gameList}: { gameList: TGame[] }): ReactElement {
    const navigate = useNavigate();
    const handleButton = (e: MouseEvent, gameId: string) => {
        e.preventDefault();
        navigate(`/games/${gameId}`)
    }

    return (
        <div className='game-list'>
            {gameList.map((gameData) => (
                <div className='game-info' key={gameData.gameId}>
                    <img alt='gameImage' src={`https://cdn.softswiss.net/i/s3/${gameData.gameId}.png`}/>
                    <Typography variant='subtitle1' align='center'>{gameData.title}</Typography>
                    <Button variant='contained' onClick={(e) => handleButton(e, gameData.gameId ?? '')}>
                        Play
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default GameList;