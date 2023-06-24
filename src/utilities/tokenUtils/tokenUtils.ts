export const isExpired = (token: string) => {
  if (!token) return true;
  const { exp = 0 } =
    token && JSON.parse(Buffer.from(token.split('.')[1], 'base64')?.toString());
  return Date.now() / 1000 > exp;
};

