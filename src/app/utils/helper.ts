export function zeroIfNegative(input: number) {
    return input < 0 
                ? 0
                : input
}

export function formatPrice(input: number) {
    return input.toFixed(2);
}