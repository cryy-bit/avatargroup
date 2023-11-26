import { ReactElement, createElement } from "react";
import AvatarStackPreview from "./components/AvatarStackPreview";

export function preview(): ReactElement {
    return <AvatarStackPreview />;
}

export function getPreviewCss(): string {
    return require("./ui/AvatarGroup.css");
}
