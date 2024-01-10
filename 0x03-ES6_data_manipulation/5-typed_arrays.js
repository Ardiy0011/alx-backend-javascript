export default function createInt8TypedArray(
  length,
  position,
  value,
) {
  if (position >= length) {
    throw new Error('Position outside range');
  } 
  const buffer = new ArrayBuffer(length);
  const newview = new DataView(buffer, 0, Int8Array.BYTES_PER_ELEMENT * length);

  newview.setInt8(position, value);
  return newview;
}
