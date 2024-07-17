import { Category } from '@enums/category.enum'

export function getMediaUrl(imagePath: string, categoryStr: String = ''): string {
  const category = categoryStr as Category
  switch (category) {
    case Category.Games:
      return `${import.meta.env.VITE_GAMES_URL}${imagePath}`
    case Category.Research:
      return `${import.meta.env.VITE_RESEARCH_URL}${imagePath}`
    case Category.Software:
      return `${import.meta.env.VITE_SOFTWARE_URL}${imagePath}`
    default:
      return `${import.meta.env.VITE_MEDIA_URL}${imagePath}`
  }
}
