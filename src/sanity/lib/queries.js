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
