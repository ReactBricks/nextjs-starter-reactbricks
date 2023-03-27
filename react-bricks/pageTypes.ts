import { types } from "react-bricks/frontend"

const pageTypes: types.IPageType[] = [
  {
    name: "page",
    pluralName: "pages",
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
  {
    name: "layout",
    pluralName: "layout",
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
    isEntity: true,
  },
]

export default pageTypes
