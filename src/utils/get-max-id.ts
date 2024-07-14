const getMaxId = (data: Array<{ id: number }>): number => {
  const ids = data.map(
    (item) => item.id
  );
  return Math.max(...ids);
};

export default getMaxId;
