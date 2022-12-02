import { useState } from "react";
import {
  AppBar,
  ThemeProvider,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";

import { theme } from "./theme";
import { packages } from "./data/packages";
import { InsurancePackage } from "./models/InsurancePackage";
import { PackageCardList } from "./components/PackageCardList";
import { PackageBuyForm } from "./components/PackageBuyForm";

export const App: React.FunctionComponent = () => {
  const [selectedPackage, setSelectedPackage] = useState<
    InsurancePackage | undefined
  >();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography>Technical Assignment</Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Typography component="h1" variant="h2" gutterBottom align="center">
            Insurance Packages
          </Typography>

          <PackageCardList
            packages={packages}
            selectedPackage={selectedPackage}
            onSelect={setSelectedPackage}
          />

          {selectedPackage && <PackageBuyForm packageId={selectedPackage.id} />}
        </Container>
      </div>
    </ThemeProvider>
  );
};
