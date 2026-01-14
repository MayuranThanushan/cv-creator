import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import type { CVData } from "../types/cv";

export const exportDOCX = async (data: CVData) => {
  const children: Paragraph[] = [];

  // Header
  children.push(
    new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun(data.personal.name)] })
  );
  if (data.personal.title) {
    children.push(new Paragraph({ children: [new TextRun({ text: data.personal.title, bold: true })] }));
  }

  // Summary
  if (data.summary) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Summary")] }));
    children.push(new Paragraph({ children: [new TextRun(data.summary)] }));
  }

  // Education
  if (data.education.length) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Education")] }));
    data.education.forEach((ed) => {
      children.push(
        new Paragraph({
          children: [new TextRun(`${ed.degree} - ${ed.institute} (${ed.year})`)],
        })
      );
    });
  }

  // Experience
  if (data.experience.length) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Experience")] }));
    data.experience.forEach((ex) => {
      children.push(new Paragraph({ children: [new TextRun(`${ex.role} - ${ex.company} (${ex.period})`)] }));
      ex.points?.forEach((p) => {
        children.push(new Paragraph({ text: `• ${p}` }));
      });
    });
  }

  // Skills
  if (data.skills.length) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Skills")] }));
    children.push(new Paragraph({ children: [new TextRun(data.skills.join(", "))] }));
  }

  const doc = new Document({ sections: [{ children }] });

  const blob = await Packer.toBlob(doc);
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "CV.docx";
  link.click();
};
