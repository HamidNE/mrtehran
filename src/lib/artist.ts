import {fetchArtistLatestSongs} from "../utils/api";
import {downloadSongs} from "./download";

export async function downloadArtistLatestSongs(id: string, destination: string) {
    const res = await fetchArtistLatestSongs(id);
    await downloadSongs(res, destination);
}
