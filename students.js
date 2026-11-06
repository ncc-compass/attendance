// course tags
//  "c_eap"
//  "c_dels" 
//  "c_rss"
//  "c_mfus"
//  "c_itcs"
//  "c_dw"
//  "c_itpwp"
//  "c_chem"
//  "c_bio"
//  "c_fmus"
//  "c_phys"
//  "c_acc"
//  "c_eco"
//  "c_ib"


// ==========================================
// 1. COHORT MAPPINGS
// ==========================================
const COHORTS = [
  { id: "autumn-2026", name: "Autumn 2026 Cohort" },
  { id: "winter-2026", name: "Winter 2026 Cohort" }
];

// ==========================================
// 2. MASTER STUDENT DIRECTORY
// ==========================================
const STUDENT_DIRECTORY = [
  // ----------------------------------------
  // AUTUMN 2026
  // ----------------------------------------
  { id: "226462", name: "Adiyat Mustafiz Zarif", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_phys", "c_fmus"] },
  { id: "226463", name: "Arpon Joseph Rozario", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_chem", "c_bio"] },
  { id: "226464", name: "Loreta Almida", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_chem", "c_bio"] },
  { id: "226465", name: "Manha Akbar Nidhi", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_acc" , "c_ib"] },
  { id: "226467", name: "MD Rakib Chowdhury", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_acc" , "c_ib"] },
  { id: "226468", name: "Nabila Nasir", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_acc" , "c_ib"] },
  { id: "226469", name: "Nashwa Shabbir", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_acc" , "c_ib"] },
  { id: "226470", name: "Pareeza Nawar", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_acc", "c_eco"] },
  { id: "226471", name: "Sanjana Islam Saba", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_chem", "c_bio"] },
  { id: "226473", name: "Tanzib Osman", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus", "c_acc" , "c_ib"] },
  { id: "226472", name: "Shahriyar Ahmed Plabon", cohort: "autumn-2026", enrolled: ["c_eap", "c_itcs", "c_dw", "c_itpwp"] },

  // ----------------------------------------
  // WINTER 2026
  // ----------------------------------------
  { id: "229097", name: "Nazran Bin Nizam", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "229098", name: "Roy Hasan", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "229099", name: "Rifaz Ahmed Taslim", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "229100", name: "Joya Sanyal", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "229101", name: "Mahjabeen Afreen Khan Neha", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "229102", name: "Maher Ahmed Khan", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "229103", name: "Easin Al Efaz", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "221994", name: "Tashfia Haque", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "221995", name: "Shylah Chowdhury", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "PP_Mashir", name: "Mashir Hasan", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "PP_Shaiara", name: "Shaiara Binta Sultana", cohort: "winter-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] }
];

// ==========================================
// 3. DYNAMIC DATA BUILDER 
// (Translates the new architecture so index.html doesn't break)
// ==========================================
const APP_DATA = {
  cohorts: COHORTS.map(cohort => {
    // 1. Find all students in this cohort
    const cohortStudents = STUDENT_DIRECTORY.filter(s => s.cohort === cohort.id);
    
    // 2. Figure out every unique course being taken by students in this cohort
    const uniqueCourseIds = [...new Set(cohortStudents.flatMap(s => s.enrolled))];

    // 3. Build the course objects dynamically
    const dynamicCourses = uniqueCourseIds.map(courseId => {
      const courseInfo = COURSE_CATALOG[courseId];
      // Filter the roster to only students enrolled in this specific course
      const courseRoster = cohortStudents.filter(s => s.enrolled.includes(courseId));
      
      return {
        id: courseId + "_" + cohort.id, // e.g., "c_eap_winter-2026"
        originalCourseId: courseId,
        name: courseInfo.name,
        instructor: courseInfo.instructor,
        students: courseRoster.map(s => ({ id: s.id, name: s.name }))
      };
    });

    return {
      id: cohort.id,
      name: cohort.name,
      courses: dynamicCourses
    };
  })
};
