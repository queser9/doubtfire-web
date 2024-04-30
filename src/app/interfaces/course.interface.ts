export interface Course {
  id: string;
  name: string;
  description: string;
  units: Unit[];
  creditPoints: number;
  year: number;
  semester: number;
}

export interface Unit {
  id: string;
  name: string;
  description: string;
  courseId: string;
  year: number;
  semester: number;
  core: boolean;
}
