import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Haseeb Nazeer",
  email: "haseeb.nazeer@gmail.com",
  phone: "+923120408900",
  position: "Senior Mathematics Teacher",
  experience: "10 Years",
  experience_detail:
    "I am a dedicated mathematics teacher with a passion for making learning engaging and accessible for students of all levels. I have a deep understanding of advanced mathematical concepts and am skilled in utilizing technology and innovative teaching methodologies.",
  address: "Central Park Housing Scheme, Lahore, Punjab, Pakistan",
  education: [
    "MSc Mathematics - Quaid-e-Azam University, Islamabad",
    "BSc Mathematics - Punjab University, Lahore",
    "Certified Mathematics Instructor - International Teaching Academy",
    "Advanced Teaching Certification - National Institute of Education",
  ],
  skills: [
    { name: "Mathematics", percentage: 95 },
    { name: "Problem Solving", percentage: 90 },
    { name: "Teaching Strategies", percentage: 85 },
  ],
  achievements: [
    "Best Mathematics Teacher Award 2020",
    "Excellence in Teaching Mathematics 2021",
    "Top Educator Recognition 2022",
    "Innovative Teaching Award 2023",
  ],
  certificates: [
    "/images/certificates/1.jpg",
    "/images/certificates/2.jpg",
    "/images/certificates/3.jpg",
    "/images/certificates/4.jpg",
  ],
  image: "/images/teacher.png", // Use relative path
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    updateTeacher: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
