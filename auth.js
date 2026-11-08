// course tags
//  "c_eap",  "c_dels" , "c_rss", "c_mfus"
//  "c_itcs" , "c_dw" , "c_itpwp"
//  "c_chem" ,  "c_bio"
//  "c_fmus" , "c_phys"
//  "c_acc" , "c_eco" , "c_ib"


const USERS = [
  {
    username: "sezad",
    password: "123", // (Change this back to your real password)
    name: "MD Sezadur Rahman",
    role: "teacher",
    editableCourses: ["c_eap", "c_itcs", "c_dw", "c_itpwp"]
  },
  {
    username: "fahim",
    password: "123", // (Change this back to his real password)
    name: "Fahim Uz Zaman",
    role: "teacher",
    editableCourses: ["c_acc", "c_eco", "c_ib"]
  },
  {
    username: "ramisha",
    password: "123",
    name: "Ramisha Tahsin",
    role: "teacher",
    editableCourses: ["c_dels", "c_rss", "c_chem", "c_bio"]
  },
  {
    username: "halima",
    password: "123",
    name: "Halima Haque",
    role: "teacher",
    editableCourses: ["c_mfus", "c_fmus", "c_phys"]
  },
  // ----------------------------------------
  // THE NEW "VIEW ALL" CHECKER ACCOUNT
  // ----------------------------------------
  {
    username: "director", 
    password: "456",
    name: "Academic Checker",
    role: "admin", 
    editableCourses: ["c_eap",  "c_dels" , "c_rss", "c_mfus","c_itcs" , "c_dw" , "c_itpwp","c_chem" ,  "c_bio","c_fmus" , "c_phys","c_acc" , "c_eco" , "c_ib"]
  }
];


