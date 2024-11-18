
export const chunk = <T>(array: T[], ArraySize: number) => {
    const result = [];
    let i = 0;
    while (i < array.length) {
        result.push(array.slice(i, i + ArraySize));
        i += ArraySize;
    }
    return result;
}