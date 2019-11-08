import size from "lodash/size";
import isObject from "lodash/isObject";
import isArray from "lodash/isArray";

import { attributeDictionary } from "./constants";

export const applySearchValues = (searchStr: string) => (river: any) =>
  river.region.toLowerCase().includes(searchStr) ||
  river.river_name.toLowerCase().includes(searchStr) ||
  river.section_name.toLowerCase().includes(searchStr);

export const applyFilterValues = (filters: any) => (river: any) => {
  if (size(filters.grade.activeValues) === 0) return true;

  const grade = river && river.key_facts_char.grade_overall;

  for (var index in filters.grade.activeValues) {
    if (grade && grade.includes(filters.grade.activeValues[index])) return true;
  }

  return false;
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

export const fahrenheitToCelcius = (fahrenheit: number) =>
  ((fahrenheit - 32) * (5 / 9)).toFixed(0);
