function hasSubstringAt(str:string, substr:string, pos:number): boolean {
    let idx:number = 0
    let length: number = substr.length;

    for (let max = str.length; idx < length; ++idx) {
        if ((pos + idx) >= max || str[pos + idx] != substr[idx])
            break;
    }

    return idx === length;
}

export function trimString(str:string, word:string): string {
    let start:number = 0;
    let end:number = str.length;
    let length:number = word.length;

    while (start < end && hasSubstringAt(str, word, start))
        start += word.length;

    while (end > start && hasSubstringAt(str, word, end - length))
        end -= word.length;


    return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}
