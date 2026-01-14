export interface CVData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
  };
  summary: string;
  education: {
    institute: string;
    degree: string;
    year: string;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    points: string[];
  }[];
  skills: string[];
  template: "classic" | "modern";
  atsMode: boolean;
}
