import { ReactElement, createElement } from "react";
import { AvatarGroupContainerProps } from "typings/AvatarGroupProps";
import AvatarStack from "./components/AvatarStack";

export function preview({ class: className }: AvatarGroupContainerProps): ReactElement {
    return (
        <AvatarStack class={className} name={""} maxToShow={3} ></AvatarStack>
    );
}

export function getPreviewCss(): string {
    return require("./ui/AvatarGroup.css");
}
