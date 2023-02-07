import Details from '../components/details'
import style from '../components/details.module.css'
export default function details() {
    return(
        <>
        <div className="">
        <img src="https://res.cloudinary.com/dfwmknxqz/image/upload/v1675619927/Left_awn1id.png" alt="" className={style.left} />
        </div>

        <div className={style.maincontent}>
            < Details />
        </div>

        <div className="">
        <img src="https://res.cloudinary.com/dfwmknxqz/image/upload/v1675619927/Left_awn1id.png" alt="" className={style.rightimage} />
        </div>
        </>
    )
}