export default DtTable;
type DtTable = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<{
        columns: Column[];
        rows: any[];
        selectedRow: any;
        caption: string;
        scroll: "" | "nearest" | "start" | "center" | "end";
    }>): void;
};
declare const DtTable: import("svelte").Component<{
    columns: {
        id: number;
        title: string;
        name: string;
        width?: string;
        minWidth?: string;
    }[];
    rows: any[];
    selectedRow: any;
    caption: string;
    scroll: "nearest" | "start" | "center" | "end" | "";
}, {}, "selectedRow">;
type Column = {
    id: number;
    title: string;
    name: string;
    width?: string;
    minWidth?: string;
};
