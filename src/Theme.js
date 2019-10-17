import { createMuiTheme } from "@material-ui/core";
import { indigo, pink, red } from "@material-ui/core/colors";
import { palette } from "@material-ui/system";

export const theme = createMuiTheme({
    
    palette: {
        primary: {
            light: indigo[300],
            main: indigo[500],
            dark: indigo[700],
          },
          secondary: {
            light: pink[300],
            main: pink[500],
            dark: pink[700],
          },
          error: {
            light: red[300],
            main: red[500],
            dark: red[700],
          },
    },
});
