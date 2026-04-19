export default DtButton;
type DtButton = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const DtButton: import("svelte").Component<{
    children?: Function;
    type?: string;
    outline?: boolean;
    icon?: any;
    iconSize?: number;
    width?: string;
} & Record<string, any>, {}, "">;
type $$ComponentProps = {
    children?: Function;
    type?: string;
    outline?: boolean;
    icon?: any;
    iconSize?: number;
    width?: string;
} & Record<string, any>;
