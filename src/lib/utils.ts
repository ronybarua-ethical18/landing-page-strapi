import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getStrapiData(paths: string[]) {
  try {
    const baseUrl = 'http://localhost:1337'
    const fetchPromises = paths.map(path =>
      fetch(baseUrl + path).then(response => response.json()),
    )
    const results = await Promise.all(fetchPromises)
    return results
  } catch (error) {
    console.error(error)
    return []
  }
}
