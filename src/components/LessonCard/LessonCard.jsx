import "./LessonCard.css"
import data from "../../helper/data"

const LessonCard = () => {
    return data.map((item) => (
        <div className="lesson">
            <div>
                <img src={item.image} alt="" />
            </div>
            <div className="lesson-text">
                <p>Lesson Name: <span>{item.name}</span></p>
                <p>Lesson Hour: <span>{item.hour}</span></p>
            </div>
        </div>
    ))
}

export default LessonCard