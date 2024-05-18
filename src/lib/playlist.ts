import {fetchPlaylistSongs} from "../utils/api";
import {downloadSongs} from "./download";

export async function downloadPlaylistSongs(id: string, destination: string) {
    const res = await fetchPlaylistSongs(id);
    await downloadSongs(res, destination);
}
