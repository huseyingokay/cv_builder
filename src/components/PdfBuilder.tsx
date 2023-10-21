import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EducationComponent, ExperienceComponent, ProjectComponent } from './CVComponent';
import { StyleSheet, Document, Text, Page, PDFViewer, View } from '@react-pdf/renderer';

type PdfBuilderProps = {
    experiences: ExperienceComponent[];
    schools: EducationComponent[];
    projects: ProjectComponent[];
};

const styles = StyleSheet.create({
  pdfViewer: {
    width: window.innerWidth,
    height:  window.innerHeight,
  },
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  introSection: {
    marginBottom: 10,
    alignItems:"center"
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
  },
});

function PdfBuilder({schools, experiences, projects} : PdfBuilderProps) {
  return (
    <div className="main">
      <PDFViewer style={styles.pdfViewer} showToolbar={true}>
      <Document>
      <Page size="A4" style={styles.page}>
          <View style={styles.introSection}>
            <Text style={styles.title}>John Doe</Text>
            <Text style={styles.content}>123 Main St, City, State</Text>
            <Text style={styles.content}>Phone: (123) 456-7890</Text>
            <Text style={styles.content}>Email: john.doe@email.com</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>EDUCATION</Text>
            {schools && schools[0].name != "" ? (schools.map((school) => {
              return(
                <div>
                    <Text style={styles.content}>
                      {school.name}
                    </Text>
                    <Text style={styles.content}>
                      Start Date: {school.startDate}, End Date: {school.endDate}
                     </Text>
                     <Text style={styles.content}>
                      GPA: {school.gpa}
                     </Text>
                </div>
              )
            })) : (<Text></Text>)}
            
          </View>

          <View style={styles.section}>
          <Text style={styles.title}>RELATED EXPERIENCES</Text>
          {experiences && experiences[0].title != "" ? (experiences.map((experience) => {
              return(
                <div>
                    <Text style={styles.content}>
                      {experience.title}
                    </Text>
                    <Text style={styles.content}>
                      {experience.location}
                    </Text>
                    <Text style={styles.content}>
                      Start Date: {experience.startDate}, End Date: {experience.endDate}
                     </Text>
                     <Text style={styles.content}>
                      {experience.description}
                     </Text>
                </div>
              )
            })) : (<Text></Text>)}
            </View>

          <View style={styles.section}>
          <Text style={styles.title}>PROJECTS</Text>
          {projects && projects[0].name != "" ? (projects.map((project) => {
              return(
                <div>
                    <Text style={styles.content}>
                      {project.name}
                    </Text>
                    <Text style={styles.content}>
                      Start Date: {project.startDate}, End Date: {project.endDate}
                     </Text>
                     <Text style={styles.content}>
                      {project.description}
                     </Text>
                </div>
              )
            })) : (<Text></Text>)}
            </View>

        </Page>
        </Document>
        </PDFViewer>
    </div>
  );
}

export default PdfBuilder;