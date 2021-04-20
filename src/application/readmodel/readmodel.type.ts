export interface GenericReadModel<T> {
    findById(): Promise<T>;
    update(): Promise<void>;
    delete(): Promise<void>
}
