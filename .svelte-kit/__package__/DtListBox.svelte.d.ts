export default DtListBox;
type DtListBox = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const DtListBox: import("svelte").Component<{
    items: any;
    selectedItem?: any;
}, {}, "selectedItem">;
type $$ComponentProps = {
    items: any;
    selectedItem?: any;
};
