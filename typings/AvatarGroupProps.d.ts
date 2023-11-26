/**
 * This file was generated from AvatarGroup.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue, ListExpressionValue } from "mendix";

export interface AvatarGroupContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource?: ListValue;
    UserName?: ListAttributeValue<string>;
    imgSrc?: ListExpressionValue<string>;
    maxToShow: number;
    showPopOver: boolean;
}

export interface AvatarGroupPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    datasource: {} | { caption: string } | { type: string } | null;
    UserName: string;
    imgSrc: string;
    maxToShow: number | null;
    showPopOver: boolean;
}
