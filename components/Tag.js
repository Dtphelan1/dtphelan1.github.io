export default function Tag({ tag }) {
  return (
    <p
      id={tag}
      key={tag}
      className="inline px-2 py-1 mx-1 my-1 max-h-6 first-of-type:ml-0 rounded bg-primary-ultra-light border border-primary-ultra-light text-primary text-xs "
    >
      {tag}
    </p>
  );
}
