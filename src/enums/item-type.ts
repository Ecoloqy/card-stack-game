export type ItemType = WorkerItemType | LocationItemType | ResourceItemType | ToolItemType;

export enum WorkerItemType {
    'SAMURAI' = 'SAMURAI',
    'PERSON' = 'PERSON'
}

export enum LocationItemType {
    'CATHEDRAL' = 'CATHEDRAL',
    'CAMP' = 'CAMP',
    'FOREST' = 'FOREST',
    'MOUNTAIN' = 'MOUNTAIN'
}

export enum ResourceItemType {
    'GRAIN' = 'GRAIN',
    'STONE' = 'STONE',
    'WOOD' = 'WOOD'
}

export enum ToolItemType {
    'AXE' = 'AXE'
}
