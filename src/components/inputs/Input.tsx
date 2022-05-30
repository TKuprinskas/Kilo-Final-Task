import React from 'react';
import styled from 'styled-components/macro';
import { Theme, Colors } from 'styles/theme';
import { Box, Typography } from 'components';

export type InputType =
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'tel'
    | 'url';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: InputType;
    placeholder?: string;
    error?: string;
    min?: number;
    max?: number;
    onChange?: () => void;
    margin?: string | number;
    border?: string;
    padding?: string;
    color?: Colors;
}

export const InputComponent: React.FC<InputProps> = ({
    label,
    type,
    placeholder,
    error,
    min,
    max,
    onChange,
    margin,
    border,
    padding,
    color,
    ...props
}) => (
    <>
        {label && (
            <label htmlFor={props.id}>
                <Typography type="body16" color="black" fontFamily="base">
                    {label}
                </Typography>
            </label>
        )}
        <StyledInput
            as="input"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            color={color}
            border={border}
            margin={margin}
            min={min}
            max={max}
            {...props}
        />
    </>
);

const StyledInput = styled(Box)<InputProps>`
    padding: ${({ padding }) => (padding ? padding : '1rem')};
    width: ${({ width }) => (width ? width : '100%')};
`;
