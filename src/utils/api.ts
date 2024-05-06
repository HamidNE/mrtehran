import {Track} from "../types/api";

async function api<T>(url: string): Promise<{ tracks: T }> {
    return fetch(url, {
        "headers": {
            "Accept-Language": "en-US,en;q=0.5",
            "x-api-key": "E3qfMUMiF68amHBoSScO832ypA6GgfEGVNoHhuxtfPNXPSCFueR8cNX1rgcoHqdG",
        },
    }).then(res => res.json());
}

export async function fetchArtistLatestSongs(id: string) {
    return api<Track[]>(`https://api.mrtehran.app/web/v1/artist_latest_songs?artist_id=${id}`).then(res => res.tracks);
}

export async function fetchAlbumSongs(id: string) {
    return api<Track[]>(`https://api.mrtehran.app/web/v1/album_data?album_id=${id}`).then(res => res.tracks);
}
