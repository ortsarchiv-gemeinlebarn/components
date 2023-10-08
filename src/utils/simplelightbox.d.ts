declare module "simplelightbox" {
    interface SimpleLightbox {
        new(element: string | Array<Element>, options?: any): SimpleLightbox;
        destroy(): void;
    }
    const SimpleLightbox: SimpleLightbox;
    export = SimpleLightbox;
}
