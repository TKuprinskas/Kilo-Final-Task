export type Colors = keyof typeof colors;

const colors = {
    transparent: 'transparent',
    blurry: 'rgba(0, 0, 0, 0.5)',
    black: '#39353C',
    brightBacground: '#F3F0EB',
    blue: '#2C71F0',
    green: '#129C4A',
    mintGreen: '#00878A',
    orange: '#EF843B',
    purple: '#9767BD',
    red: '#EF543B',
    yellow: '#F8CF46',
    white: '#FFFFFF',
    blurOrange: '#e39663',
};

const borders = {
    none: 'none',
    primary: '1px solid #E5E5E5',
    secondary: '1px solid #E7FAFE',
    white: '1px solid #ffffff',
    black: '1px solid #000000',
    orange: `1px solid ${colors.orange}`,
};

export const theme = {
    colors,
    borders,
    radii: {
        default: '0.1875rem',
        br8: '0.5rem',
        br16: '1rem',
        br24: '1.5rem',
        br30: '1.875rem',
        br60: '3.75rem',
        br50img: '50%',
    },
    fontFamily: 'Roboto',
    fontStyles: {
        normal: 'normal',
        italic: 'italic',
        oblique: 'oblique',
    },
    fontSizes: {
        fs14: '0.875rem',
        fs16: '1rem',
        fs18: '1.125rem',
        fs24: '1.5rem',
        fs32: '2rem',
        fs40: '2.5rem',
        fs48: '3rem',
        fs64: '4rem',
    },
    fontWeights: {
        fw100: 100,
        fw200: 200,
        fw300: 300,
        fw400: 400,
        fw500: 500,
        fw600: 600,
        fw700: 700,
    },
    lineHeights: {
        lh19: '1.1875rem',
        lh24: '1.5rem',
        lh32: '2rem',
        lh48: '3rem',
    },
    zIndices: {
        base: 0,
        upperElement: 1,
        modal: 10,
        loader: 11,
    },
    breakpoints: ['20rem', '48rem', '80rem'] as unknown as Breakpoints,
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512] as unknown as typeof Space,
    typography: {
        h1: {
            fontSize: '3rem',
            lineHeight: '4rem',
            fontSizeMobile: '1.6875rem',
            lineHeightMobile: '2.25rem',
            fontWeight: 900,
        },
        h2: {
            fontSize: '2rem',
            lineHeight: '3rem',
            fontSizeMobile: '1.5rem',
            lineHeightMobile: '2rem',
            fontWeight: 900,
        },
        h3: {
            fontSize: '1.6875rem',
            lineHeight: '2.5rem',
            fontSizeMobile: '1.25rem',
            lineHeightMobile: '1.75rem',
            fontWeight: 900,
        },
        h4: {
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            fontSizeMobile: '1.125rem',
            lineHeightMobile: '1.5rem',
            fontWeight: 700,
        },
        h5: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontSizeMobile: '1rem',
            lineHeightMobile: '1.3125rem',
            fontWeight: 700,
        },
        body18: {
            fontSize: '1.125rem',
            lineHeight: '2rem',
            fontSizeMobile: '1rem',
            lineHeightMobile: '1.5rem',
            fontWeight: 400,
        },
        body16: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontSizeMobile: '0.875rem',
            lineHeightMobile: '1.125rem',
            fontWeight: 400,
        },
        body14: {
            fontSize: '0.875rem',
            lineHeight: '1.375rem',
            fontSizeMobile: '0.75rem',
            lineHeightMobile: '1.25rem',
            fontWeight: 400,
        },
    },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.mobile = Breakpoints[0];
Breakpoints.tablet = Breakpoints[1];
Breakpoints._ = Breakpoints[2];

type Breakpoints<T = string> = {
    _: T;
    mobile: T;
    tablet: T;
};

const Space = theme.space as any;
