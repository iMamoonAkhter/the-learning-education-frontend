import { createSlice } from "@reduxjs/toolkit";
import cer1 from "../../assets/images/certificates/1.jpg"
import cer2 from "../../assets/images/certificates/2.jpg"
import cer3 from "../../assets/images/certificates/3.jpg"
import cer4 from "../../assets/images/certificates/4.jpg"
import teacher_img from "../../assets/images/teacher.png"
const initialState = {
  name: "Haseeb Nazeer",
  email: "haseeb.nazeer@gmail.com",
  phone: "+92 345 1267728",
  position: "Senior Mathematics Teacher",
  experience: "10 Years",
  experience_detail: "I am a dedicated mathematics teacher with a passion for making learning engaging and accessible for students of all levels. I have a deep understanding of advanced mathematical concepts and is skilled in utilizing technology and innovative teaching methodologies.",
  address: "Central Park Housing Scheme, Lahore, Punjab, Pakistan",
  education: [
    "MSc Mathematics - Quaid-e-Azam University, Islamabad",
    "BSc Mathematics - Punjab University, Lahore",
    "Certified Mathematics Instructor - International Teaching Academy",
    "Advanced Teaching Certification - National Institute of Education"
  ],
  skills: [{name: "Mathematics", percentage: 95},
    {name: "Problem Solving",percentage: 90},
    {name: "Teaching Strategies", percentage: 85}
  ],
  achievements: [
    "Best Mathematics Teacher Award 2020",
    "Excellence in Teaching Mathematics 2021",
    "Top Educator Recognition 2022",
    "Innovative Teaching Award 2023"
  ],
  certificates: [
    cer1, cer2, cer3, cer4
  ],
  image: teacher_img

};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    updateTeacher: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
