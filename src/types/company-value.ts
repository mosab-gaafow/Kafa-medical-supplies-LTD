export type CompanyValueIcon =
  | "certified"
  | "delivery"
  | "quality"
  | "customer";

export type CompanyValue = {
  title: string;
  description: string;
  icon: CompanyValueIcon;
};