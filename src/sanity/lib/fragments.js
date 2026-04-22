export const HERO = `
_type == "hero" => {
  _type,
  headline,
  subtext,
  backgroundImage{
    asset->{ url }
  }
}
`;

export const CTA = `
_type == "ctaSection" => {
  _type,
  icon,
  title,
  description,
  buttonText,
  buttonLink
}
`;

export const SERVICES_SECTION = `
_type == "servicesSection" => {
  _type,
  tagline,
  title,
  subtitle,
  buttonText,
  buttonLink,

  services[]{
    title,
    description,
    icon,
    service->{
      slug
    }
  },

  featuredService{
    title,
    description,
    buttonText,
    buttonLink,
    icon,
    image{
      asset->{ url }
    }
  }
}
`;

export const WHY_CHOOSE_US = `
_type == "whyChooseUs" => {
  _type,
  tagline,
  title,
  description,
  features[]{
    title,
    description,
    icon
  }
}
`;

export const ABOUT_LOCATION = `
_type == "aboutLocationSection" => {
  _type,
  tagline,
  title,
  description,
  stats[]{
    value,
    label
  },
  buttonText,
  buttonLink,
  locationsTitle,
  locations[]{
    name,
    icon
  }
}
`;

export const COMPANY_OVERVIEW = `
_type == "companyOverviewSection" => {
  _type,
  tagline,
  title,
  paragraphs,
  highlights[]{
    icon,
    title,
    subtitle
  },
  image{
    asset->{ url }
  },
  badge{
    icon,
    value,
    label
  }
}
`;

export const MISSION_VISION = `
_type == "missionVisionSection" => {
  _type,
  mission{
    icon,
    title,
    text
  },
  vision{
    icon,
    title,
    text
  }
}
`;

export const COVERAGE = `
_type == "complianceCoverageSection" => {
  _type,
  compliance{
    icon,
    title,
    description,
    badge{
      icon,
      title,
      subtitle
    }
  },
  coverage{
    title,
    icon,
    description,
    locations[]{
      icon,
      label
    }
  }
}
`;
