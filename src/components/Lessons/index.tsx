import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import s from "./Lessons.module.scss";
import { IUser, IUserGrades } from "../../models";

interface lessonsProps {
	userData: IUser;
}

const Lessons = ({ userData }: lessonsProps) => {
	const [swipe, setSwipe] = useState<any>();

	const averageGrades = (rawGrades: string) => {
		let strGrades: string = rawGrades.split("  ")[0];
		let arrGrades: string[] = strGrades.split("");
		let numGrades: number[] = [];
		for (let i in arrGrades) {
			if (parseInt(arrGrades[i])) {
				numGrades.push(parseInt(arrGrades[i]));
			}
		}

		const sum: number = numGrades.reduce((a, b) => a + b, 0);
		const length: number = numGrades.length;

		return (sum / length).toFixed(2);
	};

	return (
		<div className={s.root}>
			<button className={s.btn} onClick={() => swipe?.slidePrev()}>{"<"}</button>
			<Swiper
				onBeforeInit={(swiper) => setSwipe(swiper)}
				slidesPerView={3}
				slidesPerGroup={1}
				spaceBetween={16}
				loop={true}
				loopFillGroupWithBlank={true}
				className={s.swiper}
			>
				{
					userData.grades.map((obj: IUserGrades, i: number) => (
						<SwiperSlide className={s.slide} key={i}>
							<h3>{obj["Дисциплина"]}</h3>
							<div>
								<p>Средний балл</p>
								<h3>{
									isNaN(+averageGrades(obj["Оценки"])) ? "Неизвестно" : averageGrades(obj["Оценки"])
								}</h3>
							</div>
						</SwiperSlide>
					))
				}
			</Swiper>
			<button className={s.btn} onClick={() => swipe?.slideNext()}>{">"}</button>
		</div>
	);
};

export default Lessons;
