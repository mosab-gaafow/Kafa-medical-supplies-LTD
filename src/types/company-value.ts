export type CompanyValueIcon =
  | "sourcing"
  | "delivery"
  | "quality"
  | "customer";

export type CompanyValue = {
  title: string;
  description: string;
  icon: CompanyValueIcon;
};