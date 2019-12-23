import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { IntlProvider } from "react-intl";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import locale from "./i18n/";
import AuthHoc from "./auth/AuthHoc";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(",")
  },
  spacing: 16 //TODO You should check it
});

const routing = (
  <MuiThemeProvider theme={theme}>
    <Provider store={store} key="provider">
      <IntlProvider
        locale={locale.currentLocale}
        messages={locale.localeWording}
      >
        <AuthHoc />
      </IntlProvider>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
