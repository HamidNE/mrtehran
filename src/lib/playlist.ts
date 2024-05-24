import {fetchPlaylistInfo, fetchPlaylistSongs} from "../utils/api";

export async function playlistInfo(id: string) {
    return await fetchPlaylistInfo(id);
}

export async function playlistSongs(id: string) {
    return await fetchPlaylistSongs(id);
}
