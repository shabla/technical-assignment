import { InsurancePackage } from "../models/InsurancePackage";

// This data could come from an endpoint and be fetched at runtime
export const packages: InsurancePackage[] = [
  {
    id: 1,
    insurerName: "Proteco Insurance",
    description:
      "Our most affordable package. Your personal belongings will be covered up to 15k$. This is perfect if you own a few belongings.",
    monthlyPrice: 12.5,
  },
  {
    id: 2,
    insurerName: "Umbrella Insurance",
    description:
      "Our most popular package. Your personal belongings will be covered up to 30k$. This package also includes a free water sensor to detect a water leak in your home.",
    monthlyPrice: 35.73,
  },
  {
    id: 3,
    insurerName: "Thor Insurance",
    description:
      "Nothing but the best. Your personal belongings will be covered up to 100k$. It even includes a protection against an alien invasion.",
    monthlyPrice: 79.3,
  },
];
