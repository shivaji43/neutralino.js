export interface DirectoryEntry {
    entry: string;
    path: string;
    type: string;
}

export interface FileReaderOptions {
    pos: number;
    size: number;
}

export interface DirectoryReaderOptions {
    recursive: boolean;
}

export interface OpenedFile {
    id: number;
    eof: boolean;
    pos: number;
    lastRead: number;
}

export interface Stats {
    size: number;
    isFile: boolean;
    isDirectory: boolean;
    createdAt: number;
    modifiedAt: number;
}

export interface Watcher {
    id: number;
    path: string;
}

export interface CopyOptions {
    recursive: boolean;
    overwrite: boolean;
    skip: boolean;
}

export interface PathParts {
    rootName: string;
    rootDirectory: string;
    rootPath: string;
    relativePath: string;
    parentPath: string;
    filename: string;
    stem: string;
    extension: string;
}

export interface Permissions {
    all: boolean;
    ownerAll: boolean;
    ownerRead: boolean;
    ownerWrite: boolean;
    ownerExec: boolean;
    groupAll: boolean;
    groupRead: boolean;
    groupWrite: boolean;
    groupExec: boolean;
    othersAll: boolean;
    othersRead: boolean;
    othersWrite: boolean;
    othersExec: boolean;
}

export type PermissionsMode = 
    'ADD' |
    'REPLACE' | 
    'REMOVE'
