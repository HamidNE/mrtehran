import got from 'got'
import {createWriteStream} from 'node:fs';

export async function downloadFile(url: string, path: string) {
    return await new Promise((resolve, reject) => {
        const writable = createWriteStream(path);
        got.stream(url, { prefixUrl: '' }).pipe(writable);
        writable
            .on('error', err => { reject(err); })
            .on('finish', resolve);
    });
}
