export default DtButtonsGroup;
type DtButtonsGroup = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const DtButtonsGroup: import("svelte").Component<{
    buttons: any;
    value?: any;
    width?: string;
    type?: string;
}, {}, "value">;
type $$ComponentProps = {
    buttons: any;
    value?: any;
    width?: string;
    type?: string;
};
