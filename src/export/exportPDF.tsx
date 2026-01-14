import { Document, Page, Text, pdf, View, StyleSheet } from "@react-pdf/renderer";
import type { CVData } from "../types/cv";

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 11 },
  name: { fontSize: 20, fontWeight: 700 },
  title: { fontSize: 12, color: '#555', marginBottom: 8 },
  rule: { borderBottomWidth: 1, borderBottomColor: '#ddd', marginVertical: 6 },
  sectionTitle: { fontSize: 12, fontWeight: 700, marginTop: 12, marginBottom: 6, textTransform: 'uppercase' },
  paragraph: { marginBottom: 4, lineHeight: 1.4 },
  listItem: { marginLeft: 8, marginBottom: 2 },
});

export const exportPDF = async (data: CVData) => {
  const Doc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{data.personal.name}</Text>
        <Text style={styles.title}>{data.personal.title}</Text>

        {data.summary && (
          <View>
            <Text style={styles.sectionTitle}>Personal Profile</Text>
            <View style={styles.rule} />
            <Text style={styles.paragraph}>{data.summary}</Text>
          </View>
        )}

        {data.education.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.rule} />
            {data.education.map((ed, i) => (
              <Text key={i} style={styles.paragraph}>
                {ed.degree} - {ed.institute} ({ed.year})
              </Text>
            ))}
          </View>
        )}

        {data.experience.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            <View style={styles.rule} />
            {data.experience.map((ex, i) => (
              <View key={i}>
                <Text style={styles.paragraph}>
                  {ex.role} - {ex.company} ({ex.period})
                </Text>
                {ex.points?.map((p, j) => (
                  <Text key={j} style={styles.listItem}>• {p}</Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {data.skills.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.rule} />
            <Text style={styles.paragraph}>{data.skills.join(', ')}</Text>
          </View>
        )}
      </Page>
    </Document>
  );

  const blob = await pdf(<Doc />).toBlob();
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "CV.pdf";
  link.click();
};
