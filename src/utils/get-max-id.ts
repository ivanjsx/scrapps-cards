const getMaxId = (data: Array<{ id: number }>): number => {
  if (data.length === 0) {
    return 0;
  };
  const ids = data.map(
    (item) => item.id
  );
  return Math.max(...ids);
};

export default getMaxId;
