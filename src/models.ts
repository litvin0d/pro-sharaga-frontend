export interface IUser {
	"success": boolean,
	"name": string,
	"info": IUserInfo,
	"grades": IUserGrades[],
	"timetable": IUserTimetable[],
}

export interface IUserInfo {
	"speciality": string,
	"form": string,
	"group": string,
	"curator": string,
}

export interface IUserGrades {
	"Дисциплина": string,
	"Оценки": string,
	"Пропуск (занятий)": string,
}

interface IUserTimetable {
	"number": string,
	"time": string,
	"groups": ITimetableGroups[],
}

interface ITimetableGroups {
	"name": string,
	"teacher": string,
	"classroom": string,
	"status": string
}