
interface Props {
    img:string
}

const BookImage = ({img}: Props) => {
  return (
    <div>
        <img src={img} alt=""/>
    </div>
  )
}

export default BookImage