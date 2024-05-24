import {fetchPlaylistSongs} from "../utils/api";

export async function playlistSongs(id: string) {
    return await fetchPlaylistSongs(id);
}
