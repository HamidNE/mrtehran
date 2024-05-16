import {fetchArtistLatestSongs, fetchArtistTopSongs} from "../utils/api";
import {downloadSongs} from "./download";

export async function downloadArtistLatestSongs(id: string, destination: string) {
    const res = await fetchArtistLatestSongs(id);
    await downloadSongs(res, destination);
}

export async function downloadArtistTopSongs(id: string, destination: string) {
    const res = await fetchArtistTopSongs(id);
    await downloadSongs(res, destination);
}
