export  interface WorkEd {
  title: String,
  period: String,
  description: String,
  status: Boolean,
  work: Boolean,
  sertificate: String[] | false
}

export  interface Project {
    title: String,
    image: String[],
    description: String,
    features: String[],
    technologies: String[],
    link: String,
    page: String,
}