export const generateId = () => {
  if (typeof window !== 'undefined') return window.location.href;
};
