export const homePageQuery = `
*[_type == "page" && slug.current == "home-page"][0]{
  title,

  sections[]{
    ...,

    _type == "hero" => {
      headline,
      subtext,
      backgroundImage{
        asset->{
          url
        }
      }
    },

    _type == "whyChooseUs" => {
      tagline,
      title,
      description,
      features[]{
        title,
        description,
        icon
      }
    },

_type == "aboutLocationSection" => {
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
},

_type == "ctaSection" => {
  icon,
  title,
  description,
  buttonText,
  buttonLink
},

_type == "servicesSection" => {
      tagline,
      title,
      subtitle,
      buttonText,
      buttonLink,

      services[]{
        title,
        description,
        icon,
        link
      },

      featuredService{
        title,
        description,
        buttonText,
        buttonLink,
        icon,
        image{
          asset->{
            url
          }
        }
      }
    }
  }
}
`;

export const aboutPageQuery = `
*[_type == "page" && slug.current == "about-page"][0]{
  title,

  sections[]{
    ...,

    _type == "hero" => {
      headline,
      subtext,
      backgroundImage{
        asset->{
          url
        }
      }
    },

   _type == "companyOverviewSection" => {
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
  },
  
  _type == "missionVisionSection" => {
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
},

  
  }
}
`;
