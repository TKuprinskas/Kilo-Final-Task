import { css } from 'styled-components/macro';
import { TextType } from './Typography';
import { Theme } from 'styles/theme';
import { useQuery } from 'styles/breakpoints';

export const applyTextType = (type: TextType, theme: Theme) => {
    const { isTablet } = useQuery();
    switch (type) {
        case 'h1':
            return css`
                font-size: ${theme.typography.h1.fontSize};
                line-height: ${theme.typography.h1.lineHeight};
                font-weight: ${theme.typography.h1.fontWeight};

                ${isTablet
                    ? css`
                          font-size: ${theme.typography.h1.fontSizeMobile};
                          line-height: ${theme.typography.h1.lineHeightMobile};
                      `
                    : ''}
            `;
        case 'h2':
            return css`
                font-size: ${theme.typography.h2.fontSize};
                line-height: ${theme.typography.h2.lineHeight};
                font-weight: ${theme.typography.h2.fontWeight};
                ${isTablet
                    ? css`
                          font-size: ${theme.typography.h2.fontSizeMobile};
                          line-height: ${theme.typography.h2.lineHeightMobile};
                      `
                    : ''}
            `;
        case 'h3':
            return css`
                font-size: ${theme.typography.h3.fontSize};
                line-height: ${theme.typography.h3.lineHeight};
                font-weight: ${theme.typography.h3.fontWeight};

                ${isTablet
                    ? css`
                          font-size: ${theme.typography.h3.fontSizeMobile};
                          line-height: ${theme.typography.h3.lineHeightMobile};
                      `
                    : ''}
            `;

        case 'h4':
            return css`
                font-size: ${theme.typography.h4.fontSize};
                line-height: ${theme.typography.h4.lineHeight};
                font-weight: ${theme.typography.h4.fontWeight};
                ${isTablet
                    ? css`
                          font-size: ${theme.typography.h4.fontSizeMobile};
                          line-height: ${theme.typography.h4.lineHeightMobile};
                      `
                    : ''}
            `;
        case 'h5':
            return css`
                font-size: ${theme.typography.h5.fontSize};
                line-height: ${theme.typography.h5.lineHeight};
                font-weight: ${theme.typography.h5.fontWeight};
                ${isTablet
                    ? css`
                          font-size: ${theme.typography.h5.fontSizeMobile};
                          line-height: ${theme.typography.h5.lineHeightMobile};
                      `
                    : ''}
            `;
        case 'body18':
            return css`
                font-size: ${theme.typography.body18.fontSize};
                line-height: ${theme.typography.body18.lineHeight};
                font-weight: ${theme.typography.body18.fontWeight};
            `;
        case 'body16':
            return css`
                font-size: ${theme.typography.body16.fontSize};
                line-height: ${theme.typography.body16.lineHeight};
                font-weight: ${theme.typography.body16.fontWeight};
            `;
        case 'body14':
            return css`
                font-size: ${theme.typography.body14.fontSize};
                line-height: ${theme.typography.body14.lineHeight};
                font-weight: ${theme.typography.body14.fontWeight};
            `;
    }
};
