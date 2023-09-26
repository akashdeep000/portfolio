export function split(tags = ''){
  return (Array.isArray(tags) ? tags : tags.split(',')).map(s => s.trim())
}


const flattenPageMap = (page, result = []) => {
  if (Array.isArray(page.children)) {
    for (const p of page.children) {
      flattenPageMap(p, result)
    }
  }
  result.push(page)
}

const flattenPageMaps = (pages, result = []) => {
  for (const v of pages) {
    flattenPageMap(v, result)
  }
}
export const getStaticTags = (pageMap) => {
  const result = []
  flattenPageMaps(pageMap, result)
  return Array.from(new Set(result.map(getTags).flat(1).filter(Boolean)))
}

export default function getTags(page) {
  if (!page.frontMatter) {
    return []
  }
  return split(page.frontMatter.tag)
}
