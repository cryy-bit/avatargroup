/**
 * This file was generated from AvatarGroup.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue, ListExpressionValue } from "mendix";

export type WidthUnitEnum = "Auto" | "Pixels" | "Percentage";

export type HeightUnitEnum = "Auto" | "Pixels" | "Percentage";

export type PopOverAvatarHeightUnitEnum = "Auto" | "Pixels" | "Percentage";

export type PopOverAvatarWidthUnitEnum = "Auto" | "Pixels" | "Percentage";

export interface AvatarGroupContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    UserName: ListAttributeValue<string>;
    imgSrc?: ListExpressionValue<string>;
    maxToShow: number;
    widthUnit: WidthUnitEnum;
    avatarWidth: number;
    heightUnit: HeightUnitEnum;
    avatarHeight: number;
    showPopOver: boolean;
    popOverAvatarHeightUnit: PopOverAvatarHeightUnitEnum;
    popOverAvatarHeight: number;
    popOverAvatarWidthUnit: PopOverAvatarWidthUnitEnum;
    popOverAvatarWidth: number;
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
    widthUnit: WidthUnitEnum;
    avatarWidth: number | null;
    heightUnit: HeightUnitEnum;
    avatarHeight: number | null;
    showPopOver: boolean;
    popOverAvatarHeightUnit: PopOverAvatarHeightUnitEnum;
    popOverAvatarHeight: number | null;
    popOverAvatarWidthUnit: PopOverAvatarWidthUnitEnum;
    popOverAvatarWidth: number | null;
}
