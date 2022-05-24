import styled from 'styled-components/macro';
import { FlexWrapper } from 'components';
import { theme } from 'styles/theme';
import { tablet } from 'styles/breakpoints';

interface Props {
    isEnabled?: boolean;
    isActive?: boolean;
    display?: string;
    width?: string;
    margin?: string;
    padding?: string;
}

export const QuizStatus = styled(FlexWrapper)`
    width: 100%;
    overflow: hidden;
    display: ${({ display }) => display || 'table'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    padding: 0 2.5rem;
    color: ${theme.colors.white};
    // background-color: #c6c6c6;
    background-color: ${theme.colors.blurry}
    font-size: ${theme.fontSizes.fs16};
    text-decoration: none;
    text-align: center;
    border-bottom: 0.0625rem solid ${theme.colors.orange};
    @media ${tablet} {
        display: flex;
        justify-content: center;
        min-height: 35vh;
    }
`;

export const StatusBox = styled(FlexWrapper)`
    display: ${({ display }) => display || 'table-row'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    height: 3.125rem;
    width: 100%;
    @media ${tablet} {
        display: flex;
        flex-direction: column;
        margin: 0.625rem 0;
    }
`;

export const Type = styled.div<Props>`
    display: ${({ display }) => display || 'table-cell'};
    width: ${({ width }) => width || '12.5%'};
    margin: ${({ margin }) => margin || '0'};
    padding: ${({ padding }) => padding || '0'};
    vertical-align: middle;
    height: 3.125rem;
    transform: skew(-60deg);

    ${({ isActive }) =>
        isActive &&
        `
        background-color: ${theme.colors.orange};
    `}

    @media ${tablet} {
        width: 100%;
        padding: 0.3125rem 0;
    }
`;

export const Text = styled.div<Props>`
    transform: skew(60deg);
    font-size: ${theme.fontSizes.fs16};
    font-weight: ${theme.fontWeights.fw600};
    font-family: ${theme.fontFamily};
`;
