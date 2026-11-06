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
  { id: "autumn-2026", name: "L3 Autumn 2026" },
  { id: "winter-2026", name: "L3 Winter 2026" }
];

// ==========================================
// 2. MASTER STUDENT DIRECTORY
// ==========================================
const STUDENT_DIRECTORY = [
  // ----------------------------------------
  // AUTUMN 2026
  // ----------------------------------------
  { id: "226462", name: "Adiyat Mustafiz Zarif", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226463", name: "Arpon Joseph Rozario", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226464", name: "Loreta Almida", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226465", name: "Manha Akbar Nidhi", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226467", name: "MD Rakib Chowdhury", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226468", name: "Nabila Nasir", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226469", name: "Nashwa Shabbir", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226470", name: "Pareeza Nawar", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226471", name: "Sanjana Islam Saba", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "226473", name: "Tanzib Osman", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "222040", name: "Mashrura Zarin Tasnim", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  { id: "222042", name: "Ridni Anha", cohort: "autumn-2026", enrolled: ["c_eap", "c_dels", "c_rss", "c_mfus"] },
  
  // Shahriyar taking the IT Pathway
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
// 3. DYNAMIC DATA BUILDER (WITH SAFETY RAILS)
// ==========================================
const APP_DATA = {
  cohorts: COHORTS.map(cohort => {
    const cohortStudents = STUDENT_DIRECTORY.filter(s => s.cohort === cohort.id);
    
    // Safely extract unique course IDs
    let allCourseIds = [];
    cohortStudents.forEach(s => {
      if (s.enrolled && Array.isArray(s.enrolled)) {
        allCourseIds = allCourseIds.concat(s.enrolled);
      }
    });
    const uniqueCourseIds = [...new Set(allCourseIds)];

    const dynamicCourses = uniqueCourseIds.map(courseId => {
      // SAFETY CHECK: Ensure courses.js is loaded and the course actually exists
      if (typeof COURSE_CATALOG === 'undefined') {
        console.error("🚨 CRITICAL ERROR: courses.js failed to load before students.js!");
        return null;
      }
      
      const courseInfo = COURSE_CATALOG[courseId];
      if (!courseInfo) {
        console.error(`🚨 ERROR: Course tag '${courseId}' is in a student's profile, but missing from courses.js!`);
        return null;
      }

      const courseRoster = cohortStudents.filter(s => s.enrolled && s.enrolled.includes(courseId));
      
      return {
        id: courseId, // Keeping the exact ID preserves your existing database records and auth.js permissions!
        name: courseInfo.name,
        instructor: courseInfo.instructor,
        students: courseRoster.map(s => ({ id: s.id, name: s.name }))
      };
    }).filter(course => course !== null); // Drop broken courses so the app doesn't crash

    return {
      id: cohort.id,
      name: cohort.name,
      courses: dynamicCourses
    };
  })
};
