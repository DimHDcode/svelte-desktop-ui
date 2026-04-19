export default DtSelect;
type DtSelect = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const DtSelect: import("svelte").Component<{
    options: any;
    value?: string;
}, {}, "value">;
type $$ComponentProps = {
    options: any;
    value?: string;
};
