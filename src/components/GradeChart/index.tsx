import { useSelector } from "react-redux";
import {
	BarChart,
	Bar,
	YAxis,
	CartesianGrid,
	ResponsiveContainer
} from "recharts";

import { RootState } from "../../redux/store";
import { IUser, IUserGrades } from "../../models";
import s from "./GradeChart.module.scss";

interface gradeChartProps {
	userData: IUser;
}

const GradeChart = ({ userData }: gradeChartProps) => {
	const lessonId = useSelector((state: RootState) => state.lessonReducer.lessonId);

	const getGrades = (arr: IUserGrades[]) => {
		const strGrades: string = arr[lessonId]["Оценки"].split("  ")[0];
		const arrGrades: string[] = strGrades.split("");
		let numGrades: number[] = [];
		for (let i in arrGrades) {
			if (parseInt(arrGrades[i])) {
				numGrades.push(parseInt(arrGrades[i]));
			}
		}

		let data = [];
		for (let i in numGrades) {
			data.push({ grade: numGrades[i] });
		}

		return data;
	};

	return (
		<div className={s.root}>
			<h3>Успеваемость</h3>
			<ResponsiveContainer className={s.chart}>
				<BarChart
					data={getGrades(userData.grades)}
				>
					<CartesianGrid vertical={false} stroke="#36254f" strokeWidth={1}/>
					<YAxis tickLine={false} axisLine={false} ticks={[1, 2, 3, 4, 5]} domain={[2, 5]} width={13}/>
					<Bar dataKey="grade" fill="#7642d0" radius={15}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default GradeChart;
