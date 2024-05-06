import {fetchAlbumSongs, fetchArtistLatestSongs} from "../utils/api";
import {kebabCase} from "../utils/string";
import {mkdir} from "node:fs/promises";
import {downloadFile} from "../utils/download";
import {Track} from "../types/api";

async function downloadSongs(res: Track[], id: string) {
    const links: [string, string][] = res.map(item => [
        `https://cdnmrtehran.ir/media/${item.track_audio}`,
        `../../download/${id}/${kebabCase(item.track_title)}.mp3`
    ]);

    await mkdir(`../download/${id}`, {recursive: true});

    for (const link of links) {
        await downloadFile(...link)
        console.log('FINISH Download file =>', ...link);
    }
}

export async function downloadArtistLatestSongs(id: string) {
    const res = await fetchArtistLatestSongs(id);
    await downloadSongs(res, id);
}

export async function downloadAlbumSongs(id: string) {
    const res = await fetchAlbumSongs(id);
    await downloadSongs(res, id);
}
