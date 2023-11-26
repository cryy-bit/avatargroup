import GenerateColor from "./GenerateColor";

const stringAvatar = (name: string, extraStyling?: object): object => {
    return {
        sx: {
            bgcolor: GenerateColor(name),
            ...extraStyling
        },
        children:
            name.split(" ").length > 1
                ? `${name.split(" ")[0][0]}` + `${name.split(" ")[1][0]}`
                : `${name.split(" ")[0][0]}`
    };
};

export default stringAvatar;
