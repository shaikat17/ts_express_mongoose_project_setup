import { Schema, model, connect } from "mongoose";
import { Student } from "./student.interface";


const studentSchema = new Schema<Student>({
    id: {type: String},
    name: {
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
    },
    gender:['male', 'female'],
    email: String,
    contactNo: String,
    emergacyContactNo: String
})