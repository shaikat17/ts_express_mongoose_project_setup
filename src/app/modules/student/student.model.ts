import { Schema, model, connect } from "mongoose";
import { Guardian, Student, UserName } from "./student.interface";

const UserName = new Schema<UserName>(
    {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }
    }
)

const Guardian = new Schema<Guardian>(
    {
        fatherName: {type: String},
        fatherContactNo: {type: String},
        motherName: {type: String},
        motherContactNo: {type: String}
    }
)

const studentSchema = new Schema<Student>({
    id: {type: String},
    name: UserName,
    gender:['male', 'female'],
    email: {type: String},
    contactNo: {type: String},
    emergencyContactNo: {type: String},
    bloodGroup: ["A+", "B+", "A-", "B-", "O+", "O-", "AB+", "AB-"],
    avatar: {type: String},
    presentAddress: {type: String},
    guardian: Guardian
})

const Student = model<Student>("Student", studentSchema)