import Image from 'next/image'
import ImageTextCarousel from '@/components/custom/images-carousel'
import TextSection from '@/components/custom/custom-section';
export default function Home() {
  const imagesNic: string[] = [
    "/nic_images/nic_1.jpg", 
    "/nic_images/nic_2.jpg", 
    "/nic_images/nic_3.jpg", 
    "/nic_images/nic_4.jpg"
  ]; 

  const backgroundTexts: string[] = [
    `**Prof. Dr. Nusret İlker ÇOLAK**  

Born in Adana, Turkey, in 1970. He completed his primary and middle school education in Osmaniye, Adana, and graduated from Izmir Atatürk High School in 1988. In 1990, he finished his English language studies at Boğaziçi University's School of Foreign Languages.`,
    
    `**Education**  

- 1995: Istanbul University Faculty of Law  
- 1998: Master's degree at Marmara University, Institute of Social Sciences, Department of Public Law  
- 2002: Earned his Ph.D. from Marmara University, Institute of Social Sciences, Department of Public Law`,

    `**Academic Career**  

- 1997: Research assistant in the Administrative Law Department at Kocaeli University Faculty of Law  
- 2003 (June-September): Visiting scholar at the University of Birmingham Law School, UK, researching European Union and UK harmonization process reforms  
- 2006 (March): Associate Professor of Administrative Law  
- 2011: Full Professor in the Administrative Law Department`,

    `**Most Recent Positions**  

- Head of the Administrative Law Department  
- Dean of the Faculty of Law`
  ];

  const declarationTitle: string = "The Meaning of Being Human: Rights and Freedoms";
  const declaration: string = `Being human becomes meaningful through the recognition and protection of rights. It is undeniable that individuals who cannot fight for their rights and freedoms will be significantly lacking in various aspects. The history of the struggle for rights and freedoms is synonymous with the history of humanity itself. In fact, history can be understood as a chronological narrative of the struggle for rights and freedoms.

The fight for rights and freedoms has given rise to the concept of the rule of law. As an ideal, the rule of law represents a governance model in which the rights and freedoms of individuals are safeguarded against all forms of aggression. The realization of the rule of law is directly related to the knowledge and effective use of legal remedies for the protection of these rights.

As academics, we firmly believe that everyone possesses the right to protect their rights and freedoms, and that seeking assistance while pursuing legal remedies should be considered a normal and accepted practice. In line with this conviction, we have made available to the public our academic publications that do not have copyright restrictions. Additionally, through email and social media, we wish to convey our commitment to addressing questions and concerns in areas of our expertise, including administrative law, land use and planning law, cultural and natural heritage protection law, and urban transformation law.

`
  
  return (
    <main className="bg-[#f9f9f9] h-full w-full flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className='h-full w-full mb-8'><ImageTextCarousel images={imagesNic} texts={backgroundTexts} /></div>
      <div className='h-full w-full'><TextSection title={declarationTitle} body={declaration}></TextSection></div>
    </main>
  )
}
