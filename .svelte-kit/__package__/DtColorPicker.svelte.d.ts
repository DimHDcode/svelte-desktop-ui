export default DtColorPicker;
type DtColorPicker = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const DtColorPicker: import("svelte").Component<{
    value?: string;
}, {}, "value">;
type $$ComponentProps = {
    value?: string;
};
