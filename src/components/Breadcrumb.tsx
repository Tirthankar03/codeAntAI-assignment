
const Breadcrumb = ({access}: {access: string}) => {
  return (
    <p className="border-[1.2px] border-[#B2DDFF] text-[.8rem] rounded-2xl px-[10px] bg-[#EFF8FF] text-[#175CD3]">
    {access}
  </p>
  )
}

export default Breadcrumb