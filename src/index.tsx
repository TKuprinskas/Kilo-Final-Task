import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'state/store';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'styles/theme';

let persistor = persistStore(store);

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0
}
body {
    overflow: hidden auto;
}
html {
    font-family: ${theme.fontFamily};
}
`;

export const wrapRootElement = ({ element }: any) => (
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {element}
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </StrictMode>
);
