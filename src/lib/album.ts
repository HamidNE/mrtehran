import {fetchAlbumInfo, fetchAlbumSongs} from "../utils/api";

export async function albumInfo(id: string) {
    return await fetchAlbumInfo(id);
}

export async function albumSongs(id: string) {
    return await fetchAlbumSongs(id);
}
