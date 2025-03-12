function calculatePagination(totalItems, page, limit) {
  const totalPages = Math.ceil(totalItems / limit);
  const offset = (page - 1) * limit;
  return { totalPages, offset };
}

module.exports = { calculatePagination };
