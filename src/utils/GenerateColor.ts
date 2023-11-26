const GenerateColor = (name: string): string => {
    let hash = 0;
    let i;

    for (i = 0; i < name.length; i++) {
        // eslint-disable-next-line no-bitwise
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i++) {
        // eslint-disable-next-line no-bitwise
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
};

export default GenerateColor;
