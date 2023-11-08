export const serialize = (object: any): string => {
    return JSON.stringify(object);
};

export const deserialize = <T>(json: string | null): T | null => {
    return json !== null ? JSON.parse(json) as T : null;
};
