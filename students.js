const WINTER_2026_STUDENTS = [
  { id: "229103", name: "Easin Al Efaz" },
  { id: "229102", name: "Maher Ahmed Khan" },
  { id: "229101", name: "Mahjabeen Afreen Khan Neha" },
  { id: "229097", name: "Nazran Bin Nizam" },
  { id: "229099", name: "Rifaz Ahmed Taslim" },
  { id: "229098", name: "Roy Hasan" },
  { id: "221995", name: "Shylah Farida Christine Chowdhury" },
  { id: "221994", name: "Tashfia Haque" }
];

const APP_DATA = {
  cohorts: [
    {
      id: "cohort-winter-2026",
      name: "Winter 2026",
      courses: [
        {
          id: "c_eap",
          name: "English for Academic Purposes (EAP)",
          instructor: "MD Sezadur Rahman",
          students: WINTER_2026_STUDENTS
        },
        {
          id: "c_dels",
          name: "Developing English Language Skills (DELS)",
          instructor: "Ramisha Tahsin",
          students: WINTER_2026_STUDENTS
        },
        {
          id: "c_rss",
          name: "Research and Study Skills (RSS)",
          instructor: "Ramisha Tahsin",
          students: WINTER_2026_STUDENTS
        },
        {
          id: "c_math",
          name: "Mathematics For University Studies",
          instructor: "Halima Haque",
          students: WINTER_2026_STUDENTS
        }
      ]
    }
  ]
};
