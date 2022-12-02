import React from "react";
import { Grid } from "@material-ui/core";

import { PackageCard } from "./PackageCard";
import { InsurancePackage } from "../models/InsurancePackage";

export interface PackageCardListProps {
  packages: InsurancePackage[];
  selectedPackage?: InsurancePackage;
  onSelect: (pkg: InsurancePackage) => void;
}

export const PackageCardList = ({
  packages,
  selectedPackage,
  onSelect,
}: PackageCardListProps): React.ReactElement => {
  return (
    <Grid container spacing={5}>
      {packages.map((pkg) => (
        <Grid item container key={pkg.id} md={4}>
          <PackageCard
            pkg={pkg}
            isSelected={pkg === selectedPackage}
            onSelected={onSelect}
          />
        </Grid>
      ))}
    </Grid>
  );
};
