import { ReactElement, createElement } from "react";
import { AvatarGroupContainerProps } from "../typings/AvatarGroupProps";

import "./ui/AvatarGroup.css";
import AvatarStack from "./components/AvatarStack";

export function AvatarGroup(props: AvatarGroupContainerProps): ReactElement {
    return <AvatarStack {...props} />;
}
