import { Schema, model, connect } from "mongoose";


export type Guardian = {
    fatherName: string;
    fatherContactNo: string;
    motherName: string;
    motherContactNo: string
}

export type Student = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: "male" | "female";
    contactNo: string;
    emergacyContactNo: string;
    bloodGroup: "A+" | "B+" | "A-" | "B-" | "O+" | "O-" | "AB+" | "AB-";
    email: string;
    avatar?: string;
    presentAddress: string;
    guardian: Guardian;
}