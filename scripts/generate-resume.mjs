import PDFDocument from 'pdfkit'
import fs from 'node:fs'

const OUT = 'public/yasmin-haytham-resume.pdf'

const doc = new PDFDocument({ size: 'A4', margins: { top: 48, bottom: 48, left: 54, right: 54 } })
doc.pipe(fs.createWriteStream(OUT))

const PAGE_LEFT = doc.page.margins.left
const PAGE_RIGHT = doc.page.width - doc.page.margins.right
const CONTENT_WIDTH = PAGE_RIGHT - PAGE_LEFT

function heading(text) {
  doc.moveDown(0.6)
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#111111').text(text.toUpperCase(), PAGE_LEFT)
  const y = doc.y + 2
  doc.moveTo(PAGE_LEFT, y).lineTo(PAGE_RIGHT, y).lineWidth(1).strokeColor('#111111').stroke()
  doc.moveDown(0.4)
}

// Entry with a left-aligned title and a right-aligned date on the same line
function entry(title, date) {
  const y = doc.y
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor('#111111')
  doc.text(title, PAGE_LEFT, y, { width: CONTENT_WIDTH - 110, continued: false })
  const titleBottom = doc.y
  if (date) {
    doc.font('Helvetica-Oblique').fontSize(9.5).fillColor('#444444')
    doc.text(date, PAGE_RIGHT - 110, y, { width: 110, align: 'right' })
  }
  doc.y = Math.max(titleBottom, doc.y)
}

function bullets(items) {
  doc.font('Helvetica').fontSize(9.5).fillColor('#333333')
  for (const it of items) {
    doc.text('•  ' + it, PAGE_LEFT + 8, doc.y, { width: CONTENT_WIDTH - 8 })
    doc.moveDown(0.1)
  }
  doc.moveDown(0.25)
}

// Header
doc.font('Helvetica-Bold').fontSize(20).fillColor('#111111').text('Yasmin Haytham Eid', { align: 'left' })
doc.moveDown(0.25)
doc.font('Helvetica').fontSize(9.5).fillColor('#444444')
doc.text('Alexandria, Egypt  |  yasmina.haytham@gmail.com  |  +20 109 470 7353', { align: 'left' })
doc.fillColor('#1a56db').text('www.linkedin.com/in/yasmin-haytham-b10738360', { align: 'left', link: 'https://www.linkedin.com/in/yasmin-haytham-b10738360', underline: true })
doc.fillColor('#444444')

// Education
heading('Education')
entry('Alexandria University — SSP (Specialized Scientific Programs), EG', '2023 - Present')
bullets([
  "Pursuing a bachelor's degree in computer and communications engineering",
  'GPA: 3.89',
])
entry('British Language School, EG', '2007 - 2023')
bullets(['Graduated with Excellent grades'])

// Experience
heading('Experience')
entry('Internship — NTI (National Telecommunication Institute)', 'Aug 2026 - Sep 2026')
bullets([
  'Learned ES6, Node.js, TypeScript, and MongoDB through hands-on back-end training',
  'Built the PhysioProgress digital rehabilitation platform as the internship capstone project',
])
entry('Alexandria Electricity Distribution Company (AEDC), EG — Intern', 'Aug 2025')
bullets([
  'Attended theoretical sessions about Cybersecurity, Database Systems and Python Backend (Django)',
  'Participated in hands-on sessions about Database Systems and Python Backend (Django)',
])

// Projects & Extracurricular
heading('Projects & Extracurricular')
entry('PhysioProgress — Digital Physical Rehabilitation Platform', '2026')
bullets([
  'Built a platform connecting therapists with patients to track sessions, pain levels, and treatment protocol adherence in real time',
  'Implemented patient session logs (add/edit/delete), an SVG pain trend chart, and an adherence-rate view',
  'Developed a therapist hub with patient selection, date-range filtering, high pain alerts (above 6), and weekly/monthly adherence rates',
])
entry('Hotel Management System', 'Dec 2024')
bullets([
  'Developed a console-based hotel management system using C programming',
  'Implemented functionalities for reservation, check-in, check-out, cancellation, and customer record management',
  'Generated daily reports and maintained customer details through file handling operations',
  'Utilized text (.txt) and binary (.bin) files for persistent data storage and retrieval',
])
entry('SkillForge | Java Swing Desktop Application', 'Nov 2025')
bullets([
  'Built a Java Swing desktop application for course management, quizzes, and certification tracking',
  'Developed interactive GUI components and application logic using object-oriented programming',
  'Utilized CSV files for data storage and management',
])
entry('Sudoku Game | Java Swing Desktop Application', 'Nov 2025')
bullets([
  'Built a Java Swing desktop Sudoku application using the MVC architecture and software design patterns',
  'Implemented validated puzzle generation with multiple difficulty levels (Easy, Medium, Hard)',
  'Developed board verification, incorrect-cell highlighting, undo, and auto-solve functionalities',
  'Applied object-oriented programming principles to create a modular and maintainable system',
])
entry('Student Volunteer | Faculty of Engineering, Alexandria University Student Union', 'Sep 2024')
bullets([
  'Assisted in registering new students during enrollment periods',
  "Responded to student inquiries regarding the university's academic structure and procedures",
  'Supported administrative activities to ensure smooth onboarding and student services',
])
entry('Student Volunteer | British Language School', '2019 - 2021')
bullets([
  'Contributed to the organization of school events and ceremonies',
  'Managed guest seating arrangements and event coordination support',
  'Participated in on-stage presentations during official school events',
])

// Skills
heading('Skills')
doc.font('Helvetica').fontSize(9.5).fillColor('#333333')
doc.text('Programming languages: C, Java, Python', PAGE_LEFT)
doc.moveDown(0.15)
doc.text('Web Technologies: HTML, CSS, JavaScript, Node.js (Beginner), Angular (Beginner), MongoDB', PAGE_LEFT)
doc.moveDown(0.15)
doc.text('Languages: Arabic (Native), English (Advanced), French (Intermediate)', PAGE_LEFT)

doc.end()
console.log('Resume written to', OUT)
