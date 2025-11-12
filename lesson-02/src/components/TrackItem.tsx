type AttachmentDto = {
    url:string
}

type TrackListItemOutputAttributes = {
    title:string
    attachments: Array<AttachmentDto>
}

type Props = {
    isSelected:boolean
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
}

export type TrackListItemOutput = {
    id: string
    attributes:TrackListItemOutputAttributes
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