import {
  HERO,
  WHY_CHOOSE_US,
  ABOUT_LOCATION,
  CTA,
  SERVICES_SECTION,
  COMPANY_OVERVIEW,
  MISSION_VISION,
  COVERAGE,
  PROCESS_SECTION,
} from "./fragments";

export const homePageQuery = `
*[_type == "page" && slug.current == "home-page"][0]{
  title,

  sections[]{
    ...,
    ${HERO},
    ${WHY_CHOOSE_US},
    ${SERVICES_SECTION},
    ${ABOUT_LOCATION},
    ${CTA}
  }
}
`;

export const aboutPageQuery = `
*[_type == "page" && slug.current == "about-page"][0]{
  title,
  sections[]{
    ...,
    ${HERO},
    ${COMPANY_OVERVIEW},
    ${MISSION_VISION},
    ${COVERAGE}
  }
}
`;

export const servicePageQuery = `
*[_type == "page" && slug.current == "service-page"][0]{
  title,
  sections[]{
    ...,
    ${HERO},
    ${SERVICES_SECTION},
    ${PROCESS_SECTION}
  }
}
`;

export const investigationPageQuery = `
*[_type == "page" && slug.current == "investigation-page"][0]{
  title,
  sections[]{
    ...,
    ${HERO},
  }
}
`;
