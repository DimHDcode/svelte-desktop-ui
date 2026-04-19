export default DtModalWindow;
type DtModalWindow = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const DtModalWindow: import("svelte").Component<{
    title?: string;
    buttons?: any;
    buttonWidth?: string;
    width?: string;
    height?: string;
    value?: any;
    children?: Function;
}, {}, "value">;
type $$ComponentProps = {
    title?: string;
    buttons?: any;
    buttonWidth?: string;
    width?: string;
    height?: string;
    value?: any;
    children?: Function;
};
