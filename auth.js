// auth.js
const USERS = [
  {
    username: "admin",
    password: "adminpassword",
    name: "System Administrator",
    role: "admin",
    editableCourses: [] // View-only access across all courses
  },
  {
    username: "sezadur",
    password: "sezadurpassword",
    name: "MD Sezadur Rahman",
    role: "teacher",
    editableCourses: ["c_eap"] // Leave [] for view-only/archived; add ["c_eap"] if editing is needed
  },
  {
    username: "ramisha",
    password: "ramishapassword",
    name: "Ramisha Tahsin",
    role: "teacher",
    editableCourses: ["c_dels", "c_rss"] // Leave [] for view-only/archived; add ["c_dels", "c_rss"] if editing is needed
  },
  {
    username: "halima",
    password: "halimapassword",
    name: "Halima Haque",
    role: "teacher",
    editableCourses: ["c_math"] // Leave [] for view-only/archived; add ["c_math"] if editing is needed
  }
];