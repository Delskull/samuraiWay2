import {useEffect, useState} from "react";
import {TrackItem, type TrackListItemOutput} from "./TrackItem.tsx";



type Props = {
    selectedTrackId: string | null
    onTrackSelect: (id: string | null) => void
}

export function TrackList({onTrackSelect, selectedTrackId} : Props) {
    const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'e9711845-76f1-4dc0-8c55-1964c41b5b4b'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))


    }, [])

    if (tracks === null) {
        return <div>
            <span>Loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <span>No tracks</span>
        </div>
    }

    const handleResetClick = () => {
        onTrackSelect?.(null)
    }
    const handleClick = (trackId: string) => {
        onTrackSelect?.(trackId)
    }
    return <div>
        <button onClick={handleResetClick}>Reset
        </button>

        <hr/>
        <ul>
            {
                tracks.map((track) => {
                    return (
                        <TrackItem key={track.id}
                                    track={track}
                                   isSelected = {track.id === selectedTrackId}
                                   onSelect={handleClick}
                        />
                    )
                })}
        </ul>
    </div>
}
