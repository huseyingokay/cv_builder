import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EducationComponent, ExperienceComponent, ProjectComponent, personalInfoType } from './CVComponent';
import { StyleSheet, Document, Text, Page, PDFViewer, View } from '@react-pdf/renderer';

type PdfBuilderProps = {
    personalInfo: personalInfoType;
    links: string[]
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

function PdfBuilder({personalInfo, links, schools, experiences, projects} : PdfBuilderProps) {
  return (
    <div className="main">
      <PDFViewer style={styles.pdfViewer} showToolbar={true}>
      <Document>
      <Page size="A4" style={styles.page}>
          <View style={styles.introSection}>
            <Text style={styles.title}>{personalInfo.name} {personalInfo.surname}</Text>
            <Text style={styles.content}>Phone: {personalInfo.phone}</Text>
            {links && links[0] != "" ? (links.map((link) => {
              return(
                <div>
                    <Text style={styles.content}>
                      {link}
                    </Text>
                </div>
              )
            })) : (<Text></Text>)}
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