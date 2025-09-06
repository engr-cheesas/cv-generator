function mergePlaceholder(formData, placeholderData) {
  // If array
  if (Array.isArray(formData)) {
    if (formData.length === 0) return placeholderData;

    return formData.map((item, i) =>
      mergePlaceholder(item, placeholderData[i] || placeholderData[0])
    );
  }

  // If object
  if (typeof formData === "object" && formData !== null) {
    const merged = {};
    for (const key of Object.keys(placeholderData)) {
      const formVal = formData[key];
      const placeholderVal = placeholderData[key];

      if (typeof formVal === "string") {
        merged[key] = formVal.trim() || placeholderVal;
      } else {
        merged[key] = mergePlaceholder(formVal, placeholderVal);
      }
    }
    return merged;
  }

  // String or primitive fallback
  if (typeof formData === "string") {
    return formData.trim() || placeholderData;
  }

  return formData ?? placeholderData;
}

export default mergePlaceholder