import { CaseStudy, ProjectCategory } from "../types";
import { INITIAL_CASE_STUDIES } from "../constants";

const STORAGE_KEY = "novexis_case_studies";

export const getCaseStudies = (): CaseStudy[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
    return INITIAL_CASE_STUDIES;
  }
  try {
    const parsed: CaseStudy[] = JSON.parse(data);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
      return INITIAL_CASE_STUDIES;
    }

    // Sanitize every record so stack, categories, images, and videos are guaranteed arrays
    const validParsed: CaseStudy[] = parsed
      .filter((c) => c && typeof c === "object")
      .map((c) => ({
        ...c,
        category: c.category || ProjectCategory.AI_AUTOMATION,
        categories: Array.isArray(c.categories) && c.categories.length > 0 ? c.categories : (c.category ? [c.category] : [ProjectCategory.AI_AUTOMATION]),
        stack: Array.isArray(c.stack) ? c.stack : [],
        imageUrl: c.imageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475",
        images: Array.isArray(c.images) ? c.images : (c.imageUrl ? [c.imageUrl] : []),
        videoUrl: c.videoUrl || "",
        videos: Array.isArray(c.videos) ? c.videos : (c.videoUrl ? [c.videoUrl] : []),
      }));

    const existingSlugs = new Set(validParsed.map((c) => c.slug || c.id).filter(Boolean));
    const merged = [...validParsed];

    for (const initCs of INITIAL_CASE_STUDIES) {
      if (!existingSlugs.has(initCs.slug) && !existingSlugs.has(initCs.id)) {
        merged.push(initCs);
      }
    }
    return merged;
  } catch (e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
    return INITIAL_CASE_STUDIES;
  }
};

export const getPublishedCaseStudies = (): CaseStudy[] => {
  const all = getCaseStudies();
  const published = all.filter((cs) => cs.published !== false);
  if (published.length > 0) return published;
  return INITIAL_CASE_STUDIES;
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  if (!slug) return INITIAL_CASE_STUDIES[0];
  const studies = getCaseStudies();
  const found = studies.find((cs) => cs.slug === slug || cs.id === slug);
  if (found) return found;
  return INITIAL_CASE_STUDIES.find((cs) => cs.slug === slug || cs.id === slug);
};

export const saveCaseStudy = (caseStudy: CaseStudy) => {
  const studies = getCaseStudies();
  const index = studies.findIndex((cs) => cs.id === caseStudy.id || cs.slug === caseStudy.slug);

  const timestamp = new Date().toISOString();

  if (index > -1) {
    studies[index] = {
      ...caseStudy,
      updatedAt: timestamp,
    };
  } else {
    studies.push({
      ...caseStudy,
      createdAt: timestamp,
    });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(studies));
};

export const deleteCaseStudy = (id: string) => {
  const studies = getCaseStudies();
  const filtered = studies.filter((cs) => cs.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
