import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Haseeb Nazeer",
  email: "info@mathedemic.com",
  phone: "+923120408900",
  position: "English Grammar & Comprehension",
  address: "Central Park Housing Scheme, Lahore, Punjab, Pakistan",
  experience: "10 Years",
  experience_detail:
    "Does English feel like a challenge for your child? Concepts like Comprehension, Grammar, and Creative Writing don`t have to be overwhelming. Hi, my name is Haseeb Nazeer, and I have eight years of dedicated tutoring experience where I turned complex topics into lessons students can connect with and enjoy.\n\n What makes me an effective tutor isn`t just my knowledge but the way I listen to and connect with students. I have worked with students from the UK, USA, Canada, Australia, Gulf and many other countries. I have constantly adapted my teaching style that meet their specific needs and cultural contexts. I believe learning happens best when students feel understood and supported. For me teaching is a two-way street: while I guide students, I also learn from them.",
  education: [
    `MA English Language Teaching and Linguistics (Sep, 2014${'-'}Jun, 2016) from University of Punjab Lahore Pakistan `
  ],
  skills: [
    { name: "English Comprehension", percentage: 100 },
    { name: "Essay Writing", percentage: 90 },
    { name: "Writing Skills and Creative Writing", percentage: 95 },
    {name: "Grammar, Vocabulary", percentage: 95},
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
