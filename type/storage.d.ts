type useStorageOption = {
    keyBase?: string
    expires?: number
}
export function useStorage(storage: WindowLocalStorage | WindowSessionStorage, option?: useStorageOption): {
    get(key: string): any
    set(key: string, value: any, expi?: number): void
    remove(key: string): void
}