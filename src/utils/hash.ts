export default function hash(text: string) {
    let hash = 0, i = 0, len = text.length;
    while ( i < len ) {
        hash  = ((hash << 5) - hash + text.charCodeAt(i++)) << 0;
    }
    return hash;
}
