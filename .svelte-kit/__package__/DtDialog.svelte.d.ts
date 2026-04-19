export default DtDialog;
type DtDialog = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const DtDialog: import("svelte").Component<{
    message?: string;
    buttons?: any[];
    buttonWidth?: string;
    width?: string;
    value?: any;
}, {}, "value">;
type $$ComponentProps = {
    message?: string;
    buttons?: any[];
    buttonWidth?: string;
    width?: string;
    value?: any;
};
