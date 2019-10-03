import isEmpty from "lodash/isEmpty";
import size from "lodash/size";
import keys from "lodash/keys";

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
