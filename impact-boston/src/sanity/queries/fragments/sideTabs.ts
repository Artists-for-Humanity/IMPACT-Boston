export const SIDE_TABS_CONTENT_PROJECTION = `
  content[]{
    ...,
    children[]{...},
    markDefs[]{...},
    items[]{
      ...,
      items[],
      meta[]
    }
  }
`;
