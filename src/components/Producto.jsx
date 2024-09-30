
export const Producto = () => {
  return (
    <article className="overflow-hidden relative">
        <button className="absolute top-2 right-2 w-7">
            <img src="/heart-no-favorite.svg" alt="" className="w-7 h-7" />
        </button>
        <img src="/ropa1.jpeg" alt="" className="" />
        <div className="py-4 px-4 border-l border-r border-b border-[#362c243f] grid gap-3">
            <h4 className="text-sm tracking-normal">CHOMPA HILO MARRÓN BOLSILLOS</h4>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-center items-center">
                    <p className="text-sm mr-2">color:</p>
                    <span className=" bg-[#ac634d] w-5 h-5 rounded-full"></span>
                </div>
                <p className="font-bold">S/.49.50</p>
            </div>
            <button className="w-full bg-[#6c6d4e] text-white text-xs font-bold py-2">AGREGAR AL CARRITO</button>
        </div>
    </article>
  )
}
