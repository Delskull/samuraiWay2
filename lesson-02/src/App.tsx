import {useEffect, useState} from "react";




function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(null)
    const [selectedTrack, setSelectedTrack] = useState(null)
    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        console.log('effect')
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'e9711845-76f1-4dc0-8c55-1964c41b5b4b'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))


    }, [])


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

        if(selectedTrack === undefined) {
            return <div>
                <span> Loading...</span>
            </div>
        }

    return (
        <div >
            <h1>Musicfan </h1>
            <button onClick={ () => {
                setSelectedTrackId(null)
                setSelectedTrack(null)
            }}>Reset selection</button>
            <div  style={{
                display: 'flex',
                gap: '30px',
            }}>
            <ul>
                {
                    tracks.map((track) => {
                        return (
                            <li key={track.id} style={{
                                border: track.id === selectedTrackId ? '1px solid orange' : 'none'
                            }}>
                                <div onClick={ () => {
                                    setSelectedTrackId(track.id)

                                    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + track.id, {
                                        headers: {
                                            'api-key': 'e9711845-76f1-4dc0-8c55-1964c41b5b4b'
                                        }
                                    }).then(res => res.json())
                                        .then(json => setSelectedTrack(json.data))

                                   setSelectedTrack({loading: true})
                                }}>
                                    {track.attributes.title}
                                </div>
                                <audio controls
                                       src={track.attributes.attachments[0].url}></audio>
                            </li>
                        )
                    })}
            </ul>
                <div>
                    <h2>Details</h2>
                    {selectedTrack?.loading ? 'Loading...' :
                        selectedTrack === null? 'Track is not selected':
                        <div>
                           <h3> {selectedTrack.attributes.title} </h3>
                            <h4>Lyrics</h4>
                            <p>
                                {selectedTrack.attributes.lyrics ?? 'no lyrics'}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}

export default App
