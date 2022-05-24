import styled from 'styled-components/macro';
import { Box } from 'components';
import { theme } from 'styles/theme';

interface Props {
    isSelected?: boolean;
}

export const AnswerBox = styled(Box)<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.125rem solid ${theme.colors.white};
    border-radius: ${theme.radii.br8};
    background-color: ${theme.colors.blurry};
    color: ${theme.colors.white};
    margin: 0 1.25rem 0 0;
    padding: 0.625rem;
    text-align: center;
    cursor: pointer;
    font-size: ${theme.fontSizes.fs16};
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeights.fw600};
    &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.orange};
    }
    ${({ isSelected }) =>
        isSelected &&
        `
        background-color: ${theme.colors.white};
        color: ${theme.colors.orange};
    `}
`;
