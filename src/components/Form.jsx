
export default function Form({children, formName}) {
  return (
    <form className="registration bg-gray-100/50 border-2 px-20 py-5 md:w-5/12 rounded-3xl text-[#222222] shadow-2xl">
            <h2 className="text-2xl font-bold py-5 text-center">{formName}</h2>
            {children}
    </form>
  )
}
