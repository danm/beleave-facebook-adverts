const fs = require('fs');
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();

const files = [
  // './Vote-Leave-50-million-spreadsheet.pdf',
  // './Brexit-Central-BeLeave-Spreadsheet.pdf',
  './DUP-Vote-to-Leave-Spreadsheet.pdf',
];

const lines = [];
let cols = 13;

const init = async () => {
  for (let loop = 0 ; loop < files.length; loop++) {
    await processPDFs(files[loop], loop);
  }

  lines.forEach((r) => {
    fs.appendFileSync('./ads-output.json', `${JSON.stringify(r)}\n`);
  });

  lines.forEach((ad, i) => {
      const csvLine = [];

      if (i === 0) {
        const header = [];
        header.push('Page Name')
        header.push('Page URL');
        header.push('Ad Group ID');
        header.push('Ad ID');
        header.push('Ad Text');
        header.push('Photo/Video ID');
        header.push('Ad Impressions');
        header.push('Ad Impressions Range high');
        header.push('Ad Impressions Range low');
        header.push('Ad Impressions Range avg');
        header.push('Ad Group Age Gender Reach 18-24 female');
        header.push('Ad Group Age Gender Reach 18-24 male');
        header.push('Ad Group Age Gender Reach 18-24 unknown');
        header.push('Ad Group Age Gender Reach 25-34 female');
        header.push('Ad Group Age Gender Reach 25-34 male');
        header.push('Ad Group Age Gender Reach 25-34 unknown');
        header.push('Ad Group Age Gender Reach 35-44 female');
        header.push('Ad Group Age Gender Reach 35-44 male');
        header.push('Ad Group Age Gender Reach 35-44 unknown');
        header.push('Ad Group Age Gender Reach 45-54 female');
        header.push('Ad Group Age Gender Reach 45-54 male');
        header.push('Ad Group Age Gender Reach 45-54 unknown');
        header.push('Ad Group Age Gender Reach 55-64 female');
        header.push('Ad Group Age Gender Reach 55-64 male');
        header.push('Ad Group Age Gender Reach 55-64 unknown');
        header.push('Ad Group Age Gender Reach 65+ female');
        header.push('Ad Group Age Gender Reach 65+ male');
        header.push('Ad Group Age Gender Reach 65+ unknown');
        header.push('Ad Group Age Gender Reach Avg Volume 18-24 female');
        header.push('Ad Group Age Gender Reach Avg Volume 18-24 male');
        header.push('Ad Group Age Gender Reach Avg Volume 18-24 unknown');
        header.push('Ad Group Age Gender Reach Avg Volume 25-34 female');
        header.push('Ad Group Age Gender Reach Avg Volume 25-34 male');
        header.push('Ad Group Age Gender Reach Avg Volume 25-34 unknown');
        header.push('Ad Group Age Gender Reach Avg Volume 35-44 female');
        header.push('Ad Group Age Gender Reach Avg Volume 35-44 male');
        header.push('Ad Group Age Gender Reach Avg Volume 35-44 unknown');
        header.push('Ad Group Age Gender Reach Avg Volume 45-54 female');
        header.push('Ad Group Age Gender Reach Avg Volume 45-54 male');
        header.push('Ad Group Age Gender Reach Avg Volume 45-54 unknown');
        header.push('Ad Group Age Gender Reach Avg Volume 55-64 female');
        header.push('Ad Group Age Gender Reach Avg Volume 55-64 male');
        header.push('Ad Group Age Gender Reach Avg Volume 55-64 unknown');
        header.push('Ad Group Age Gender Reach Avg Volume 65+ female');
        header.push('Ad Group Age Gender Reach Avg Volume 65+ male');
        header.push('Ad Group Age Gender Reach Avg Volume 65+ unknown');
        header.push('Ad Group Region Reach England');
        header.push('Ad Group Region Reach Northern Ireland');
        header.push('Ad Group Region Reach Scotland');
        header.push('Ad Group Region Reach Wales');
        header.push('Ad Start Date');
        header.push('Ad Start Date String');
        header.push('Ad End Date');
        header.push('Ad End Date String');
        // fs.appendFileSync('./csv.tsv', `${header.join('\t')}\n`);
      }
      if (Object.keys(ad).length === 0) return;

      csvLine.push(ad['Page Name'])
      csvLine.push(ad['Page URL']);
      csvLine.push(ad['Ad Group ID']);
      csvLine.push(ad['Ad ID']);
      csvLine.push(`"${ad['Ad Text']}"`);
      csvLine.push(ad['Photo/Video ID']);
      csvLine.push(ad['Ad Impressions']);
      csvLine.push(ad['Ad Impressions Range'].high);
      csvLine.push(ad['Ad Impressions Range'].low);
      csvLine.push(ad['Ad Impressions Range'].avg);
      csvLine.push(ad['Ad Group Age Gender Reach']['18-24 female']);
      csvLine.push(ad['Ad Group Age Gender Reach']['18-24 male']);
      csvLine.push(ad['Ad Group Age Gender Reach']['18-24 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach']['25-34 female']);
      csvLine.push(ad['Ad Group Age Gender Reach']['25-34 male']);
      csvLine.push(ad['Ad Group Age Gender Reach']['25-34 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach']['35-44 female']);
      csvLine.push(ad['Ad Group Age Gender Reach']['35-44 male']);
      csvLine.push(ad['Ad Group Age Gender Reach']['35-44 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach']['45-54 female']);
      csvLine.push(ad['Ad Group Age Gender Reach']['45-54 male']);
      csvLine.push(ad['Ad Group Age Gender Reach']['45-54 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach']['55-64 female']);
      csvLine.push(ad['Ad Group Age Gender Reach']['55-64 male']);
      csvLine.push(ad['Ad Group Age Gender Reach']['55-64 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach']['65+ female']);
      csvLine.push(ad['Ad Group Age Gender Reach']['65+ male']);
      csvLine.push(ad['Ad Group Age Gender Reach']['65+ unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['18-24 female']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['18-24 male']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['18-24 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['25-34 female']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['25-34 male']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['25-34 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['35-44 female']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['35-44 male']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['35-44 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['45-54 female']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['45-54 male']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['45-54 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['55-64 female']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['55-64 male']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['55-64 unknown']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['65+ female']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['65+ male']);
      csvLine.push(ad['Ad Group Age Gender Reach Avg Volume']['65+ unknown']);
      csvLine.push(ad['Ad Group Region Reach']['England']);
      csvLine.push(ad['Ad Group Region Reach']['Northern Ireland']);
      csvLine.push(ad['Ad Group Region Reach']['Scotland']);
      csvLine.push(ad['Ad Group Region Reach']['Wales']);
      csvLine.push(ad['Ad Start Date']);
      csvLine.push(ad['Ad Start Date String']);
      csvLine.push(ad['Ad End Date']);
      csvLine.push(ad['Ad End Date String']);
      fs.appendFileSync('./csv.tsv', `${csvLine.join('\t')}\n`);
    });
    

}

const processPDFs = (file, i) => {
  return new Promise((resolve, reject) => {
    try {
      pdfExtract.extract(file, {}, () => (err, data) {
        if (err) return console.log(err);
        data.pages.forEach((d) => {
          worker(d, i, file);
        });
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });
};

let newLine;
let header = [];


const worker = (data, book, file) => {

  if (!Array.isArray(data.content)) {
    console.log('this is not an array');
  }

  let x = {};
  data.content.forEach((r, i) => {
    if (i === 0 && data.pageInfo.num === 1) {
      newLine = r.x;
    }
    if (i < cols && data.pageInfo.num === 1) {
      console.log(r.str)
      if (r.str === 'Ad Group Age Gender ' || r.str === 'Ad Group Region ') {
        r.str += 'Reach';
      }
      if (r.str === 'Reach') return;
      header.push({
        x: r.x,
        name: r.str,
      });
      return;
    }

    if (r.x === newLine) {
      const a = Object.assign({}, x);
      if (a['Page Name'] !== 'Page Name')lines.push(a);
      
      x = {
        'Page Name': '',
        'Page URL': '',
        'Ad Group ID': '',
        'Ad ID': '',
        'Ad Text': [],
        'Photo/Video ID': '',
        'Ad Impressions': '',
        'Ad Impressions Range': {
          low: 0,
          high: 0,
          avg: 0,
        },
        'Ad Group Age Gender Reach': {
          '18-24 female': '',
          '18-24 male': '',
          '18-24 unknown': '',
          '25-34 female': '',
          '25-34 male': '',
          '25-34 unknown': '',
          '35-44 female': '',
          '35-44 male': '',
          '35-44 unknown': '',
          '45-54 female': '',
          '45-54 male': '',
          '45-54 unknown': '',
          '55-64 female': '',
          '55-64 male': '',
          '55-64 unknown': '',
          '65+ female': '',
          '65+ male': '',
          '65+ unknown': '',
        },
        'Ad Group Age Gender Reach Avg Volume': {
          '18-24 female': 0,
          '18-24 male': 0,
          '18-24 unknown': 0,
          '25-34 female': 0,
          '25-34 male': 0,
          '25-34 unknown': 0,
          '35-44 female': 0,
          '35-44 male': 0,
          '35-44 unknown': 0,
          '45-54 female': 0,
          '45-54 male': 0,
          '45-54 unknown': 0,
          '55-64 female': 0,
          '55-64 male': 0,
          '55-64 unknown': 0,
          '65+ female': 0,
          '65+ male': 0,
          '65+ unknown': 0,
        },
        'Ad Group Region Reach': {
          England: '',
          'Northern Ireland': '',
          Scotland: '',
          Wales: '',
        },
        'Ad Start Date': '',
        'Ad Start Date String': '',
        'Ad End Date': '',
        'Ad End Date String': '',
      };
    }
    const item = header.find((elm) => {
      if (elm.x === r.x) return true;
      const pos = parseFloat(r.x)
      if (pos > (elm.x - 10) && pos < (elm.x + 10)) return true;
      return false;
    });

    if (item !== undefined) {
      if (item.name === 'Ad Text') {

        const clean = r.str.replace(/\"/g,'');
        // const cleaner = clean.replace(/,/g, '\,');
        x[item.name] += `${clean}`;
      } else if (item.name === 'Ad Group Age Gender Reach') {
        Object.keys(x['Ad Group Age Gender Reach']).forEach((row) => {
          if (r.str.includes(row)) {
            x[item.name][row] = r.str.substring(row.length + 1);
            if (!r.str.includes('<') && x['Ad Impressions Range'].avg) x['Ad Group Age Gender Reach Avg Volume'][row] = Math.round(x['Ad Impressions Range'].avg * (parseInt(r.str) / 100));
          }
        });
      } else if (item.name === 'Ad Group Region Reach') {
        Object.keys(x['Ad Group Region Reach']).forEach((row) => {
          if (r.str.includes(row)) {
            x[item.name][row] = r.str.substring(row.length + 1); 
          }
        });
      } else if (item.name ===  'Ad Start Date' || item.name === 'Ad End Date') {
        const date = r.str.split('/');
        if (file === './Vote-Leave-50-million-spreadsheet.pdf') {
          const epoch = new Date(parseInt(`20${date[2]}`), parseInt(date[0]) - 1, date[1], 0, 0, 0, 0);
          x[item.name] = epoch;
        } else if (file === './DUP-Vote-to-Leave-Spreadsheet.pdf') {
          const epoch = new Date(parseInt(date[2]), parseInt(date[1]) - 1, date[0], 0, 0, 0, 0);
          x[item.name] = epoch;
        } else {
          const epoch = new Date(parseInt(date[2]), parseInt(date[1]) - 1, date[0], 0, 0, 0, 0);
          x[item.name] = epoch;
        }
        x[`${item.name} String`] = r.str;
      } else if (item.name === 'Ad Impressions') {
        const range = r.str.split('-');
        x[item.name] = r.str;
        x['Ad Impressions Range'].low = parseInt(range[0]);
        x['Ad Impressions Range'].high = parseInt(range[1]);
        x['Ad Impressions Range'].avg = parseInt((x['Ad Impressions Range'].low + x['Ad Impressions Range'].high) / 2);
      } else if (x[item.name] !== undefined) {
        clean = r.str.replace(/\"/g,'');
        x[item.name] = clean;
      } else {
        console.log('unknown thing', elm);
      }
    }
  });

  const a = Object.assign({}, x);
  lines.push(a);
};

init();