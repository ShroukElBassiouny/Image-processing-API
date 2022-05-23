import sharp, { Sharp } from 'sharp'
export const imageresizing = async (
  imagename: string | null,
  height: number | null,
  width: number | null
): Promise<Sharp> => {
  const buffer = `images/${imagename}.jpg`
  const image = await sharp(buffer)
  const imageafterreszing = await image.resize(width, height)
  return imageafterreszing
}
export default imageresizing
