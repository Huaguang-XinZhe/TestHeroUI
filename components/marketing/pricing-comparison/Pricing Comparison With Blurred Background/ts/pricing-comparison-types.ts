import type {TiersEnum} from "./pricing-types";


export type PricingFeatureItem = {
  title: string;
  tiers: {
    [key in TiersEnum]: boolean | string;
  };
  helpText?: string;
};


export type PricingFeatures = Array<{
  title: string;
  items: PricingFeatureItem[];
}>;

