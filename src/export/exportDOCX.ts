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

  // Contact
  const contactLine = [data.personal.location, data.personal.phone, data.personal.email].filter(Boolean).join(' • ');
  if (contactLine) children.push(new Paragraph({ children: [new TextRun(contactLine)] }));
  const linksLine = [data.personal.website ?? '', data.personal.linkedin ?? ''].filter(Boolean).join(' • ');
  if (linksLine) children.push(new Paragraph({ children: [new TextRun(linksLine)] }));

  // Summary
  if (data.summary) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Summary")] }));
    children.push(new Paragraph({ children: [new TextRun(data.summary)] }));
  }

  // Education
  if (data.education.length) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Education")] }));
    data.education.forEach((ed) => {
      const range = [ed.start ?? '', ed.end ?? ''].filter(Boolean).join(' - ');
      const line = `${ed.degree} - ${ed.institute}${range ? ` (${range})` : ''}`;
      children.push(new Paragraph({ children: [new TextRun(line)] }));
    });
  }

  // Experience
  if (data.experience.length) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Experience")] }));
    data.experience.forEach((ex) => {
      const range = [ex.start ?? '', ex.end ?? ''].filter(Boolean).join(' - ');
      const line = `${ex.role} - ${ex.company}${range ? ` (${range})` : ''}`;
      children.push(new Paragraph({ children: [new TextRun(line)] }));
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

  if (data.certifications && data.certifications.length) {
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Certifications")] }));
    data.certifications.forEach((c) => children.push(new Paragraph({ text: `• ${c}` })));
  }

  const doc = new Document({ sections: [{ children }] });

  const blob = await Packer.toBlob(doc);
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "CV.docx";
  link.click();
};
