// course tags
//  "c_eap",  "c_dels" , "c_rss", "c_mfus"
//  "c_itcs" , "c_dw" , "c_itpwp"
//  "c_chem" ,  "c_bio"
//  "c_fmus" , "c_phys"
//  "c_acc" , "c_eco" , "c_ib"

const USERS = [
  {
    username: "admin",
    password: "",
    name: "Admin",
    role: "admin",
    editableCourses: []
  },
  {
    username: "systemadministrator",
    password: "admin123",
    name: "System Administrator",
    role: "admin",
    editableCourses: ["c_eap",  "c_dels" , "c_rss", "c_mfus","c_itcs" , "c_dw" , "c_itpwp","c_chem" ,  "c_bio","c_fmus" , "c_phys","c_acc" , "c_eco" , "c_ib"]
  },
  {
    username: "fahim",
    password: "fahim123",
    name: "Fahim Uz Zaman",
    role: "teacher",
    editableCourses: ["c_acc" , "c_eco" , "c_ib"]
  },
  {
    username: "sezadur",
    password: "sezad123",
    name: "MD Sezadur Rahman",
    role: "teacher",
    editableCourses: ["c_eap","c_itcs","c_dw","c_itpwp"]
  },
  {
    username: "ramisha",
    password: "ramisha123",
    name: "Ramisha Tahsin",
    role: "teacher",
    editableCourses: ["c_dels", "c_rss" ,"c_chem" , "c_bio"]
  },
  {
    username: "halima",
    password: "halima123",
    name: "Halima Haque",
    role: "teacher",
    editableCourses: ["c_mfus", "c_fmus" , "c_phys"]
  }
];
