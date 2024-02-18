export const navigation = {
    categories: [
      {
        id: 'Endocrinology',
        name: 'Endocrinology',
        featured: [
          {
            name: 'New Medicine Arrivals',
            href: '/',
            imageSrc: 'https://www.medibyte.in/wp-content/uploads/2019/05/Alup-Tabs.jpg',
            imageAlt: 'Medicine for everything and and futher alteration when required!!!',
          }, 
          {
            name: 'Basic Medical',
            href: '/',
            imageSrc: 'https://www.larenon.com/wp-content/uploads/2022/03/Acotibien-Packshot.jpg',
            imageAlt: 'Medicine for everything and and futher alteration when required!!!',
          },
        ],
        sections: [
          {
            id: 'Gastroenterology',
            name: 'Gastroenterology',
            items: [
              { name: 'Neurosurgery', id:"neurosurgery", href: `{InternalMedicine/Cardiology/Neurosurgery}` },
              { name: 'generalSurgery', id:"general_Surgery", href: '#' },
              { name: 'neonatology', id: 'Neonatology' },
              { name: 'cardiothoracicSurgery', id: 'CardiothoracicSurgery' },
              { name: 'cardiology', id: 'Cardiology' },
              { name: 'surgery', id: 'Surgery' },
              { name: 'geneTherapy', id: 'GeneTherapy' },
              { name: 'RNATherapies', id: 'RNATherapies' },
              { name: 'immunotherapy', id: 'Immunotherapy' },
              { name: 'biologicDrugs', id: 'BiologicDrugs' },
            ],
          },
          {
            id: 'Cardiology',
            name: 'Cardiology',
            items: [
              { name: 'BiologicDrugs', id: 'biologicDrugs' },
              { name: 'Immunotherapy', id: 'immunotherapy' },
              { name: 'RNATherapies', id: 'rNATherapies' },
              { name: 'GeneTherapy', id: 'geneTherapy' },
              { name: 'CardiothoracicSurgery', id: 'cardiothoracicSurgery' },
              { name: 'Surgery', id: 'surgery' },
            ],
          },
          {
            id: 'Pediatrics',
            name: 'Pediatrics',
            items: [
              { name: 'immunotherapy', id: '#' },
              { name: 'RNATherapies', id: '#' },
              { name: 'cardiothoracicSurgery', id: '#' },
              { name: 'surgery', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'Internal Medicine',
        name: 'Internal Medicine',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://www.soignerpharma.com/wp-content/uploads/2017/11/zigsily-70-min.jpg',
            imageAlt: 'Medicine for everything and and futher alteration when required!!!',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://4.imimg.com/data4/WW/KP/MY-24042156/gastro-resistant-tablets-500x500.jpg',
            imageAlt:
              'Medicine for everything and and futher alteration when required!!!',
          },
        ],
        sections: [
          {
            id: 'surgery',
            name: 'surgery',
            items: [
              { name: 'immunotherapy', id: 'Immunotherapy' },
              { name: 'biologicDrugs', id: 'BiologicDrugs' },
              { name: 'surgery', id: 'Surgery' },
              { name: 'cardiology', id: '#' },
              { name: 'cardiology', id: 'Cardiology' },
              { name: 'neonatology', id: '#' },
              { name: 'Neurosurgery', id: '#' },
              
            ],
          },
          {
            id: 'Cardiology',
            name: 'Cardiology',
            items: [
              { name: 'surgery', id: '#' },
              { name: 'biologicDrugs', id: '#' },
              { name: 'geneTherapy', id: '#' },
              { name: 'neurosurgery', id: '#' },
              { name: 'immunotherapy', id: '#' },
              { name: 'rNATherapies', id: '#' },
            ],
          },
          {
            id: 'Neurosurgery',
            name: 'Neurosurgery',
            items: [
              { name: 'cardiology', id: '#' },
              { name: 'biologicDrugs', id: '#' },
              { name: 'RNATherapies', id: '#' },
              { name: 'GeneralSurgery', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }