// course tags
//  "c_eap",  "c_dels" , "c_rss", "c_mfus"
//  "c_itcs" , "c_dw" , "c_itpwp"
//  "c_chem" ,  "c_bio"
//  "c_fmus" , "c_phys"
//  "c_acc" , "c_eco" , "c_ib"


const USERS = [
  {
    username: "admin",
    password: "", // (Change this back to your real password)
    name: "Admin",
    role: "admin",
    editableCourses: []
  },
    {
    username: "sezad",
    password: "sezad123", // (Change this back to your real password)
    name: "MD Sezadur Rahman",
    role: "teacher",
    editableCourses: ["c_eap", "c_itcs", "c_dw", "c_itpwp"]
  },
  {
    username: "fahim",
    password: "fahim123", // (Change this back to his real password)
    name: "Fahim Uz Zaman",
    role: "teacher",
    editableCourses: ["c_acc", "c_eco", "c_ib"]
  },
  {
    username: "ramisha",
    password: "ramisha123",
    name: "Ramisha Tahsin",
    role: "teacher",
    editableCourses: ["c_dels", "c_rss", "c_chem", "c_bio"]
  },
  {
    username: "halima",
    password: "halima123",
    name: "Halima Haque",
    role: "teacher",
    editableCourses: ["c_mfus", "c_fmus", "c_phys"]
  },
  // ----------------------------------------
  // THE NEW "VIEW ALL" CHECKER ACCOUNT
  // ----------------------------------------
  {
    username: "systemadmin", 
    password: "admin123",
    name: "System Administrator",
    role: "teacher", 
    editableCourses: ["c_eap",  "c_dels" , "c_rss", "c_mfus","c_itcs" , "c_dw" , "c_itpwp","c_chem" ,  "c_bio","c_fmus" , "c_phys","c_acc" , "c_eco" , "c_ib"]
  }
];


