const images = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/images/*.webp', { eager: true, import: 'default' }) as Record<
      string,
      string
    >,
  ).map(([path, src]) => [
    path
      .split('/')
      .pop()!
      .replace(/\.[^.]+$/, ''),
    src,
  ]),
) as Record<string, string>;

export default images;
