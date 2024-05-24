import {IAlbumInfo, IArtistData, IArtistInfo, IPlaylistInfo, ITrack} from "../types/api";

async function api<T>(url: string): Promise<T> {
    return fetch(new URL(url, 'https://api.mrtehran.app/web/v1/'), {
        headers: {
            "Accept-Language": "en-US,en;q=0.5",
            "x-api-key": "E3qfMUMiF68amHBoSScO832ypA6GgfEGVNoHhuxtfPNXPSCFueR8cNX1rgcoHqdG",
        },
    }).then(res => res.json());
}

async function apiPolling(url: string) {
    const items = [];
    for (let i = 1;; i++) {
        const newUrl = url.replace(/page=\d/, `page=${i}`)
        const res = await api<{ tracks: ITrack[], end: boolean }>(newUrl);
        items.push(...res.tracks);
        if (res.end) break;
    }
    return items;
}

//region Artist
export async function fetchArtistInfo(id: string) {
    return api<IArtistInfo>(`artist_info?artist_id=${id}`);
}

export async function fetchArtistData(id: string) {
    return api<IArtistData>(`artist_data?artist_id=${id}`);
}

export async function fetchArtistLatestSongs(id: string) {
    return apiPolling(`artist_latest_songs?artist_id=${id}&page=1`);
}

export async function fetchArtistTopSongs(id: string) {
    return apiPolling(`artist_top_songs?artist_id=${id}&page=1`);
}
//endregion

//region Album
export async function fetchAlbumInfo(id: string) {
    return api<IAlbumInfo>(`album_info?album_id=${id}`);
}

export async function fetchAlbumSongs(id: string) {
    return apiPolling(`album_data?album_id=${id}&page=1`);
}
//endregion

//region Playlist
export async function fetchPlaylistInfo(id: string) {
    return api<IPlaylistInfo>(`playlist_info?playlist_id=${id}`);
}

export async function fetchPlaylistSongs(id: string) {
    return apiPolling(`playlist_data?playlist_id=${id}&sort_id=0&page=1`);
}
//endregion
