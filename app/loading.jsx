import Image from "next/image"
const Loading = () => {
  return (
    <section className=" flex h-full items-center justify-center">
        <Image src={'/spinner.gif'} width={80} height={80} className="rounded-full"/>
    </section>
  )
}
export default Loading