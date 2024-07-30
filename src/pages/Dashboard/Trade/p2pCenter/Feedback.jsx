
import { TiArrowUnsorted } from "react-icons/ti"
import FeedbackTable from "./FeedbackTable"

const Feedback = () => {
  return (
    <div>
      <div style={{
        background:"#35353E        "
      }} className="  flex flex-row items-center justify-between w-full pr-2 p-4 rounded-tr-2xl rounded-tl-2xl">
        <p className="g ">
          Coin
        </p>
        <p className="g">
          Type
        </p>
        <p className="g ">
          Transaction Id
        </p>
        <p className="g">
          User name
        </p>
        <p className="g w-14 flex flex-row items-center gap-2">
          Amount  <TiArrowUnsorted />
        </p>
        <p className="g w-14">
          Payment
        </p>
        <p className="g w-14 flex flex-row items-center gap-2">
          Date  <TiArrowUnsorted />
        </p>
        <p className="g w-14">
          Rating
        </p>
        <p className="g ">
          Comment
        </p>
      </div>
      <img src="https://res.cloudinary.com/pitz/image/upload/v1722241308/Frame_35547_ld9wta.png" alt="" />
        {/* <FeedbackTable/> */}
    </div>
  )
}

export default Feedback