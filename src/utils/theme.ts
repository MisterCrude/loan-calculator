import { ThemeType } from "grommet/themes";

const theme: ThemeType = {
  global: {
    font: {
      family: "Roboto",
    },
  },
  formField: { border: { color: "none" }, label: { margin: { horizontal: "none" } } },
  table: {
    body: { pad: { horizontal: "medium", vertical: "small" } },
  },
};

export default theme;
