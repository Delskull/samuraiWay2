import {useEffect, useState} from "react";

type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}
type Props = {
    trackId: string | null
}

export function TrackDetail({trackId}: Props) {
    const [selectedTrack, setSelectedTrack] = useState<GetTrackDetailsOutputData | null>(null)


    useEffect(() => {

        if (!trackId) {
            setSelectedTrack(null)
            return
        }

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: {
                'api-key': 'e9711845-76f1-4dc0-8c55-1964c41b5b4b'
            }
        }).then(res => res.json())
            .then(json => setSelectedTrack(json.data))

    }, [trackId]);


    return <div>
        <h2>Details</h2>
        {!selectedTrack && !trackId && 'Track is not selected'}
        {!selectedTrack && trackId && 'Loading...'}
        {selectedTrack && trackId && selectedTrack.id !== trackId && 'Loading...'}
        {selectedTrack && <div>
            <h3> {selectedTrack.attributes.title} </h3>
            <h4>Lyrics</h4>
            <p>
                {selectedTrack.attributes.lyrics ?? 'no lyrics'}
            </p>
        </div>
        }
    </div>
}