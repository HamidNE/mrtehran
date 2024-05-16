import {createWriteStream} from 'node:fs';
import {Readable} from "node:stream";
import {finished} from "node:stream/promises";
import type {ReadableStream} from "node:stream/web";

export async function downloadFile(url: string, path: string) {
    const {body} = await fetch(url);
    const stream = createWriteStream(path);
    return await finished(Readable.fromWeb(body as ReadableStream).pipe(stream));
}
