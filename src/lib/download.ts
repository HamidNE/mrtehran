import {ITrack} from "../types/api";
import {join} from "node:path";
import {kebabCase} from "../utils/string";
import {mkdir} from "node:fs/promises";
import {downloadFile} from "../utils/download";

export async function downloadSongs(res: ITrack[], destination: string) {
    const links: [string, string][] = res.map(item => [
        `https://cdnmrtehran.ir/media/${item.track_audio}`,
        join(destination, `${kebabCase(item.track_title)}.mp3`)
    ]);

    await mkdir(destination, {recursive: true});

    for (const link of links) {
        await downloadFile(...link)
        console.log('FINISH Download file =>', ...link);
    }
}
