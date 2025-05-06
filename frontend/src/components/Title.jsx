function Title({ titulo, subtitulo }) {
  return (
    <div className="flex-1 flex-col pb-12">
      <h2 className="text-zinc-600 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-thin">{titulo}</h2>
      <p>{subtitulo}</p>
    </div>
  );
}

export default Title;
