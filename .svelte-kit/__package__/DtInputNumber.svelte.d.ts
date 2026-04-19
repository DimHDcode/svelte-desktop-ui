export default DtInputNumber;
type DtInputNumber = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const DtInputNumber: import("svelte").Component<{
    placeholder?: string;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: any;
}, {}, "value">;
type $$ComponentProps = {
    placeholder?: string;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: any;
};
