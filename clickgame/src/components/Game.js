import React from 'react'
import Friends from '../assets/pictures.json'
import Picture from './Picture.js'


const Game = (props) => {
    var i = 0

    return (
        <div className='container'>
            <div className='row justify-content-around'>
                {props.data.friends.map(friend => {
                    if (props.data.friends.indexOf(friend) < 4) {
                        return (
                            <div onClick={() => props.shuffle(friend.id)}>
                                <Picture
                                    id={friend.id}
                                    name={friend.name}
                                    image={friend.img_src}
                                    onClick={props.shuffle}
                                />

                            </div>
                        )
                    }
                }
                )}

            </div>
            <div className='row justify-content-around'>
                {props.data.friends.map(friend => {
                    if (props.data.friends.indexOf(friend) < 8 && props.data.friends.indexOf(friend) > 3) {
                        return (
                            <div onClick={() => props.shuffle(friend.id)}>
                                <Picture
                                    id={friend.id}
                                    name={friend.name}
                                    image={friend.img_src}
                                    onClick={props.shuffle}
                                />

                            </div>
                        )
                    }
                }
                )}

            </div>
            <div className='row justify-content-around'>
                {props.data.friends.map(friend => {
                    if (props.data.friends.indexOf(friend) < 12 && props.data.friends.indexOf(friend) > 7) {
                        return (
                            <div onClick={() => props.shuffle(friend.id)}>
                                <Picture
                                    id={friend.id}
                                    name={friend.name}
                                    image={friend.img_src}
                                    onClick={props.shuffle}
                                />

                            </div>
                        )
                    }
                }
                )}

            </div>

        </div>



    )

}

export default Game