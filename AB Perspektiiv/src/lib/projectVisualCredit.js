export function getVisualCredit(project) {
  if (!project) {
    return null;
  }

  const fotograaf = project.fotograaf?.trim();
  if (fotograaf) {
    return { label: "Fotograaf", value: fotograaf };
  }

  const visuaal = project.visuaal?.trim() || project.projekt?.trim();
  if (visuaal) {
    return { label: "Visuaal", value: visuaal };
  }

  return null;
}

export function getVisualCreditType(project) {
  if (project?.fotograaf?.trim()) {
    return "photo";
  }

  if (project?.visuaal?.trim() || project?.projekt?.trim()) {
    return "render";
  }

  return "none";
}

export function getVisualCreditValue(project) {
  if (project?.fotograaf?.trim()) {
    return project.fotograaf.trim();
  }

  if (project?.visuaal?.trim()) {
    return project.visuaal.trim();
  }

  if (project?.projekt?.trim()) {
    return project.projekt.trim();
  }

  return "";
}

export function buildVisualCredits(type, value) {
  const trimmed = value?.trim() || "";

  if (type === "photo" && trimmed) {
    return { fotograaf: trimmed, visuaal: "" };
  }

  if (type === "render" && trimmed) {
    return { fotograaf: "", visuaal: trimmed };
  }

  return { fotograaf: "", visuaal: "" };
}

export function applyVisualCreditInput(project, type, value) {
  return {
    ...project,
    ...buildVisualCredits(type, value),
  };
}

export function normalizeVisualCredits(project) {
  const type = getVisualCreditType(project);
  const value = getVisualCreditValue(project);
  return applyVisualCreditInput(project, type, value);
}
