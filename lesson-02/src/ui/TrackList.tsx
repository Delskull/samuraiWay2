import {TrackItem} from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.tsx";


type Props = {
    selectedTrackId: string | null
    onTrackSelect: (id: string | null) => void
}


export function TrackList({onTrackSelect, selectedTrackId} : Props) {
    const {tracks } = useTracks()

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
