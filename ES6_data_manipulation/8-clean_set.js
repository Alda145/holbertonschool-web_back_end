export default function cleanSet(set, string) {
    if (!startString || string.length === 0) {
        return "";
    }
    const values = [];
    for (const x of set.keys()) {
        if (x.includes(string)) {
            values.push(x.replace(string, ''));
        }
    }
    return values.join('-');
}
