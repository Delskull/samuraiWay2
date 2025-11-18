export type GetTrackDetailsOutputData = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}

export type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            'api-key': 'e9711845-76f1-4dc0-8c55-1964c41b5b4b'
        }
    }).then(res => res.json())
    return promise
}

type AttachmentDto = {
    url:string
}

type TrackListItemOutputAttributes = {
    title:string
    attachments: Array<AttachmentDto>
}
export type TrackListItemOutput = {
    id: string
    attributes:TrackListItemOutputAttributes
}
export type GetTrackListOutput = {
    data:Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': 'e9711845-76f1-4dc0-8c55-1964c41b5b4b'
        }
    }).then(res => res.json())
    return promise
}