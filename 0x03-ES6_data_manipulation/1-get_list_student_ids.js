export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArr = [];
  newArr = arr.map((item) => {
    item.id});

  return newArr;
}
