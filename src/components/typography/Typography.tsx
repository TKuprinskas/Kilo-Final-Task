import { Property } from 'csstype';
import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import {
    compose,
    fontWeight,
    lineHeight,
    textAlign,
    TypographyProps,
    textStyle,
    typography,
    fontFamily,
    FontFamilyProps,
} from 'styled-system';

import { Colors, Theme } from 'styles/theme';

import { applyTextType } from './TypographyHelpers';

export type TextType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'body18'
    | 'body16'
    | 'body14';

export enum TextTag {
    'h1' = 'h1',
    'h2' = 'h2',
    'h3' = 'h3',
    'h4' = 'h4',
    'h5' = 'h5',
    'body18' = 'p',
    'body16' = 'p',
    'body14' = 'p',
}

type AsAttributeType = string | React.ComponentType;

const typographyProperties = compose(
    textAlign,
    fontWeight,
    fontFamily,
    lineHeight,
    textStyle,
    typography
);

export interface TextProps
    extends TypographyProps<Theme>,
        FontFamilyProps<Theme> {
    color?: Colors;
    type?: TextType;
    textTransform?: Property.TextTransform;
    textDecoration?: Property.TextDecoration;
    onClick?: () => void;
    children: any;
    margin?: string;
    textAlign?: Property.TextAlign;
    padding?: string;
}

export const Typography: React.FC<TextProps> = ({
    type = 'body16',
    children,
    margin,
    ...props
}) => {
    const as = TextTag[type] as AsAttributeType;

    return (
        <Text as={as} type={type} {...props}>
            {children}
        </Text>
    );
};

const Text = styled.p<TextProps>`
    padding: ${({ padding }) => (padding ? padding : '0')};
    ${({ type, theme }) =>
        type && applyTextType(type as TextType, theme as Theme)};
    color: ${({ theme, color }) =>
        color ? theme.colors[color] : theme.colors.black};
    font-family: ${({ theme, fontFamily }) =>
        fontFamily ? fontFamily : theme.fontFamily};
    font-style: ${({ theme, fontStyle }) =>
        fontStyle ? fontStyle : theme.fontStyles};
    margin: ${({ margin }) => (margin ? margin : '0')};
    z-index: 1;

    && {
        ${typographyProperties}
    }
    text-transform: ${({ textTransform }) => textTransform || ''};
    text-decoration: ${({ textDecoration }) => textDecoration || ''};
    text-align: ${({ textAlign }) => textAlign || ''};
`;
