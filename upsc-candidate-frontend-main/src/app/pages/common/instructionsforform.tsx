/* eslint-disable */

type NotificationStyle = {
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | undefined
  top: string
  right: string
  color: string
  padding: string
  zIndex: string
  fontSize: string
  background: string
}

function LatestNotification() {
  const notificationStyle: NotificationStyle = {
    position: 'absolute',
    top: '-30px', // Adjust the top position as needed
    right: '10px', // Adjust the right position as needed
    color: '#a59c9c',
    padding: '10px',
    zIndex: '9999',
    fontSize: '22px',
    background: '#fff',
  }

  return <div style={notificationStyle}>Latest Notification</div>
}
function Instructionsforform() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          border: '2px solid blue',
          margin: '50px',
        }}
      >
        <LatestNotification />
        <div
          className="bodydiv"
          style={{
            paddingLeft: '20px',
            paddingRight: '30px',
            fontSize: '18px',
          }}
        >
          <p style={{ textAlign: 'center' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p style={{ color: '#0000FF' }}>
              <strong>
                Personal Assistant in Employee Provident Fund Organisation -
                2023
              </strong>
            </p>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong style={{ color: '#0000FF' }} />
            <br />
          </p>

          <center>
            <p className="Pageheading" style={{ fontSize: '25px' }}>
              <u>
                <strong>
                  Important Instructions to fill Online Application Form
                </strong>
              </u>
              <u>
                <strong>
                  <br />
                  ऑनलाइन आवेदन - प्रपत्र भरने के बारे में महत्वपूर्ण अनुदेश
                </strong>
              </u>
            </p>
          </center>

          <ol style={{ textAlign: 'justify' }}>
            <p style={{ textAlign: 'justify' }} />
            <li>
              Candidates are advised to go through the instructions carefully
              before filling up the application form. <br />
              उम्मीदवारों को सुझाव दिया जाता है कि वे आवेदन प्रपत्र भरने से
              पूर्व अनुदेशों को ध्यानपूर्वक पढ़ लें।
            </li>

            <br />
            <li>
              Online submission of application can only be made at website
              <strong>
                <a href="https://upsconline.nic.in/">
                  https://upsconline.nic.in
                </a>
              </strong>
              . Detailed instructions are available at the site. Candidate
              should read the instructions carefully before making any entry or
              selecting options. Candidate should supply all the required
              details while filling up the online form. Mandatory fields are
              marked with
              <span style={{ color: '#FF0000' }}>*(asterisk)</span> sign. <br />
              आवेदन पत्र को केवल
              <strong>
                <a href="https://upsconline.nic.in/">
                  https://upsconline.nic.in
                </a>
              </strong>
              वेबसाइट पर ऑनलाइन जमा किया जा सकता है। विस्तृत अनुदेश वेबसाइट पर
              उपलब्ध हैं। उम्मीदवार को कोई भी प्रविष्टि करने अथवा विकल्पों का
              चुनाव करने से पूर्व अनुदेशों को ध्यानपूर्वक पढ़ लेना चाहिए। ऑनलाइन
              आवेदन पत्र भरते समय उम्मीदवार को सभी आवश्यक विवरण देने चाहिए।
              अनिवार्य विवरणों को{' '}
              <span style={{ color: '#FF0000' }}>*(तारांकित)</span> चिन्ह से
              अंकित किया गया है।
              <br />
            </li>
            <br />
            <li>
              <b>
                Candidate can make correction(s) in any field(s) (except OTR
                details) of the application form for this examination from next
                day of the closure of the application window of this Examination
                <br />
                उम्मीदवार इस परीक्षा के लिए आवेदन विंडो बंद होने के अगले दिन से
                आवेदन पत्र के किसी भी क्षेत्र (ओ.टी.आर. विवरण को छोड़कर) में
                सुधार कर सकते हैं।
              </b>
              <br />
            </li>
            <br />
            <li>
              Online Application Form is available in English and in Hindi
              Language but it can only be filled in English Language.
              <br />
              ऑनलाइन आवेदन पत्र अंग्रेज़ी एवं हिंदी भाषा में उपलब्ध है, लेकिन यह
              केवल अंग्रेजी भाषा में भरा जा सकता है।
            </li>
            <br />
            <li>
              The filling of online application contains two parts. <br />
              ऑनलाइन आवेदन पत्र दो भागों में भरा जाता है।
              <p />
            </li>
            <li>
              <p>
                In Part I registration, candidate will have to fill basic
                information. On submission of details, candidate will be
                prompted to check the details and make correction, if any, in
                the application.
                <br />
                पंजीकरण के भाग-I में, उम्मीदवार को सामान्य जानकारी देनी होगी।
                विवरण प्रस्तुत करने पर, उम्मीदवार से दिए गए विवरण की जांच करने
                और आवेदन में संशोधन, यदि कोई हो, करने के लिए कहा जाएगा।
              </p>
            </li>
            <li>
              Part-II Registration consists of following Stages.
              <br />
              भाग- II पंजीकरण में निम्न चरण होते है। <br />
              filling up Payment details (except for fee exempted candidates),
              uploading of Photograph, Signature, selection of examination
              centre and Agreeing to Declaration.
              <br />
              भुगतान विवरण भरना (शुल्क छूट प्राप्त अभ्यर्थियों को छोड़कर), फोटो,
              हस्ताक्षर, परीक्षा केन्द्र का चयन और घोषणा सहमति करना।
            </li>
            <li>
              <p>
                Registration of Part-I &amp; Part-II will be treated as valid
                from 06-01-2023 to 30-11-2023 (6:00 P.M.).
                <br />
                भाग-I एवं भाग-II के दिनांक 06-01-2023 से 30-11-2023 के शाम 6:00
                बजे तक के पंजीकरण को वैध माना जाएगा |
              </p>
            </li>
            <li>
              Candidate must press “I agree” button after he /she finds that
              information supplied by him /her is in order.
              <br />
              जब उम्मीदवार इस बात से संतुष्ट हो जाता / जाती है कि उसके द्वारा
              प्रदान की गई जानकारी सही क्रम में है और कोई संशोधन करने की
              आवश्यकता नहीं है तो वह “मैं सहमत हूं ” बटन दबा सकता / सकती है।
            </li>
            <br />
            <li>
              When “I agree” button is pressed, a page with Registration Number
              will be generated. Please note down Registration Number or take a
              print out of the page. The application is incomplete without
              payment, uploading of scanned photograph and signature selection
              of centre and agree to declaration.
              <br />
              “मैं सहमत हूं” बटन दबाए जाने पर एक पृष्‍ठ के साथ पंजीकरण संख्या
              प्राप्त होगा। कृपया पंजीकरण सं. नोट कर लें अथवा इस पृष्ठ का एक
              प्रिंट निकाल लें। भुगतान, स्कैन की गई फोटोग्राफ और हस्ताक्षर को
              अपलोड किए बिना, केन्द्र का चयन तथा घोषणा सहमति के बिना आवेदन को
              अपूर्ण माना जाएगा।
            </li>
            <br />
            <li>
              Scanned photograph should be in JPG format and must be uploaded
              first. The digital size of file should not exceed 300 KB each and
              must not be less than 20 KB and resolution 350 pixels (Width) X
              350 pixels (Height) minimum , 1000 pixels (Width) X 1000 pixels
              (Height) maximum and Bit Depth of image file should be 24 bit.
              <br />
              स्कैन की गई फोटोग्राफ जेपीजी प्रारूप में होनी चाहिए और पहले अपलोड
              होनी चाहिए। फाइल का डिजिटल आकार 300 KB से अधिक नहीं होना चाहिए और
              20 KB से कम नहीं होना चाहिए और रिजल्यूशन 350 पिक्सेल (चौड़ाई) X
              350 पिक्सल (ऊंचाई) न्यूनतम, 1000 पिक्सेल (चौड़ाई) X 1000 पिक्सल
              (ऊंचाई) अधिकतम तथा इमेज फाइल की बिट डेप्थ 24 बिट होनी चाहिए।
            </li>
            <br />
            <li>
              After uploading your photograph then upload your scanned signature
              in JPG format. The digital size of each file should not exceed 300
              KB and must not be less than 20 KB and resolution 350 pixels
              (Width) X 350 pixels (Height) minimum , 1000 pixels (Width) X 1000
              pixels (Height) maximum and Bit Depth of image file should be 24
              bit.
              <br />
              अपनी तस्वीर अपलोड करने के बाद अपने स्कैन किए हुए हस्ताक्षर को
              जेपीजी प्रारूप में अपलोड करें। प्रत्ये‍क फाइल का डिजिटल आकार 300
              KB से अधिक नहीं होना चाहिए और 20 KB से कम नहीं होना चाहिए और
              रिजल्यूशन 350 पिक्सेल (चौड़ाई) X 350 पिक्सल (ऊंचाई) न्यूनतम, 1000
              पिक्सेल (चौड़ाई) X 1000 पिक्सल (ऊंचाई) अधिकतम तथा इमेज फाइल की बिट
              डेप्थ 24 बिट होनी चाहिए।
            </li>
            <br />
            <li>
              Next upload your photo identity card document in PDF format only.
              The digital size of PDF file should not exceed 300 KB and must not
              be less than 20 KB.
              <br />
              <br />
            </li>
            <li>
              If you are selecting the assistive device other than listed,
              upload scanned 'other assistive device' in JPG format. The digital
              size of file should not exceed 300 KB each and must not be less
              than 20 KB and resolution 350 pixels (Width) X 350 pixels (Height)
              minimum , 1000 pixels (Width) X 1000 pixels (Height) maximum and
              Bit Depth of image file should be 24 bit.
              <br />
              यदि आप सूचीबद्ध के अलावा अन्य सहायक उपकरण का चयन कर रहे हैं, तो
              स्कैन किए गए 'अन्य सहायक उपकरण' को JPG प्रारूप में अपलोड करें।
              फ़ाइल का डिजिटल आकार 300 केबी से अधिक नहीं होना चाहिए और यह 20
              केबी से कम नहीं होना चाहिए और रिज़ॉल्यूशन 350 पिक्सल (चौड़ाई) एक्स
              350 पिक्सल (ऊंचाई) न्यूनतम, 1000 पिक्सेल (चौड़ाई) एक्स 1000 पिक्सल
              (ऊंचाई) अधिकतम और बिट गहराई छवि फ़ाइल 24 बिट होनी चाहिए।
            </li>
            <br />
            <li>
              Candidates can pay application fee online, through Credit/Debit
              Card/Net banking/UPI facility of any Banks or by cash challan in
              SBI bank.
              <br />
              अभ्यर्थी आवेदन शुल्क का भुगतान किसी भी बैंक के क्रेडिट / डेबिट
              कार्ड / नेट बैंकिंग / यू.पी.आई. सुविधा के माध्यम से या एसबीआई बैंक
              में नकद चालान के माध्यम से कर सकते हैं।
            </li>
            <br />
            <li>
              To pay fee in cash, candidate should take printout of challan
              generated online after completion of registration. Candidate may
              go to nearest SBI branch for depositing fee after 24 hours of
              generation of challan. "Pay by cash" mode option will be
              deactivated at 23.59 hours of 29-11-2023 i.e. one day before the
              closing date. However, applicants who have generated their
              Pay-in-slip before it is de-activated may pay at the counter of
              SBI Branch during banking hours on the closing date of
              application.
              <br />
              शुल्क का नगद भुगतान करने के लिए, उम्मीदवार को पंजीकरण पूरा करने के
              उपरांत ऑनलाइन प्राप्त किए गए चालान का प्रिंटआउट निकाल लेना चाहिए।
              चालान प्राप्त करने के 24 घंटे बाद उम्मीदवार भारतीय स्टेट बैंक की
              निकटतम शाखा पर जाकर शुल्क जमा कर सकते हैं। "नकद भुगतान" विकल्प
              29-11-2023 के 23.59 घंटे पर निष्क्रिय हो जाएगा हालांकि, आवेदक
              जिन्होंने चालान निष्क्रिय होने से पहले चालान प्राप्त किया है, वे
              आवेदन की अंतिम तिथि पर बैंकिंग समय के दौरान एसबीआई शाखा के काउंटर
              पर भुगतान कर सकते हैं।
            </li>
            <br />
            <li>
              Those who want to pay online through SBI portal can do so directly
              during submission of online form.
              <br />
              जो उम्मीदवार भारतीय स्टेट बैंक पोर्टल के माध्यम से ऑनलाइन भुगतान
              करना चा‍हते हैं, वे ऑनलाइन फार्म को भरने करने के उपरान्त सीधे ही
              शुल्क का भुगतान कर सकते हैं।
            </li>
            <br />
            <li>
              Those who are exempted from payment of fee can skip steps 14 to
              16.
              <br />
              जिन उम्मीदवारों को शुल्क के भुगतान करने से छूट प्राप्त है, वे क्रम
              संख्या् 14 से 16 को छोड सकते हैं।
            </li>
            <br />
            <li>
              Please provide the photo identity card number and upload copy of
              the same in Online Application Form and remember to carry it at
              the time of Personality Test/Examination at the venue. <br />
              कृपया ऑनलाइन आवेदन पत्र में फोटो पहचान पत्र संख्या और उसी की कॉपी
              अपलोड करें और साक्षात्कार/परीक्षा स्थल के समय भी इसे ही ले जाना
              आवश्यक है।
            </li>
            <br />
            <li>
              On successful completion of your complete application, an
              auto-generated email message will be sent on your registered
              email-id. In case email is not received by you please check /
              ensure that submission of Part-II of the Application has been made
              by you.
              <br />
              आपके संपूर्ण आवेदन के सफलतापूर्वक जमा होने के पश्चात्, आपके
              पंजीकृत ई-मेल आईडी पर एक स्वचालित रूप से बनी ई-मेल संदेश भेजी
              जाएगी। यदि आपको ई-मेल प्राप्त नहीं होती है तो कृपया जांच/सुनिश्चित
              करें कि आवेदन का भाग-II आपके द्वारा जमा किया गया है।
            </li>
            <br />
          </ol>
        </div>
        <p
          id="error"
          style={{ display: 'none', fontSize: '12px', textAlign: 'center' }}
        >
          <strong style={{ color: '#f00' }}>
            IT IS ADVISED THAT THE CANDIDATE MAY TAKE PRINT OUT OF 'IMPORTANT
            INSTRUCTIONS TO THE CANDIDATE' BEFORE FILLING FORM REGISTRATION
            PART-I & PART-II AND READ THE SAME CAREFULLY.
            <br />
            उम्मीदवारों को सलाह दी जाती है कि वे पंजीकरण भाग-I एवं भाग-II को
            भरने से पूर्व ‘उम्मीजदवारों के लिए महत्व्पूर्ण अनुदेश’ का प्रिंटआउट
            निकाल लें और ध्यानपूर्वक पढ़ लें।
          </strong>
        </p>
      </div>
      <p style={{ textAlign: 'center' }}>
        <strong style={{ fontSize: '16px' }}>
          Have You Read & Understood all 'Important Instructions and{' '}
          <a
            href="http://10.248.181.140/upsc/OTRP/candidate/download1.php?type=ni&file=INSTR_STENO2023.html"
            target="_blank"
          >
            Detailed Instructions
          </a>
          '.
        </strong>
        <br />
      </p>
      <p style={{ textAlign: 'center', fontSize: '16px' }}>
        क्या आपने सभी ‘महत्वपूर्ण अनुदेश और{' '}
        <a
          href="http://10.248.181.140/upsc/OTRP/candidate/download1.php?type=ne&file=INSTR_STENO2023.pdf"
          target="_blank"
        >
          विस्तृत अनुदेश
        </a>
        ’ पढ़ तथा समझ लिए हैं।
        <br />
        <br />
        <a
          href="/"
          /// href="http://10.248.181.140/upsc/OTRP/candidate/tpform1.php?exam_code=STENO&year=2023&notice_no=54/2023-PA/EPFO&notice_date=06-01-2023&id=TW9xcmQzeFdHQVVFNGJtRkZxZVRXZz09&appmode=Ykk2MnF1SWRiZHUzT2JDdkhtelFrQT09"
          className="button2"
          style={{ color: '#8c8484' }}
        >
          Yes / हां
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          href="/"
          //href="http://10.248.181.140/upsc/OTRP/candidate/guideline.php?exam_code=STENO&year=2023&notice_no=54/2023-PA/EPFO&notice_date=06-01-2023&id=TW9xcmQzeFdHQVVFNGJtRkZxZVRXZz09&appmode=Ykk2MnF1SWRiZHUzT2JDdkhtelFrQT09#disagree"
          // onClick={() => noclick()}
          className="button2"
          style={{ color: '#8c8484' }}
        >
          No / नहीं
        </a>
      </p>
      <br />
      <p style={{ textAlign: 'center' }}>
        <img
          src="./UPSC - PART-I Registration.._files/footer.gif"
          style={{ marginBottom: '0.5cm' }}
          alt=""
        />
      </p>
    </>
  )
}

export default Instructionsforform
