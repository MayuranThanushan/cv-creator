import { Document, Packer, Paragraph, TextRun } from "docx";

export const exportDOCX = async (data: any) => {
  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({
          children: [new TextRun({ text: data.personal.name, bold: true })]
        }),
        new Paragraph(data.summary)
      ]
    }]
  });

  const blob = await Packer.toBlob(doc);
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "CV.docx";
  link.click();
};
