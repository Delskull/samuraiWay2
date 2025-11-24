import clsx from "clsx";
import type {TrackListItemOutput} from "../dal/api.ts";
import styles from './TracksList.module.css'

type Props = {
    isSelected:boolean
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
}



export function TrackItem({track,isSelected,onSelect}:Props) {

    const handleClick = () => onSelect?.(track.id)


    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected
    })

    return <li className={className}>
        <div onClick={handleClick}>
            {track.attributes.title}
        </div>
        <audio controls
               src={track.attributes.attachments[0].url}></audio>
    </li>
}