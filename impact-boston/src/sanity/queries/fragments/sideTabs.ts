const LINK_TARGET_PROJECTION = `
  _type,
  type,
  url,
  internalPath,
  email,
  openInNewTab,
  file {
    asset->{
      url,
      originalFilename
    }
  }
`;

export const SIDE_TABS_CONTENT_PROJECTION = `
  content[]{
    ...,
    children[]{...},
    linkTarget {
      ${LINK_TARGET_PROJECTION}
    },
    titleLinkTarget {
      ${LINK_TARGET_PROJECTION}
    },
    markDefs[]{
      ...,
      linkTarget {
        ${LINK_TARGET_PROJECTION}
      }
    },
    items[]{
      ...,
      linkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      contactLinkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      titleLinkTarget {
        ${LINK_TARGET_PROJECTION}
      },
      items[],
      meta[]
    }
  }
`;
