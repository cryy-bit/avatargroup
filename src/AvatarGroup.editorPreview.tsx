import { ReactElement } from "react";
import AvatarStackPreview from "./components/AvatarStackPreview";

export function preview(): ReactElement {
    return <AvatarStackPreview />;
}

export function getPreviewCss(): string {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("./ui/AvatarGroup.css");
}
