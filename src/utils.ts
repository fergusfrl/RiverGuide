import isEmpty from "lodash/isEmpty";
import isObject from "lodash/isObject";
import isArray from "lodash/isArray";

import { attributeDictionary } from "./constants";

export const applySearchValues = (searchStr: string) => (river: any) =>
  river.region.toLowerCase().includes(searchStr) ||
  river.river_name.toLowerCase().includes(searchStr) ||
  river.section_name.toLowerCase().includes(searchStr);

export const applyGradeFilter = (grade: any) => (river: any) => {
  if (isEmpty(grade.activeValues)) return true;

  const gradeOverall = river && river.key_facts_char.grade_overall;

  for (var value of grade.activeValues) {
    if (gradeOverall && gradeOverall.includes(value)) return true;
  }

  return false;
};

export const applyRunTimeFilter = (runTime: any) => (river: any) => {
  if (isEmpty(runTime.activeValues)) return true;

  const time = river && river.key_facts_num.time;

  for (var val of runTime.activeValues) {
    if (time && time.unit === "hours") {
      const matchesLowerBound =
        !isNaN(time.value[0]) && time.value[0] >= val.min;
      const matchesUpperBound =
        !isNaN(time.value[1]) && time.value[1] <= val.max;
      if (matchesLowerBound && matchesUpperBound) return true;
    }
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
