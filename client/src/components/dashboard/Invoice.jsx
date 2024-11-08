import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Svg,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  logo: {
    width: 150,
    height: "auto",
    marginBottom: 50,
    alignSelf: "center",
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  footer: {
    marginTop: 30,
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: 15,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    borderBottom: "1 solid black",
    paddingBottom: 5,
  },
  tableCol: {
    width: "25%",
  },
  tableCellHeader: {
    fontWeight: "bold",
  },
  tableCell: {
    margin: "5 0",
  },
  totals: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  totalLabel: {
    width: "70%",
    textAlign: "right",
    paddingRight: 10,
  },
  totalValue: {
    width: "30%",
    textAlign: "right",
  },
});

const Invoice = ({ positionen, user, kundenadresse, offerCode }) => {
  // Format date
  const dateString = Date.now();
  const readableDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("de-CH", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // Company information
  const companyInfo = {
    company: user.company,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
  };

  // Addieren aller Summen für Gesamtpreis

  const calculateTotal = () => {
    return positionen.reduce((total, position) => {
      return total + position.preis * position.menge;
    }, 0);
  };
  const totalSum = calculateTotal();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Company Logo */}
        {/* <Image style={styles.logo} src={logo} /> */}

        {/* Company Information */}
        <View style={styles.section}>
          <Text>{companyInfo.company}</Text>
          <Text>{companyInfo.name}</Text>
          {/* <Text>{companyInfo.address}</Text> */}
          {/* <Text>
            {companyInfo.zip} {companyInfo.city}
          </Text>
          <Text>{companyInfo.country}</Text> */}
          <Text>E-Mail: {companyInfo.email}</Text>
          {/* <Text>Firmennummer: {companyInfo.cheId}</Text> */}
        </View>

        {/* Invoice Header */}
        <Text style={styles.header}>Offerte</Text>

        {/* Invoice Details */}
        <View style={styles.section}>
          <Text>Offerte Nr.: {offerCode}</Text>
          <Text>Datum: {readableDate(dateString)}</Text>
        </View>

        {/* Customer Address */}
        <View style={styles.section}>
          <Text>Kunde:</Text>
          <Text>{kundenadresse}</Text>
        </View>

        {/* Order Items Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Text</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Mengeneinheit</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Menge</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Einzelpreis</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Gesamtpreis</Text>
            </View>
          </View>
          {/* Table Rows */}
          {positionen.map((position, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{position.text}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{position.mengenEinheit}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{position.menge}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{position.preis} CHF</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {position.menge * position.preis} CHF
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Totals */}
        {/* <View style={styles.totals}>
          <Text style={styles.totalLabel}>Zwischensumme:</Text>
          <Text style={styles.totalValue}> </Text>
        </View> */}
        <View style={styles.totals}>
          <Text style={styles.totalLabel}>Gesamtsumme:</Text>
          <Text style={styles.totalValue}>{totalSum} CHF</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            Vielen Dank für Ihre Anfrage und das Interesse an unseren
            Dienstleistungen. Gerne unterbreiten wir Ihnen hiermit unser Angebot
            für Ihr Projekt. Unsere Offerte basiert auf einer detaillierten
            Analyse Ihrer Anforderungen und umfasst alle notwendigen Schritte
            und Materialien für eine erfolgreiche Umsetzung. Die Positionen sind
            klar strukturiert und bieten Ihnen eine transparente Übersicht über
            die Kosten und den Leistungsumfang. Bei Rückfragen oder wenn Sie
            eine Anpassung der Offerte wünschen, stehen wir Ihnen jederzeit
            gerne zur Verfügung. Wir freuen uns darauf, Ihr Projekt gemeinsam
            mit Ihnen zu realisieren und Ihnen eine effiziente und qualitativ
            hochwertige Lösung zu bieten. Vielen Dank für Ihr Vertrauen. Wir
            hoffen, dass unser Angebot Ihren Vorstellungen entspricht und freuen
            uns auf Ihre Rückmeldung.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
