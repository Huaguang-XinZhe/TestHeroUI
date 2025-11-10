import {sortBy} from "lodash";


import {getPriorityValue} from "./component-files";


export const sortSearchCategoryItems = (items) => {
  return sortBy(items, [
    // Sort by 'isNew' values first
    (item) => item?.component?.attributes?.isNew,
    // Sort by 'featured' property: true values first
    (item) => item?.component?.attributes?.featured,
    // Sort by 'sortPriority'
    (item) => getPriorityValue(item?.component.attributes?.sortPriority),
    // Sort by 'groupOrder' in ascending order (lower values first)
    (item) => item?.component?.attributes?.groupOrder || 9999,
    // Then sort by 'name'
    "name",
  ]);
};

