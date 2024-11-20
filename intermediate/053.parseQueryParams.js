function parseQueryParams(url) {
  const { search } = new URL(url);
  const searchParams = new URLSearchParams(search);

  const result = new Map();
  searchParams.forEach((value, key) => {
    result.set(key, value);
  })

  return result;
}

console.log(parseQueryParams("https://www.example.com?order=asc&limit=10"))

export { parseQueryParams };
