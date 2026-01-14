import { Document, Page, Text, pdf } from "@react-pdf/renderer";

export const exportPDF = async (data: any) => {
  const Doc = () => (
    <Document>
      <Page>
        <Text>{data.personal.name}</Text>
        <Text>{data.summary}</Text>
      </Page>
    </Document>
  );

  const blob = await pdf(<Doc />).toBlob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "CV.pdf";
  link.click();
};
