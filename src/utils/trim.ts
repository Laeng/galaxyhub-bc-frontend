export function trim(word:string, str:string): string {
    let start = 0;
    let end = str.length;

    while(start < end && str[start] === word) {
        ++start;
    }

    while(end > start && str[end - 1] === word) {
        --end;
    }

    if (start > 0 || end < str.length) {
        return str.substring(start, end);
    }

    return str;
}
