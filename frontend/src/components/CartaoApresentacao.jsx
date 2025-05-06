function CartaoApresentacao({ image, nome, titulo, texto }) {
  return (
    <div className="flex flex-col text-zinc-500  p-8 ">
     
      <div className="bg-red-500 lg:flex xl:flex-col gap-4">

        <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
        
        <img
        className="md:w-[60%] lg:w-[40%] xl:w-[70%] object-contain object-top mb-8"
        src={image}
        alt={"imagem da pessoa"}
      />
      <div>
      <p className="text-2xl text-zinc-300 mb-4">{nome}</p>
      <p className="text-[18px] leading-8">{texto}</p>
      </div>
        
      </div>
    </div>
  );
}

export default CartaoApresentacao;
