import { createElement, ReactElement } from "react";

const photo = require("../previewImage.png");

const AvatarStackPreview = (): ReactElement => {
    return <img src={photo} style={{ width: "200px", height: "auto" }} alt="preview-img" />;
};

export default AvatarStackPreview;
