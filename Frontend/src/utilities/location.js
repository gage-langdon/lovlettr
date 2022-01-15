exports.redirect = url => {
  if (typeof window !== 'undefined') window.location.href = url;
};
