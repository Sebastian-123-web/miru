import { Producto } from "../components/Producto"

export const Productos = () => {
  return (
    <div className="w-[1024px] m-auto pt-10">
        <div className="relative flex justify-center pb-10">
            <h1 className="inline pb-3 px-16 text-center text-xl border-[#362c2466] border-b border-l">PRODUCTOS EN VENTA</h1>
        </div>
        <div className="grid grid-cols-3 gap-6">
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
            <Producto />
        </div>
    </div>
  )
}
