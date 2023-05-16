// Import dependencies for generating PDF or Word documents
const pdf = require('html-pdf');
const docx = require('docx');

// Define the function for generating a report
async function generateReport(format, filter) {
    // get data based on the filter
    let students;
    if (filter === "Needly Adult") {
      students = await firebase.database().ref("students").orderByChild("Category").equalTo("Needly Adult").once("value").then(snapshot => snapshot.val());
    } else if (filter === "Needly Youth") {
      students = await firebase.database().ref("students").orderByChild("Category").equalTo("Needly Youth").once("value").then(snapshot => snapshot.val());
    } else if (filter === "Survivor") {
      students = await firebase.database().ref("students").orderByChild("Category").equalTo("Survivor").once("value").then(snapshot => snapshot.val());
    } else if (filter === "CICL") {
      students = await firebase.database().ref("students").orderByChild("Category").equalTo("CICL").once("value").then(snapshot => snapshot.val());
    } else if (filter === "Needly Senior Citizen") {
      students = await firebase.database().ref("students").orderByChild("Category").equalTo("Needly Senior Citizen").once("value").then(snapshot => snapshot.val());
    } else if (filter === "CEDC") {
      students = await firebase.database().ref("students").orderByChild("Category").equalTo("CEDC").once("value").then(snapshot => snapshot.val());
    } else if (filter === "C/PWD") {
      students = await firebase.database().ref("students").orderByChild("Category").equalTo("C/PWD").once("value").then(snapshot => snapshot.val());
    } else if (filter === "WEDC") {
      students = await firebase.database().ref("students").orderByChild("Category").equalTo("WEDC").once("value").then(snapshot => snapshot.val());
    } else {
      // if no filter selected, get all students
      students = await firebase.database().ref("students").once("value").then(snapshot => snapshot.val());
    }
  
    // create document object
    let doc;
    if (format === "pdf") {
      doc = new PDFDocument();
    } else if (format === "docx") {
      doc = new docx.Document();
    } else {
      throw new Error("Invalid format selected");
    }
  
    // add data to document
    if (format === "pdf") {
      doc.text(`List of Students (${filter || "All"})\n\n`);
      for (const student of Object.values(students)) {
        doc.text(`${student.Name}, ${student.Age}, ${student.Sex}, ${student.Category}, ${student["Educational Attainment"]}, ${student.Status}\n`);
      }
    } else if (format === "docx") {
      const table = doc.addTable({
        rows: [
          new docx.TableRow({
            children: [
              new docx.TableCell({ text: "Name" }),
              new docx.TableCell({ text: "Age" }),
              new docx.TableCell({ text: "Sex" }),
              new docx.TableCell({ text: "Category" }),
              new docx.TableCell({ text: "Educational Attainment" }),
              new docx.TableCell({ text: "Status" }),
            ],
            cantSplit: true,
            tableHeader: true,
          }),
          ...Object.values(students).map(student => new docx.TableRow({
            children: [
              new docx.TableCell({ text: student.Name }),
              new docx.TableCell({ text: student.Age.toString() }),
              new docx.TableCell({ text: student.Sex }),
              new docx.TableCell({ text: student.Category }),
              new docx.TableCell({ text: student["Educational Attainment"] }),
              new docx.TableCell({ text: student.Status.toString() }),
            ],
            cantSplit: true,
          })),
        ]
      });
      doc.addParagraph(`List of Students (${filter || "All"})`);
    }
  
    // generate output
    const buffer = await docx.Packer.toBuffer(doc) // for docx format
      .catch(() => doc.pipe(concat(function (data) { resolve(data); }))); // for pdf format
  
    return buffer;
}