import {fetchAlbumSongs} from "../utils/api";
import {downloadSongs} from "./download";

export async function downloadAlbumSongs(id: string, destination: string) {
    const res = await fetchAlbumSongs(id);
    await downloadSongs(res, destination);
}
