export interface CVData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
  };
  summary: string;
  education: {
    institute: string;
    degree: string;
    start?: string;
    end?: string;
    location?: string;
    gpa?: string;
  }[];
  experience: {
    role: string;
    company: string;
    start?: string;
    end?: string;
    location?: string;
    points: string[];
  }[];
  skills: string[];
  certifications?: string[];
}
