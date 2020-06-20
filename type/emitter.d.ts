export function useEmitter(): {
    on(eventType: string, handler: Function): void;
    once(eventType: string, handler: Function): void;
    emit(eventType: string, data: any): void;
    off(eventType: string, handler: Function): void;
    isSubed(eventType: string, handler: Function): boolean;
}