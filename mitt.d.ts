declare module 'mitt' {
    type EventHandler = (...args: any[]) => void;

    interface Emitter {
        on(type: string, handler: EventHandler): void;
        off(type: string, handler: EventHandler): void;
        emit(type: string, ...args: any[]): void;
    }

    function mitt(all?: Record<string, EventHandler>): Emitter;

    export default mitt;
}
