export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  year: string;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  service?: string;
}
