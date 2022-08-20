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
	const [active, setActive] = useState(1);

	const prevActiveSlide = (lessons: object[]) => {
		if (active === 0) {
			setActive(lessons.length - 1);
		} else {
			setActive(active - 1);
		}
	};

	const nextActiveSlide = (lessons: object[]) => {
		if (active > lessons.length - 2) {
			setActive(0);
		} else {
			setActive(active + 1);
		}
	};

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
			<button className={s.btn} onClick={() => swipe?.slidePrev() && prevActiveSlide(userData.grades)}>
				<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/>
					<g data-name="Layer 7" id="Layer_7">
						<path d="M51.39,63.79l-40-31a1,1,0,0,1,0-1.58l40-31,1.23,1.58L13.63,32l39,30.21Z"/>
					</g>
				</svg>
			</button>
			<Swiper
				onBeforeInit={(swiper) => setSwipe(swiper)}
				slidesPerView={3}
				slidesPerGroup={1}
				spaceBetween={16}
				loop={true}
				loopFillGroupWithBlank={true}
				className={s.swiper}
			>
				{userData.grades.map((obj: IUserGrades, i: number) => (
					<SwiperSlide
						key={i}
						className={`${s.slide} ${active === i ? s.active : ""}`}
						onClick={() => setActive(i)}
					>
						<h3>{obj["Дисциплина"]}</h3>
						<div>
							<p>Средний балл</p>
							<h3>{
								isNaN(+averageGrades(obj["Оценки"])) ? "Неизвестно" : averageGrades(obj["Оценки"])
							}</h3>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<button className={s.btn} onClick={() => swipe?.slideNext() && nextActiveSlide(userData.grades)}>
				<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/>
					<g data-name="Layer 6" id="Layer_6">
						<path d="M12.61,63.79l-1.22-1.58L50.37,32l-39-30.21L12.61.21l40,31a1,1,0,0,1,0,1.58Z"/>
					</g>
				</svg>
			</button>
		</div>
	);
};

export default Lessons;
