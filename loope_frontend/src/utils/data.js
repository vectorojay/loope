export const userQuery = () => {
  const query = `*[_type=="user" && _id =='${userId}']`;
  return query;
};
