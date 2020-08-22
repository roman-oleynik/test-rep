export function mousesToStr(amount: number): string {
    const lastChar: number = Number(String(amount).split("").slice(-1)[0]);
    
    if (amount === 1) {
        return "мышь";
    } else if (amount > 1 && lastChar === 1) {
        return `${amount} мышь`;
    } else if (amount > 1 && lastChar >= 2 && lastChar <= 4) {
        return `${amount} мыши`;
    } else if (amount > 1 && lastChar >= 5 && lastChar <= 9) {
        return `${amount} мышей`;
    } else if (amount > 1 && lastChar === 0) {
        return `${amount} мышей`;
    } else {
        return "нет мышей";
    }
}