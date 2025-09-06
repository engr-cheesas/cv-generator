import {Document, Page, Text, View, StyleSheet} from "@react-pdf/renderer"

const styles = StyleSheet.create({
    page: { padding: 36, fontFamily: 'Times-Roman', fontSize: 12},
    container: { flexDirection: 'column', width: '100%' },
    header: { marginBottom: 10, textAlign: 'center' },
    name: { fontSize: 32, fontWeight: 'bold', textTransform: 'uppercase' },
    contact: { fontSize: 12, marginTop: 2 },
    section: { marginBottom: 10 },
    paragraph: {fontSize: 12, textAlign: 'justify', lineHeight: 1.4},
    heading: { fontSize: 14, fontWeight: 'bold', borderBottom: 1, marginBottom: 6 },
    list: { marginLeft: 0 },
    listItem: { fontSize: 12, marginBottom: 2 },
    italic: { fontSize: 12, fontStyle: 'italic', color: '#555' },
    flexRow: { flexDirection: 'row', justifyContent: 'space-between' },
    })

const CVDocument = ({safeFormData}) => {
    
    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                {/* Personal Info */}
                <View style={styles.container}>

                    {/* Header */}
                    <View style={styles.header}> 
                        <Text style={styles.name}> {safeFormData.personalInfo.name} </Text>
                        <Text style={styles.contact}> 
                            {safeFormData.personalInfo.email} | {safeFormData.personalInfo.phone} | {safeFormData.personalInfo.address} 
                        </Text>
                    </View>

                    {/* Professional Summary */}
                    <View style={styles.section}> 
                        <Text style={styles.heading}>Professional Summary</Text>
                        <Text style={styles.paragraph}>{safeFormData.profSummary.summary}</Text>
                    </View>

                    {/* Skills */}
                    <View style={styles.section}>
                        <Text style={styles.heading}>Skills</Text>
                        {safeFormData.skillInfo && safeFormData.skillInfo.length > 0 && (
                        <View style={styles.list}>
                            {safeFormData.skillInfo.map((skill, index) => (
                            <Text key={index} style={styles.listItem}>
                                <Text style={{ fontWeight: 'bold' }}>{skill.skillCategory}: </Text>
                                {skill.skillName}
                            </Text>
                            ))}
                        </View>
                        )}
                    </View>

                    {/* Education */}
                    <View style={styles.section}>
                        <Text style={styles.heading}>Education</Text>
                        <View style={styles.flexRow}>
                        <Text>
                            {safeFormData.educationInfo.school} - {safeFormData.educationInfo.location}
                        </Text>
                        <Text>{safeFormData.educationInfo.startDate} - {safeFormData.educationInfo.endDate}</Text>
                        </View>
                        <Text style={styles.italic}>{safeFormData.educationInfo.degree}</Text>
                    </View>

                    {/* Experiences */}
                    <View style={styles.section}>
                        <Text style={styles.heading}>Work Experience</Text>
                        {safeFormData.experienceInfo?.map((exp, i) => (
                        <View key={i} style={{ marginBottom: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{exp.position}</Text>
                            <View style={styles.flexRow}>
                            <Text>{exp.company} - {exp.companyLoc}</Text>
                            <Text>{exp.period}</Text>
                            </View>
                            {exp.roles && exp.roles?.length > 0 && (
                            <View style={styles.list}>
                                {exp.roles.map((role, j) => (
                                <Text key={j} style={styles.listItem}>• {role}</Text>
                                ))}
                            </View>
                            )}
                        </View>
                        ))}
                    </View>

                    {/* Projects */}
                    <View style={styles.section}>
                        <Text style={styles.heading}>Projects</Text>
                        {safeFormData.projectInfo?.map((proj, i) => (
                        <View key={i} style={{ marginBottom: 5 }}>
                            <Text style={{ fontWeight: 'bold' }}>{proj.projectName}</Text>
                            {proj.projectDef && proj.projectDef.length > 0 && (
                            <View style={styles.list}>
                                {proj.projectDef?.map((def, j) => (
                                <Text key={j} style={styles.listItem}>• {def}</Text>
                                ))}
                            </View>
                            )}
                        </View>
                        ))}
                    </View>

                </View>
            </Page>
        </Document>
    )
}

export default CVDocument