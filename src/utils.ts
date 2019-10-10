import isEmpty from "lodash/isEmpty";
import size from "lodash/size";
import keys from "lodash/keys";
import uniq from "lodash/uniq";
import isObject from "lodash/isObject";
import isArray from "lodash/isArray";

import { attributeDictionary } from "./constants";

export const applySearchValues = (searchStr: string) => (river: any) =>
  river.region.toLowerCase().includes(searchStr) ||
  river.river_name.toLowerCase().includes(searchStr) ||
  river.section_name.toLowerCase().includes(searchStr);

export const applyFilterValues = (filters: any) => (river: any) => {
  // this code works but is admittedly unreadable
  if (size(filters) === 0) return true;
  if (size(filters) > size(river.key_facts_char)) return false;

  return !isEmpty(
    keys(river.key_facts_char)
      .map((attr: any) => ({
        name: attr,
        value: river.key_facts_char[attr]
      }))
      .map(
        (fil: any) => filters[fil.name] && filters[fil.name].includes(fil.value)
      )
      .filter((val: boolean) => val)
  );
};

export const reduceFilterValues = () => (acc: any, curr: any) => {
  keys(curr).forEach((key: string) => {
    if (key in acc) {
      acc[key] = uniq([...acc[key], curr[key]]);
    } else {
      acc[key] = [curr[key]];
    }
  });
  console.log(acc);
  return acc;
};

export const mapAttributes = () => (value: any, key: string) => ({
  label: attributeDictionary[key],
  value
});

export const mapAttributeValues = () => (item: any) => {
  if (isObject(item.value)) {
    const val = isArray(item.value.value)
      ? `${item.value.value[0]} - ${item.value.value[1]}`
      : item.value.value;
    return {
      ...item,
      value: `${val} ${item.value.unit}`
    };
  }
  return item;
};
