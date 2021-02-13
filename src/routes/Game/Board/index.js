import PokemonCard from '../../../components/PokemonCard';

import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import {pokemonContext} from '../../../context/pokemonContext';

import s from './style.module.css';
import PlayerBoard from './component/PlayerBoard';
import ArrowChoice from './component/ArrowChoice';
import Result from './component/Result';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        if (item.card.possession === 'red'){
            player2Count++
        };

        if (item.card.possession === 'blue'){
            player1Count++
        };
    });

    return [player1Count, player2Count];
};

const BoardPage = () => {
    const {pokemon, setPokemonsPlayer2, result, setResult} = useContext(pokemonContext);

    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemon).map(item => ({
            ...item, 
            possession:'blue'
        }))
    });
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);

    const history = useHistory();

    if (Object.keys(pokemon).length === 0){
        history.replace('/game');
    }

    useEffect(async() => {
        const boardResponse = await fetch ('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();

        setBoard(boardRequest.data);

        const player2Response =  await fetch ('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        setPokemonsPlayer2(player2Request.data)

        setPlayer2(() => {
            return player2Request.data.map(item => ({
                ...item, 
                possession:'red'
            }))
        });
        

    },[])


    const handlerClickBoardPlate = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card:choiceCard,
                board
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();
            
            if (choiceCard.player === 1){
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
            };
            
            if (choiceCard.player === 2){
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id))
            };
            
            setBoard(request.data);

            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            });
        }
    };

    useEffect(() => {
        if (steps === 9 ){
            const [count1, count2] = counterWin(board, player1, player2);

            if (count1 > count2){
                alert('WIN')
                setResult('win')
            } else if (count1 < count2){
                alert('LOSE')
                setResult('lose')
            } else {
                alert ('DRAW')
                setResult('draw')
            }
            
            history.replace('/game/finish');
        }
    }, [steps])

    return (

            <div className={s.root}>
                <div className={s.playerOne}>
                    <PlayerBoard 
                        player={1}
                        cards={player1} 
                        onClickCard={(card) => setChoiceCard(card)}
                    />
                </div>
                <div className={s.board}>
                {
                    board.map(item => (
                        <div 
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && handlerClickBoardPlate(item.position)}
                        >   

                        {/* <ArrowChoice/> */}
                        {
                                result &&  <Result type={result} />
                        }
                            {
                                item.card && <PokemonCard {...item.card} minimize isActive/>
                            }
                        </div>
                    ))

                    
                }
                </div>
                <div className={s.playerTwo}>
                    <PlayerBoard cards={player2} 
                        onClickCard={(card) => setChoiceCard(card)}
                        player={2} 
                    />
                </div>
            </div>
    );
};

export default BoardPage;