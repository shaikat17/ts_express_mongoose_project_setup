
export type Guardian = {
    fatherName: string;
    fatherContactNo: string;
    motherName: string;
    motherContactNo: string
}

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
}

export type Student = {
    id: string;
    name: UserName;
    gender: "male" | "female";
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup: "A+" | "B+" | "A-" | "B-" | "O+" | "O-" | "AB+" | "AB-";
    email: string;
    avatar?: string;
    presentAddress: string;
    guardian: Guardian;
    isActive: "active" | "inactive";
}

