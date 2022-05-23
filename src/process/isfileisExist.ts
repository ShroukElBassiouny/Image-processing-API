import fs from 'fs'
export const isfileisExist = async (filePath: string): Promise<boolean> => {
  const response = await fs.existsSync(filePath)
  return response
}
export default isfileisExist
