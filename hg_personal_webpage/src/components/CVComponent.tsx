export interface ExperienceComponent {
    title: string,
    location: string,
    startDate: string,
    endDate?: string,
    description?: string
}

export interface ProjectComponent {
    name: string,
    startDate?: Date,
    endDate?: Date,
    description?: string
}

export interface EducationComponent {
    name: string,
    startDate: Date,
    endDate?: Date,
    gpa?: Number
}

export enum Category{
    Introduction,
    Education,
    Related_Experience,
    Projects
}

export interface RootState {
    experience: ExperienceComponent[],
    education: ProjectComponent[],
    project: EducationComponent[]
}
