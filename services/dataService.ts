import { CaseStudy, ProjectCategory } from "../types";
import { INITIAL_CASE_STUDIES } from "../constants";

const STORAGE_KEY = "novexis_case_studies";
const INITIALIZED_KEY = "novexis_case_studies_initialized";

export const getCaseStudies = (): CaseStudy[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  const isInitialized = localStorage.getItem(INITIALIZED_KEY);

  // First time initialization on a new device/browser
  if (data === null && !isInitialized) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
    localStorage.setItem(INITIALIZED_KEY, "true");
    return INITIAL_CASE_STUDIES;
  }

  if (!data) {
    return [];
  }

  try {
    const parsed: CaseStudy[] = JSON.parse(data);
    if (!Array.isArray(parsed)) {
      return [];
    }

    // Sanitize every record so stack, categories, images, and videos are guaranteed valid arrays
    return parsed
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
        published: c.published !== false, // default true unless explicitly set false
      }));
  } catch (e) {
    return [];
  }
};

export const getPublishedCaseStudies = (): CaseStudy[] => {
  const all = getCaseStudies();
  return all.filter((cs) => cs.published === true);
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  if (!slug) return undefined;
  const studies = getCaseStudies();
  return studies.find((cs) => cs.slug === slug || cs.id === slug);
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
  localStorage.setItem(INITIALIZED_KEY, "true");
};

export const deleteCaseStudy = (id: string) => {
  const studies = getCaseStudies();
  const filtered = studies.filter((cs) => cs.id !== id && cs.slug !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  localStorage.setItem(INITIALIZED_KEY, "true");
};

export const resetToDefaults = (): CaseStudy[] => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
  localStorage.setItem(INITIALIZED_KEY, "true");
  return INITIAL_CASE_STUDIES;
};
