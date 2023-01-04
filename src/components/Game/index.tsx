import React, {MouseEvent, ReactElement} from 'react'
import {useNavigate, useParams} from "react-router-dom";

import {Button, Typography} from "@mui/material";

function Game(): ReactElement {
    const {provider} = useParams();
    const navigate = useNavigate();
    const handleButton = (e: MouseEvent) => {
        e.preventDefault();
        navigate(`/`)
    }
    // const gameLink = `http://test-proxy-server-lup-env.eba-2ipxdf96.ap-southeast-2.elasticbeanstalk.com/game/${provider}/${gameId}`    //Given link not working
    const gameLink = 'https://netent-static.casinomodule.com/games/conan-client/game/conan-client.xhtml?flashParams.bgcolor=000000&gameId=conan_not_mobile&mobileParams.lobbyURL=https%3A%2F%2Fgames.netent.com%2Fvideo-slots%2Fconan%2F&server=https%3A%2F%2Fnetent-game.casinomodule.com%2F&lang=en&sessId=DEMO-308021057-EUR&operatorId=netent'
    return (
        <div>
            <header>
                <Button variant='contained' size='large' onClick={handleButton}>
                    <span className='arrow left'/>
                    Back
                </Button>
                <Typography component='h3' variant='h3'> {provider} </Typography>
            </header>
            <div style={{overflow: 'hidden'}}>
                <iframe src={gameLink} title='game'></iframe>
            </div>
        </div>
    )
}

export default Game;