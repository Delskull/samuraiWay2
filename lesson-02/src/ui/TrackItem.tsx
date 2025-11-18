import type {TrackListItemOutput} from "../dal/api.ts";


type Props = {
    isSelected:boolean
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
}



export function TrackItem({track,isSelected,onSelect}:Props) {

    const handleClick = () => onSelect?.(track.id)

    return <li  style={{
        border: isSelected ? '1px solid orange' : 'none'
    }}>
        <div onClick={handleClick}>
            {track.attributes.title}
        </div>
        <audio controls
               src={track.attributes.attachments[0].url}></audio>
    </li>
}