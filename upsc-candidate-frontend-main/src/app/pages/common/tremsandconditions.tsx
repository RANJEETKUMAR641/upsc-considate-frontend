/* eslint-disable */

import { useState } from 'react'
import './main.css'
import { useHistory } from 'react-router-dom'
import { PostStyle } from './pageStyles/Posts.style'
import { Container, Row, Col } from 'reactstrap'
import TabCollaps from 'app/components/TabCollaps'

const Instruction = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [checked, setChecked] = useState(false)
  const history = useHistory()

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const handlePrint = () => {
    const contentToPrint: any = document.getElementById('divToPrint')?.innerHTML
    const originalContents: string = document.body.innerHTML
    if (contentToPrint !== null) {
      document.body.innerHTML = contentToPrint
      window.print()
      document.body.innerHTML = originalContents
    }
  }

  const handleProceed = () => {
    if (checked) {
      history.push(`/dashboards/application${history?.location?.search}`)
    } else {
      alert('Please check')
    }
  }

  return (
    <>
      <PostStyle>
        <Container fluid>
          <TabCollaps
            title={`${
              (currentPage === 1 && 'TERMS AND CONDITIONS/शर्तें और निबंधन') ||
              (currentPage === 2 &&
                'VERY IMPORTANT NOTE/अति महत्वपूर्ण टिप्पणी') ||
              (currentPage === 3 && 'TERMS AND CONDITIONS/शर्तें और निबंधन')
            } `}
            opentab={true}
            tabhandle={false}
            padding={false}
            data={
              <div className="termAndConditionBox p-3">
                <div className="">
                  {currentPage === 1 && (
                    <>
                      <ol className="py-2 m-0 ps-5">
                        <li>
                          {' '}
                          <p>
                            Before filling up the Online Recruitment Application
                            (ORA), the candidates must go through the detailed
                            Advertisement available on the Commission's website.
                            Please proceed to fill the online application only
                            if you are satisfied that you possess the minimum
                            Essential Qualifications stipulated for the post in
                            the detailed advertisement. Otherwise, submitted
                            application(s) shall be outrightly rejected.
                          </p>
                          <p>
                            ऑनलाइन भर्ती आवेदन भरने से पूर्व उम्‍मीदवार आयोग की
                            वेबसाइट पर उपलब्‍ध विस्‍तृत विज्ञापन को अच्‍छी तरह
                            अवश्‍य पढ़ लें । यदि आप संतुष्‍ट है कि आप विस्‍तृत
                            विज्ञापन में पद के लिए निर्धारित न्‍यूनतम अनिवार्य
                            योग्‍यताएं प्राप्‍त हैं तभी आप ऑनलाइन आवेदन भरने के
                            लिए आगे बढ़ें । अन्‍यथा प्रस्‍तुत किया गया आवेदन
                            सरसरी तौर पर ही रद्द कर दिया जाएगा ।
                          </p>
                        </li>
                        <li>
                          {' '}
                          <p>
                            The date for determining the eligibility of all the
                            candidates in every respect shall be the prescribed
                            closing date for submission of Online Recruitment
                            Application (ORA), unless specified otherwise.
                          </p>
                          <p>
                            हर तरह से सभी उम्‍मीदवारों की पात्रता निर्धारत करने
                            की तारीख जब तक अन्‍यथा विनिर्दिष्‍ट न किया जाए
                            ऑनलाइन भर्ती आवेदन प्रस्‍तुत करने की निर्धारित अंतिम
                            तारीख होगी ।
                          </p>
                        </li>
                        <li>
                          {' '}
                          <p>
                            The applicants are advised to fill in all their
                            particulars in the Online Recruitment Application
                            carefully as submission of wrong information may
                            lead to rejection through computer based
                            short-listing apart from debarment by the
                            Commission.
                          </p>
                          <p>
                            आवेदकों को सलाह दी जाती है कि ऑनलाइन भर्ती आवेदन में
                            अपने सभी विवरण ध्‍यानपूर्वक भरें, क्‍योंकि गलत सूचना
                            प्रस्‍तुत करने पर आयोग द्वारा विवर्जित करने के अलावा
                            कम्‍प्‍यूटर आधारित लघु सूची बद्ध करने के दौरान आवेदन
                            रद्द किया जा सकता है ।{' '}
                          </p>
                        </li>
                        <li>
                          {' '}
                          <p>
                            The candidates are advised to fill their correct and
                            active e-mail address in the online application as
                            any Correspondence will be made by the Commission
                            through e-mail only. The candidates are also advised
                            to refer to website of the Commission for regular
                            updates of the recruitment cases.
                          </p>
                          <p>
                            उम्‍मीदवारों को सलाह दी जाती है कि ऑनलाइन आवेदन में
                            अपना सही और सक्रिय ई-मेल आईडी भरें क्‍योंकि आयोग
                            द्वारा सभी पत्र-व्‍यवहार केवल ई-मेल के माध्‍यम से ही
                            किए जाएंगे । आवेदेकों को यह भी सलाह दी जाती है कि वे
                            नियमित रूप से भर्ती मामलों की अद्यतन जानकारी
                            प्राप्‍त करने के लिए आयोग की वेबसाइट देखें ।{' '}
                          </p>
                        </li>
                        <li>
                          <p>
                            The applicants are advised to submit only single
                            Online Recruitment Application for a particular
                            post. However, if they submit multiple Online
                            Recruitment Applications for one post, then they
                            must ensure that the Online Recruitment Application
                            with the higher 'Application Number' is complete in
                            all respects including fee, wherever applicable. The
                            applicants, who submit multiple Online Recruitment
                            Applications, should note that only the Online
                            Recruitment Application with higher 'Application
                            Number' shall be considered by the Commission and
                            fee paid against one 'Application Number' shall not
                            be adjusted against any other 'Application Number'.
                          </p>
                          <p>
                            {' '}
                            उम्‍मीदवारों को सलाह दी जाती है कि वे विशेष पद के
                            लिए केवल एक ही ऑनलाइन भर्ती आवेदन पत्र जमा करें;
                            तथापि, यदि वह एक पद के लिए एक से अधिक ऑनलाइन भर्ती
                            आवेदन पत्र जमा करता / करती है तो उसे यह अवश्‍य
                            सुनिश्‍चित करना चाहिए कि उच्‍चतर "आवेदन सं." वाला
                            ऑनलाइन भर्ती आवेदन पत्र शुल्‍क, जहां भी लागू हो,
                            सहित सभी प्रकार से परिपूर्ण है। जो आवेदक एक से अधिक
                            ऑनलाइन भर्ती आवेदन पत्र जमा करते हैं उन्‍हें नोट कर
                            लेना चाहिए कि आयोग द्वारा केवल उच्‍चतर "आवेदन सं."
                            वाले ऑनलाइन भर्ती आवेदन पत्र को ही स्‍वीकार किया
                            जाएगा और एक "आवेदन सं." के लिए दिए गए आवेदन शुल्‍क
                            को किसी अन्‍य "आवेदन सं." के लिए समायोजित नहीं किया
                            जाएगा ।
                          </p>
                        </li>
                        <li>
                          <p>
                            Fee once paid shall not be refunded under any
                            circumstance nor can the fee be held in reserve for
                            any other examination or selection.
                          </p>
                          <p>
                            एक बार भुगतान किए गए शुल्‍क को किसी भी परिस्‍थिति
                            में लौटाया नहीं जाएगा और न ही किसी अन्‍य परीक्षा या
                            चयन के लिए सुरक्षित रखा जाएगा ।{' '}
                          </p>
                        </li>
                        <li>
                          <p>
                            The candidates are not required to send the
                            printouts of their online applications to the
                            Commission. However, the Application will not be
                            treated as finally submitted unless and until it is
                            available under 'My Finally Submitted Application'
                            Tab before the closing date and time. Please retain
                            a print out of your finally submitted online
                            application (complete with Payment Details, if not
                            fee-exempted applicant) as a proof of submission of
                            your application to the Commission, whenever
                            required.
                          </p>
                          <p>
                            उम्‍मीदवारों को अपने ऑनलाइन आवेदन पत्र का प्रिंट आउट
                            आयोग को भेजने की आवश्‍यकता नहीं है । तथापि आवेदन तब
                            तक अंतिम रूप से प्रस्‍तुत किया गया नहीं माना जाएगा
                            जब तक कि यह नियत तारीख और समय से पहले ''My finally
                            submitted Application'' (मेरा अंतिम रूप से प्रस्‍तुत
                            आवेदन) टेब के अंतर्गत उपलब्‍ध नहीं कर दिया जाता ।
                            कृपया जब भी अपेक्षित हो आयोग को आपका आवेदन प्रस्‍तुत
                            करने के प्रमाण के रूप में आपके अंतिम रूप से ऑनलाइन
                            प्रस्‍तुत किए गए आवेदन का प्रिंट आउट रख लें ।{' '}
                          </p>
                        </li>
                        <li>
                          <p>
                            All candidates whether in Government service or in
                            Government owned industrial or other similar
                            organizations or in private employment should submit
                            their applications online directly to the
                            Commission. Persons already in Regular Government
                            service, whether in permanent or temporary capacity
                            other than casual/adhoc/daily wages/hourly
                            paid/contract basis would be required to submit a
                            declaration, whenever asked by the commission, that
                            they had informed in writing to their Head of
                            Office/Department while applying for this selection.
                          </p>
                          <p>
                            सभी उम्‍मीदवार, चाहे वे सरकारी सेवा या सरकारी
                            स्‍वामित्‍व वाले औद्योगिक या अन्‍य इसी प्रकार के
                            संगठन या निजी रोजगार में हो, अपने आवेदन ऑनलाइन सीधे
                            आयोग को प्रस्‍तुत करें । अनियत / तदर्थ / दैनिक
                            मजदूरी / घंटों के आधार पर भुगतान पाने वाले / ठेके पर
                            काम करने वाले व्‍यक्‍तियों से भिन्‍न स्‍थायी या
                            अस्‍थायी क्षमता में नियमित सरकारी सेवा में पहले से
                            कार्यरत व्‍यक्‍ति जब भी आयोग द्वारा पूछा जाए इस आशय
                            की घोषणा प्रस्‍तुत करेंगे कि उन्‍होंने इस चयन के लिए
                            आवेदन करते समय अपने कार्यालय / विभाग प्रमुख को लिखित
                            में सूचित कर दिया है ।
                          </p>
                        </li>
                        <li>
                          <p>
                            The candidates belonging to OBC (Creamy Layer),
                            i.e., who have marked their Creamy Layer status as
                            'YES' in ORA are not entitled to reservation
                            admissible to OBC candidates and they will be
                            treated at par with "UNRESERVED (UR)" candidates.
                            Similarly, benefits of reservation to OBC/SC/ST
                            category will be admissible only when post is
                            reserved for them. If post is not reserved for their
                            respective category, they can apply against
                            unreserved vacancy and in such case they will be
                            treated at par with "UNRESERVED (UR)" candidates for
                            all the purposes.
                          </p>
                          <p>
                            अन्‍य पिछड़ा वर्ग (क्रीमी लेयर) से संबंधित
                            उम्‍मीदवार, जिन्‍हें ओआरए में वाईईएस के रूप में
                            क्रीमी लेयर का दर्जा दिया गया है, अन्‍य पिछड़ा वर्ग
                            उम्‍मीदवारों के लिए लागू आरक्षण के लिए हकदार नहीं है
                            और उन्‍हें ''अनारक्षित (यूआर)'' उम्‍मीदवारों के समान
                            समझा जाएगा । इसी प्रकार अन्‍य पिछड़ा वर्ग / अनुसूचित
                            जाति / अनुसूचित जनजाति श्रेणी के आरक्षण के लाभ केवल
                            तभी स्‍वीकार्य होंगे जब पद उनके लिए आरक्षित हो । यदि
                            पद उनकी संबंधित श्रेणी के लिए आरक्षित नहीं है तो वे
                            अनारक्षित रिक्‍ति के लिए आवेदन कर सकते हैं और ऐसी
                            स्‍थिति में उन्‍हें सभी प्रयोजनों के लिए ''अनारक्षित
                            (यूआर)'' उम्‍मीदवार के समान समझा जाएगा ।{' '}
                          </p>
                        </li>
                        <li>
                          <p>
                            The prescribed Essential Qualifications are the
                            minimum and the mere possession of the same does not
                            entitle candidates to be called for recruitment
                            test/interview.
                          </p>
                          <p>
                            निर्धारित अनिवार्य योग्‍यताएं न्‍यूनतम हैं और केवल
                            इन योग्‍यताओं के कारण उम्‍मीदवार भर्ती परीक्षण /
                            साक्षात्‍कार के लिए बुलाए जाने के हकदार नहीं हो जाते
                            ।
                          </p>
                        </li>
                      </ol>
                    </>
                  )}
                  {currentPage === 2 && (
                    <div className="">
                      <div id="divToPrint">
                        <div className="list py-2">
                          <p>
                            <strong>A-</strong> In the event of number of
                            applications being large, commission will adopt
                            short listing criteria to restrict the number of
                            candidates to be called for interview to a
                            reasonable number by any or more of the following
                            methods :
                          </p>
                          <p>
                            क- आवेदन-पत्रों की संख्या अधिक होने की स्थिति में
                            आयोग निम्नलिखित में से एक या अधिक विधियों द्वारा
                            साक्षात्कार के लिए बुलाए जाने वाले उम्मीदवारों की
                            संख्यां को उपयुक्त संख्या तक सीमित करने के लिए लघु
                            सूचीबद्ध करने का मानदंड अपनाएगाः-
                          </p>
                          <div className="mx-4 px-4">
                            <p>
                              <strong>a-</strong> On the basis of Desirable
                              Qualification (DQ) or any one or all of the DQs if
                              more than one DQ is prescribed.
                            </p>
                            <p>
                              क- वांछनीय योग्यता या यदि एक से अधिक वांछित
                              योग्यता निर्धारित की गई है तो किसी एक या सभी
                              वांछनीय योग्यताओं के आधार पर
                            </p>
                            <p>
                              <strong>b-</strong> On the basis of higher
                              educational qualifications than the minimum
                              prescribed in the advertisement.
                            </p>
                            <p>
                              {' '}
                              ख- विज्ञापन में निर्धारित न्यूनतम शैक्षणिक
                              योग्यताओं से उच्चतर शैक्षणिक योग्यताओं के आधार पर
                            </p>
                            <p>
                              <strong>c-</strong> On the basis of higher
                              experience in the relevant field than the minimum
                              prescribed in the advertisement.
                            </p>
                            <p>
                              {' '}
                              ग- विज्ञापन में निर्धारित संबंधित क्षेत्र के
                              न्यूनतम अनुभव से उच्चतर अनुभव के आधार पर
                            </p>
                            <p>
                              <strong>d-</strong> By counting experience before
                              or after the acquisition of essential
                              qualifications.
                            </p>
                            <p>
                              {' '}
                              घ- अनिवार्य योग्यता प्राप्त करने से पहले या बाद के
                              अनुभव की गणना करना
                            </p>
                            <p>
                              <strong>e-</strong> By invoking experience even in
                              cases where there is no experience mentioned
                              either as Essential Qualification (EQ) or as
                              Desirable Qualification (DQ).
                            </p>

                            <p>
                              ङ- उन मामलों में भी अनुभव की मांग करना जिनमें
                              आवश्यक योग्यता के रूप में या वांछनीय योग्यता के
                              रूप में अनुभव का उल्लेख नहीं किया गया है ।
                            </p>
                            <p>
                              <strong>f-</strong> By holding a Recruitment Test.
                            </p>
                            <p>च- भर्ती परीक्षण आयोजित करना</p>
                            <p>
                              <strong>
                                THE CANDIDATE SHOULD, THEREFORE, MENTION ALL OF
                                HER/HIS QUALIFICATIONS AND EXPERIENCE IN THE
                                RELEVANT FIELDS OVER AND ABOVE THE MINIMUM
                                QUALIFICATIONS.
                              </strong>{' '}
                              For example, if experience is not essential for
                              the post but an applicant possesses experience,
                              he/she is advised to fill it in relevant field.
                              Only those educational qualifications and
                              experience etc. will be considered for scrutiny /
                              short-listing which are explicitly claimed in the
                              online application.
                            </p>
                            <p>
                              <strong>
                                अतः उम्मीदवार को न्यूनतम योग्यताओं के अतिरिक्त
                                अपनी सभी योग्यताओं और संबंधित क्षेत्रों में
                                प्राप्त अनुभव का उल्लेख करना चाहिए ।
                              </strong>{' '}
                              उदाहरण के लिए यदि पद के लिए अनुभव आवश्यक नहीं है
                              लेकिन आवेदक को अनुभव प्राप्त है तो उसे सलाह दी
                              जाती है कि वह संबंधित क्षेत्र में अनुभव भरें ।
                              संवीक्षा/लघु सूचीबद्ध करने के लिए केवल उन्हीं
                              शैक्षिक योग्यताओं और अनुभव आदि पर विचार किया जाएगा
                              जिनका ऑनलाइन आवेदन में स्पष्ट रूप से दावा किया गया
                              है।
                            </p>
                          </div>
                          <p>
                            <strong>B- </strong>THE CANDIDATES MUST UPLOAD ONLY
                            RELEVANT DOCUMENTS WHEREVER REQUIRED IN THE ONLINE
                            APPLICATION. THE UPLOADING OF IRRELEVANT/ ILLEGIBLE/
                            FABRICATED OR PASSWORD-PROTECTED DOCUMENTS MAY LEAD
                            TO REJECTION OF THEIR APPLICATION APART FROM OTHER
                            APPROPRIATE ACTION AT THE DISCRETION OF THE
                            COMMISSION.
                          </p>
                          <p>
                            ख- उम्मीदवार ऑनलाइन आवेदन में जहां भी अपेक्षित है
                            केवल संगत दस्तावेज ही अपलोड करे । असंगत/अपठनीय/जाली
                            या पासवर्ड द्वारा संरक्षित दस्तावेज अपलो़ड किए जाने
                            पर आयोग के विवेकानुसार अन्य उपयुक्त कार्रवाई के
                            अतिरिक्त उनका आवेदन रद्द किया जा सकता है।
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentPage === 3 && (
                    <div className="">
                      <div id="divToPrint">
                        <h2 className="text-center heading2">
                          <strong>
                            ACTION AGAINST CANDIDATES FOUND GUILTY OF MISCONDUCT
                          </strong>
                        </h2>
                        <h3 className="text-center heading2">
                          कदाचार के दोषी पाए गए उम्मीदवारों के विरूद्ध कार्रवाई
                        </h3>
                        <p>
                          <strong>A-</strong> I duly understand that I should
                          not furnish any particulars that are false or suppress
                          any material information in filling up the application
                          form. I also duly understand that I should in no case
                          correct or alter or otherwise tamper with any entry in
                          a document or its attested/certified copy submitted by
                          me nor should I submit a tampered/fabricated document.
                          If there is any inaccuracy or any discrepancy between
                          two or more such documents or their attested/certified
                          copies, an explanation regarding this discrepancy will
                          be submitted.
                        </p>
                        <p>
                          क- मैं अच्छी तरह समझता हूं / समझती हूं कि मुझे ऐसा कोई
                          भी विवरण प्रस्तुत नहीं करना है जो झूठा है या आवेदन
                          पत्र को भरने की किसी भी महत्वपूर्ण सूचना को छिपाता है।
                          मैं यह भी अच्छी तरह समझता हूं / समझती हूं कि मुझे किसी
                          भी स्थिति में मेरे द्वारा प्रस्तुत दस्तावेज या इसकी
                          साक्ष्यांकित/प्रमाणित प्रति की किसी भी प्रविष्टि को
                          सही या परिवर्तित या अन्यथा छोड़छाड़ नहीं करनी है और न
                          ही मुझे हेर-फेर किया गया/जाली दस्तावेज प्रस्तुत करना
                          है। यदि ऐसे दो या अधिक दस्तावेजों या उनकी सांक्ष्याकित
                          / प्रमाणित प्रतियों के बीच कोई अशुद्धि या कोई विसंगति
                          है तो इस विसंगति के संबंध में स्पष्टीकरण प्रस्तुत किया
                          जाएगा ।
                        </p>
                        <p>
                          <strong>B-</strong> I hereby declare that all the
                          statements made in the application will be true and
                          complete to the best of my knowledge and belief. I
                          understand that action can be taken against me by the
                          Commission if I am declared by them to be guilty of
                          any type for misconduct mentioned herein:
                        </p>
                        <p>
                          ख- मै एतद्दवारा घोषणा करता हूं/करती हूं कि आवेदन में
                          दिया गया पूरा विवरण जहां तक मेरी जानकारी और विश्वास है
                          पूर्ण और सत्य है। मै समझता हूं / समझती हूं कि यदि आयोग
                          द्वारा नीचे उल्लिखित किसी भी प्रकार के कदाचार के लिए
                          मुझे दोषी घोषित किया गया तो उनके द्वारा मेरे विरूद्ध
                          कार्रवाई की जा सकती है ।
                        </p>
                        <p>
                          <strong>C-</strong> I am fully aware that a candidate
                          who is or has been declared by the Commission to be
                          guilty of:
                        </p>
                        <p>
                          ग- मैं इस बारे में पूर्ण रूप से अवगत हूं कि
                          निम्नीलिखित के लिए दोषी अथवा आयोग द्वारा दोषी घोषित
                          उम्मी दवार :-
                        </p>
                        <p>
                          <ul className="list">
                            <li>
                              <p>
                                Obtaining support of his/her candidature by any
                                means, or
                              </p>
                              <p>
                                किसी भी प्रकार से अपनी उम्मीदवारी के लिए समर्थन
                                प्राप्त करना, या
                              </p>
                            </li>
                            <li>
                              <p>Impersonating, or</p>
                              <p>नाम बदल कर परीक्षा देना या</p>
                            </li>
                            <li>
                              <p>Procuring impersonation by any person , or</p>
                              <p>
                                किसी भी व्यक्ति द्वारा प्रतिरूपण प्राप्त करना,
                                या
                              </p>
                            </li>
                            <li>
                              <p>
                                Submitting fabricated documents or documents
                                which have been tampered with, or
                              </p>
                              <p>
                                जाली दस्तावेज या ऐसे दस्तावेज प्रस्तुत करना
                                जिनमें हेर-फेर किया गया हो, या
                              </p>
                            </li>
                            <li>
                              <p>
                                Making statements which are incorrect or false
                                or suppressing material information, or
                              </p>
                              <p>
                                गलत या झूठे वक्तव्य देना या महत्वपूर्ण सूचना को
                                छिपाना ।
                              </p>
                            </li>
                            <li>
                              <p>
                                Resorting to any other irregular or improper
                                means in connection with his/her candidature for
                                the selection, or
                              </p>
                              <p>
                                चयन के लिए अपनी उम्मीदवारी के संबंध में किसी भी
                                अन्य अवैध या अनुचित उपाय का सहारा लेना, या
                              </p>
                            </li>
                            <li>
                              <p>Using unfair means during the test, or</p>
                              <p>
                                परीक्षण के दौरान अनुचित साधनों का उपयोग करना
                              </p>
                            </li>
                            <li>
                              <p>
                                Writing irrelevant matter including obscene
                                language or pornographic matter, in the
                                script(s) , or
                              </p>
                              <p>
                                उत्तर-पुस्तिका में अश्लील भाषा या अश्लील बात
                                सहित असंगत बात लिखना, या
                              </p>
                            </li>
                            <li>
                              <p>
                                Misbehaving in any other manner in the
                                examination hall, or
                              </p>
                              <p>
                                परीक्षा भवन में किसी अन्य तरीके से दुर्व्यवहार
                                करना, या
                              </p>
                            </li>
                            <li>
                              <p>
                                Harassing or doing bodily harm to the staff
                                employed by the Commission for the conduct of
                                their test, or
                              </p>
                              <p>
                                आयोग द्वारा परीक्षा के संचालन के लिए लगाए गए
                                स्टाफ को परेशान करना या उन्हें शारीरिक हानि
                                पहुंचाना, या
                              </p>
                            </li>
                            <li>
                              <p>
                                Bringing mobile phone/Communication device in
                                the examination Hall/Interview room, or
                              </p>
                              <p>
                                परीक्षा भवन/साक्षात्कार कक्ष में मोबाइल
                                फोन/संचार यंत्र लेकर आना, या
                              </p>
                              <p>
                                Attempting to commit or, as the case may be,
                                abetting the Commission of all or any of the
                                acts specified in the foregoing clauses
                                <br />
                                पूर्ववर्ती खंडों में आयोग द्वारा विनिर्दिष्ट सभी
                                या किसी भी कार्य को यथास्थिति करने का प्रयास
                                करना या करने के लिए उकसाना
                              </p>
                            </li>
                            <p>
                              may, in addition to rendering himself/herself
                              liable to criminal persecution, be liable:
                              <br />
                              स्वयं को आपराधिक उत्पीड़न के लिए उत्तरदायी बनाए
                              जाने के अतिरिक्तः
                            </p>
                            <p>
                              <strong>(a)</strong> to be disqualified by the
                              Commission from selection for which he/she is a
                              candidate, and/or
                              <br />
                              (क) आयोग द्वारा चयन, जिसके लिए वह उम्मीदवार है, के
                              लिए उसे अयोग्य ठहरा दिया जाएगा, और/या
                            </p>
                            <p>
                              <strong>(b)</strong> to be debarred either
                              permanently or for a specified period:-.
                              <br />
                              (ख) उसे स्थायी रूप से या विनिर्दिष्ट अवधि के लिए
                              :-
                            </p>
                            <p>
                              <ul>
                                <li>
                                  <p>
                                    by the Commission from any examination or
                                    selection held by them
                                  </p>
                                  <p>
                                    आयोग दवारा ली जाने वाली किसी भी परीक्षा या
                                    चयन से
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    by the Central Government from any
                                    employment under them, and
                                  </p>
                                  <p>
                                    केन्द्र सरकार द्वारा उनके अधीन आने वाले किसी
                                    भी रोजगार से वंचित कर दिया जाएगा, और
                                  </p>
                                </li>
                              </ul>
                            </p>
                            <p>
                              <strong>(c)</strong> if he/she is already in
                              service under Government to disciplinary action
                              under the appropriate rules.
                            </p>
                            <p>
                              (ग) यदि वह पहले से सरकारी सेवा में है तो उपयुक्त
                              नियमों के तहत अनुशासनिक कार्रवाई की जाएगी ।
                            </p>
                          </ul>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            }
          />
        </Container>
        {currentPage === 1 && (
          <div className="footerBtn text-center p-3">
            <button
              className="btn btn-info"
              onClick={() => handlePrint()}
              type="button"
            >
              Print/प्रिंट
            </button>{' '}
            <button className="btn btn-dark" onClick={nextPage} type="button">
              Next/आगे बढ़े
            </button>
          </div>
        )}
        {currentPage === 2 && (
          <div className="footerBtn text-center p-3">
            <button
              className="btn btn-info"
              onClick={handlePrint}
              type="button"
            >
              Print/प्रिंट
            </button>{' '}
            <button
              className="btn btn-light"
              onClick={previousPage}
              type="button"
            >
              {' '}
              Previous/पीछे जाएं{' '}
            </button>{' '}
            <button className="btn btn-dark" onClick={nextPage} type="button">
              Next/आगे बढ़े
            </button>
          </div>
        )}
        {currentPage === 3 && (
          <div className="footerBtn p-3">
            <div>
              <p>
                <input type="checkbox" onChange={() => setChecked(true)} /> I
                hereby declare that I have read and understood the above
                instructions carefully and I accept all the terms and conditions
                mentioned hereinabove. I also declare that I meet the
                eligibility conditions (Education, Experience etc.) stipulated
                in the detailed advertisement.
              </p>
              <p>
                मै एतद् द्वारा घोषणा करता/करती हूं कि मैने उपर्युक्त अनुदेशों को
                पढ़ लिया है और समझ लिया है तथा मुझे यहां ऊपर उल्लिखित सभी शर्तें
                और निबंधन स्वीकार है। मै यह भी घोषणा करता / करती हूं कि मै
                विस्तृत विज्ञापन में निर्धारित पात्रता शर्तों (शिक्षा, अनुभव
                आदि) को पूरा करता हूं/ करती हूं ।
              </p>
            </div>
            <div className="text-center">
              <button
                className="btn btn-light"
                onClick={previousPage}
                type="button"
              >
                {' '}
                Previous/पीछे जाएं{' '}
              </button>{' '}
              <button
                className="btn btn-info"
                onClick={() => handlePrint()}
                type="button"
              >
                Print/प्रिंट
              </button>{' '}
              <button className="btn btn-dark" onClick={handleProceed}>
                Proceed
              </button>
            </div>
          </div>
        )}
      </PostStyle>
    </>
  )
}

export default Instruction
