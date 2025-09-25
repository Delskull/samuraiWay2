import {useEffect, useState} from "react";

let tracks = [
    {id: 1, title: "Musicfun soundtrack", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",},
    {id: 2, title: "Musicfun soundtrack instrumental", url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",},
]


function getTracks () {
     return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: {
        'api-key': 'e9711845-76f1-4dc0-8c55-1964c41b5b4b'
    }
}).then(res => res.json())
    .then(data => {
        console.log('структура данных', data);
        return data
    })

}


function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(null)

 //useEffect(() => {
 //        getTracks().then(loadedData => {
 //            console.log('данные загрузились', loadedData.data[0].attributes.attachments[0].url)
 //        })
 //    })


    if(tracks === null){
        return <div>
            <h1>Musicfan Player</h1>
            <span>Loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <h1>Musicfan Player</h1>
        <span>No tracks</span>
            </div>
    }
    return (
        <div>
            <h1>Musicfan </h1>
            <button onClick={ () => {
                setSelectedTrackId(null)
            }}>Reset selection</button>
            <ul>
                {
                    tracks.map((track) => {
                        return (
                            <li key={track.id} style={{
                                border: track.id === selectedTrackId ? '1px solid orange' : 'none'
                            }}>
                                <div onClick={ () => {
                                    setSelectedTrackId(track.id)
                                }}>
                                    {track.title}
                                </div>
                                <audio controls
                                       src={track.url}></audio>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )

}

export default App
