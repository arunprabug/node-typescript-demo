
export function isEmpty (s:string): boolean {
    return s.length === 0;
}


function indexOf(s: string, s1: string): number {
    return s.indexOf(s1);
}

export default {
    index : indexOf
}