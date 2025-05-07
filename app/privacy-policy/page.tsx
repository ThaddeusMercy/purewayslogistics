"use client";

import React, { useEffect, useState } from 'react';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>('interpretation');
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      let currentSectionId = '';
      let minDistance = Number.MAX_VALUE;
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const distance = Math.abs(sectionTop - 100); // 100px offset for better UX
        
        if (distance < minDistance) {
          minDistance = distance;
          currentSectionId = section.id;
        }
      });
      
      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isActive = (sectionId: string) => {
    return activeSection === sectionId ? 'text-[#FF6B00]' : '';
  };
  
  const isActiveParent = (sectionId: string, childIds: string[]) => {
    if (activeSection === sectionId) return true;
    return childIds.some(id => activeSection === id);
  };
  return (
    <main className="container-custom py-12 md:py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Navigation Dropdown */}
        <div className="lg:hidden w-full mb-6">
          <div className="bg-black text-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <h3 className="text-lg font-bold">Table of Contents</h3>
              <svg
                className={`w-6 h-6 transition-transform ${mobileNavOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {mobileNavOpen && (
              <nav className="flex flex-col space-y-2 mt-4">
                <a href="#interpretation" className={`block transition-colors font-medium ${isActive('interpretation') ? 'text-[#FF6B00]' : ''}`}>Interpretation and Definit...</a>
                <a href="#interpretation-section" className={`block transition-colors pl-6 ${isActive('interpretation-section') ? 'text-[#FF6B00]' : ''}`}>Interpretation</a>
                <a href="#definitions-section" className={`block transition-colors pl-6 ${isActive('definitions-section') ? 'text-[#FF6B00]' : ''}`}>Definitions</a>
                <a href="#collecting" className={`block transition-colors font-medium mt-4 ${isActive('collecting') ? 'text-[#FF6B00]' : ''}`}>Collecting and Using You...</a>
                <a href="#types-of-data" className={`block transition-colors pl-6 ${isActive('types-of-data') ? 'text-[#FF6B00]' : ''}`}>Types of Data Collected</a>
                <a href="#personal-data" className={`block transition-colors pl-12 ${isActive('personal-data') ? 'text-[#FF6B00]' : ''}`}>Personal Data</a>
                <a href="#usage-data" className={`block transition-colors pl-12 ${isActive('usage-data') ? 'text-[#FF6B00]' : ''}`}>Usage Data</a>
                <a href="#tracking" className={`block transition-colors pl-12 ${isActive('tracking') ? 'text-[#FF6B00]' : ''}`}>Tracking Technologie...</a>
                <a href="#use" className={`block transition-colors font-medium mt-4 ${isActive('use') ? 'text-[#FF6B00]' : ''}`}>Use of Your Personal D...</a>
                <a href="#retention" className={`block transition-colors font-medium mt-4 ${isActive('retention') ? 'text-[#FF6B00]' : ''}`}>Retention of Your Perso...</a>
                <a href="#transfer" className={`block transition-colors font-medium mt-4 ${isActive('transfer') ? 'text-[#FF6B00]' : ''}`}>Transfer of Your Person...</a>
                <a href="#delete" className={`block transition-colors font-medium mt-4 ${isActive('delete') ? 'text-[#FF6B00]' : ''}`}>Delete Your Personal D...</a>
                <a href="#disclosure" className={`block transition-colors font-medium mt-4 ${isActive('disclosure') ? 'text-[#FF6B00]' : ''}`}>Disclosure of Your Pers...</a>
                <a href="#business-transactions" className={`block transition-colors pl-6 ${isActive('business-transactions') ? 'text-[#FF6B00]' : ''}`}>Business Transactions</a>
                <a href="#law-enforcement" className={`block transition-colors pl-6 ${isActive('law-enforcement') ? 'text-[#FF6B00]' : ''}`}>Law enforcement</a>
                <a href="#legal-requirements" className={`block transition-colors pl-6 ${isActive('legal-requirements') ? 'text-[#FF6B00]' : ''}`}>Other legal requirem...</a>
                <a href="#security" className={`block transition-colors font-medium mt-4 ${isActive('security') ? 'text-[#FF6B00]' : ''}`}>Security of Your Person...</a>
                <a href="#children" className={`block transition-colors font-medium mt-4 ${isActive('children') ? 'text-[#FF6B00]' : ''}`}>Children's Privacy</a>
                <a href="#links" className={`block transition-colors font-medium mt-4 ${isActive('links') ? 'text-[#FF6B00]' : ''}`}>Links to Other Websites</a>
                <a href="#changes" className={`block transition-colors font-medium mt-4 ${isActive('changes') ? 'text-[#FF6B00]' : ''}`}>Changes to this Privacy ...</a>
                <a href="#contact" className={`block transition-colors font-medium mt-4 ${isActive('contact') ? 'text-[#FF6B00]' : ''}`}>Contact Us</a>
              </nav>
            )}
          </div>
        </div>
        
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-1/4 sticky top-24 h-full">
          <div className="bg-black text-white rounded-lg shadow-lg p-4 h-full">
            <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#interpretation" className={`block transition-colors font-medium ${isActive('interpretation') ? 'text-[#FF6B00]' : ''}`}>Interpretation and Definit...</a>
              
              <a href="#interpretation-section" className={`block transition-colors pl-6 ${isActive('interpretation-section') ? 'text-[#FF6B00]' : ''}`}>Interpretation</a>
              
              <a href="#definitions-section" className={`block transition-colors pl-6 ${isActive('definitions-section') ? 'text-[#FF6B00]' : ''}`}>Definitions</a>
              
              <a href="#collecting" className={`block transition-colors font-medium mt-4 ${isActive('collecting') ? 'text-[#FF6B00]' : ''}`}>Collecting and Using You...</a>
              
              <a href="#types-of-data" className={`block transition-colors pl-6 ${isActive('types-of-data') ? 'text-[#FF6B00]' : ''}`}>Types of Data Collected</a>
              
              <a href="#personal-data" className={`block transition-colors pl-12 ${isActive('personal-data') ? 'text-[#FF6B00]' : ''}`}>Personal Data</a>
              
              <a href="#usage-data" className={`block transition-colors pl-12 ${isActive('usage-data') ? 'text-[#FF6B00]' : ''}`}>Usage Data</a>
              
              <a href="#tracking" className={`block transition-colors pl-12 ${isActive('tracking') ? 'text-[#FF6B00]' : ''}`}>Tracking Technologie...</a>
              
              <a href="#use" className={`block transition-colors font-medium mt-4 ${isActive('use') ? 'text-[#FF6B00]' : ''}`}>Use of Your Personal D...</a>
              
              <a href="#retention" className={`block transition-colors font-medium mt-4 ${isActive('retention') ? 'text-[#FF6B00]' : ''}`}>Retention of Your Perso...</a>
              
              <a href="#transfer" className={`block transition-colors font-medium mt-4 ${isActive('transfer') ? 'text-[#FF6B00]' : ''}`}>Transfer of Your Person...</a>
              
              <a href="#delete" className={`block transition-colors font-medium mt-4 ${isActive('delete') ? 'text-[#FF6B00]' : ''}`}>Delete Your Personal D...</a>
              
              <a href="#disclosure" className={`block transition-colors font-medium mt-4 ${isActive('disclosure') ? 'text-[#FF6B00]' : ''}`}>Disclosure of Your Pers...</a>
              
              <a href="#business-transactions" className={`block transition-colors pl-6 ${isActive('business-transactions') ? 'text-[#FF6B00]' : ''}`}>Business Transactions</a>
              
              <a href="#law-enforcement" className={`block transition-colors pl-6 ${isActive('law-enforcement') ? 'text-[#FF6B00]' : ''}`}>Law enforcement</a>
              
              <a href="#legal-requirements" className={`block transition-colors pl-6 ${isActive('legal-requirements') ? 'text-[#FF6B00]' : ''}`}>Other legal requirem...</a>
              
              <a href="#security" className={`block transition-colors font-medium mt-4 ${isActive('security') ? 'text-[#FF6B00]' : ''}`}>Security of Your Person...</a>
              
              <a href="#children" className={`block transition-colors font-medium mt-4 ${isActive('children') ? 'text-[#FF6B00]' : ''}`}>Children's Privacy</a>
              
              <a href="#links" className={`block transition-colors font-medium mt-4 ${isActive('links') ? 'text-[#FF6B00]' : ''}`}>Links to Other Websites</a>
              
              <a href="#changes" className={`block transition-colors font-medium mt-4 ${isActive('changes') ? 'text-[#FF6B00]' : ''}`}>Changes to this Privacy ...</a>
              
              <a href="#contact" className={`block transition-colors font-medium mt-4 ${isActive('contact') ? 'text-[#FF6B00]' : ''}`}>Contact Us</a>
            </nav>
          </div>
        </div>

        <div className="lg:w-3/4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: May 06, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section id="interpretation">
              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use and
                disclosure of Your information when You use the Service and tells You about Your privacy
                rights and how the law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By using the Service, You
                agree to the collection and use of information in accordance with this Privacy Policy. This
                Privacy Policy has been created with the help of the Privacy Policy Generator.
              </p>
            </section>

            <section id="interpretation" className="mt-8">
              <h2 className="text-2xl font-bold">Interpretation and Definitions</h2>
              
              <h3 className="text-xl font-bold mt-6" id="interpretation-section">Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the
                following conditions. The following definitions shall have the same meaning regardless of
                whether they appear in singular or in plural.
              </p>
              
              <h3 className="text-xl font-bold mt-6" id="definitions-section">Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account</strong> means a unique account created for You to access our Service or parts of
                  our Service.
                </li>
                <li>
                  <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control
                  with a party, where "control" means ownership of 50% or more of the shares, equity
                  interest or other securities entitled to vote for election of directors or other
                  managing authority.
                </li>
                <li>
                  <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this
                  Agreement) refers to Pureways Logistics LTD, Liverpool UK.
                </li>
                <li>
                  <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other
                  device by a website, containing the details of Your browsing history on that website
                  among its many uses.
                </li>
                <li>
                  <strong>Country</strong> refers to: United Kingdom
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone
                  or a digital tablet.
                </li>
                <li>
                  <strong>Personal Data</strong> is any information that relates to an identified or identifiable
                  individual.
                </li>
                <li>
                  <strong>Service</strong> refers to the Website.
                </li>
                <li>
                  <strong>Service Provider</strong> means any natural or legal person who processes the data on
                  behalf of the Company. It refers to third-party companies or individuals employed by
                  the Company to facilitate the Service, to provide the Service on behalf of the
                  Company, to perform services related to the Service or to assist the Company in
                  analyzing how the Service is used.
                </li>
                <li>
                  <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the
                  Service or from the Service infrastructure itself (for example, the duration of a page visit).
                </li>
                <li>
                  <strong>Website</strong> refers to Pureways Logistics LTD, accessible from <a href="https://pureway-logistics.co.uk/" className="text-blue-600 hover:underline">https://pureway-logistics.co.uk/</a>
                </li>
                <li>
                  <strong>You</strong> means the individual accessing or using the Service, or the company, or other
                  legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </li>
              </ul>
            </section>

            <section id="collecting" className="mt-8">
              <h2 className="text-2xl font-bold">Collecting and Using Your Personal Data</h2>
              
              <h3 className="text-xl font-bold mt-6" id="types-of-data">Types of Data Collected</h3>
              
              <h4 className="text-lg font-bold mt-4" id="personal-data">Personal Data</h4>
              <p>
                While using Our Service, We may ask You to provide Us with certain personally identifiable
                information that can be used to contact or identify You. Personally identifiable information
                may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6">
                <li>Email address</li>
                <li>Usage Data</li>
              </ul>
              
              <h4 className="text-lg font-bold mt-4" id="usage-data">Usage Data</h4>
              <p>
                Usage Data is collected automatically when using the Service.
              </p>
              <p>
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP
                address), browser type, browser version, the pages of our Service that You visit, the time
                and date of Your visit, the time spent on those pages, unique device identifiers and other
                diagnostic data.
              </p>
              <p>
                When You access the Service by or through a mobile device, We may collect certain
                information automatically, including, but not limited to, the type of mobile device You use,
                Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating
                system, the type of mobile Internet browser You use, unique device identifiers and other
                diagnostic data.
              </p>
              <p>
                We may also collect information that Your browser sends whenever You visit our Service or
                when You access the Service by or through a mobile device.
              </p>
              
              <h4 className="text-lg font-bold mt-4" id="tracking">Tracking Technologies and Cookies</h4>
              <p>
                We use Cookies and similar tracking technologies to track the activity on Our Service and
                store certain information. Tracking technologies used are beacons, tags, and scripts to
                collect and track information and to improve and analyze Our Service. The technologies We
                use may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can
                  instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.
                  However, if You do not accept Cookies, You may not be able to use some parts of our
                  Service. Unless you have adjusted Your browser setting so that it will refuse Cookies,
                  our Service may use Cookies.
                </li>
                <li>
                  <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small
                  electronic files known as web beacons (also referred to as clear gifs, pixel tags, and
                  single-pixel gifs) that permit the Company, for example, to count users who have visited
                  those pages or opened an email and for other related website statistics (for example,
                  recording the popularity of a certain section and verifying system and server integrity).
                </li>
              </ul>
              <p>
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your
                personal computer or mobile device when You go offline, while Session Cookies are deleted
                as soon as You close Your web browser.
              </p>
              <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Necessary / Essential Cookies</strong><br />
                  Type: Session Cookies<br />
                  Administered by: Us<br />
                  Purpose: These Cookies are essential to provide You with services available through the
                  Website and to enable You to use some of its features. They help to authenticate users
                  and prevent fraudulent use of user accounts. Without these Cookies, the services that
                  You have asked for cannot be provided, and We only use these Cookies to provide You
                  with those services.
                </li>
                <li>
                  <strong>Cookies Policy / Notice Acceptance Cookies</strong><br />
                  Type: Persistent Cookies<br />
                  Administered by: Us<br />
                  Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                </li>
                <li>
                  <strong>Functionality Cookies</strong><br />
                  Type: Persistent Cookies<br />
                  Administered by: Us<br />
                  Purpose: These Cookies allow us to remember choices You make when You use the Website,
                  such as remembering your login details or language preference. The purpose of these
                  Cookies is to provide You with a more personal experience and to avoid You having to
                  re-enter your preferences every time You use the Website.
                </li>
              </ul>
            </section>

            <section id="use" className="mt-8">
              <h2 className="text-2xl font-bold">Use of Your Personal Data</h2>
              <p>The Company may use Personal Data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
                </li>
                <li>
                  <strong>To manage Your Account</strong>: to manage Your registration as a user of the Service. The
                  Personal Data You provide can give You access to different functionalities of the
                  Service that are available to You as a registered user.
                </li>
                <li>
                  <strong>For the performance of a contract</strong>: the development, compliance and undertaking of
                  the purchase contract for the products, items or services You have purchased or of any
                  other contract with Us through the Service.
                </li>
                <li>
                  <strong>To contact You</strong>: To contact You by email, telephone calls, SMS, or other equivalent
                  forms of electronic communication, such as a mobile application's push notifications
                  regarding updates or informative communications related to the functionalities,
                  products or contracted services, including the security updates, when necessary or
                  reasonable for their implementation.
                </li>
                <li>
                  <strong>To provide You</strong> with news, special offers and general information about other
                  goods, services and events which we offer that are similar to those that you have
                  already purchased or enquired about unless You have opted not to receive such
                  information.
                </li>
                <li>
                  <strong>To manage Your requests</strong>: To attend and manage Your requests to Us.
                </li>
                <li>
                  <strong>For business transfers</strong>: We may use Your information to evaluate or conduct a
                  merger, divestiture, restructuring, reorganization, dissolution, or other sale or
                  transfer of some or all of Our assets, whether as a going concern or as part of
                  bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about
                  our Service users is among the assets transferred.
                </li>
                <li>
                  <strong>For other purposes</strong>: We may use Your information for other purposes, such as data
                  analysis, identifying usage trends, determining the effectiveness of our promotional
                  campaigns and to evaluate and improve our Service, products, services, marketing and
                  your experience.
                </li>
              </ul>
              
              <p className="mt-4">We may share Your personal information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>With Service Providers</strong>: We may share Your personal information with Service
                  Providers to monitor and analyze the use of our Service, to contact You.
                </li>
                <li>
                  <strong>For business transfers</strong>: We may share or transfer Your personal information in
                  connection with, or during negotiations of, any merger, sale of Company assets,
                  financing, or acquisition of all or a portion of Our business to another company.
                </li>
                <li>
                  <strong>With Affiliates</strong>: We may share Your information with Our affiliates, in which case
                  we will require those affiliates to honor this Privacy Policy. Affiliates include Our
                  parent company and any other subsidiaries, joint venture partners or other companies
                  that We control or that are under common control with Us.
                </li>
                <li>
                  <strong>With business partners</strong>: We may share Your information with Our business partners
                  to offer You certain products, services or promotions.
                </li>
                <li>
                  <strong>With other users</strong>: when You share personal information or otherwise interact in
                  the public areas with other users, such information may be viewed by all users and may
                  be publicly distributed outside.
                </li>
                <li>
                  <strong>With Your consent</strong>: We may disclose Your personal information for any other
                  purpose with Your consent.
                </li>
              </ul>
            </section>

            <section id="retention" className="mt-8">
              <h2 className="text-2xl font-bold">Retention of Your Personal Data</h2>
              <p>
                The Company will retain Your Personal Data only for as long as is necessary for the
                purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the
                extent necessary to comply with our legal obligations (for example, if we are required to
                retain your data to comply with applicable laws), resolve disputes, and enforce our legal
                agreements and policies.
              </p>
              <p>
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is
                generally retained for a shorter period of time, except when this data is used to
                strengthen the security or to improve the functionality of Our Service, or We are legally
                obligated to retain this data for longer time periods.
              </p>
            </section>

            <section id="transfer" className="mt-8">
              <h2 className="text-2xl font-bold">Transfer of Your Personal Data</h2>
              <p>
                Your information, including Personal Data, is processed at the Company's operating offices
                and in any other places where the parties involved in the processing are located. It means
                that this information may be transferred to, and maintained on computers located outside of
                Your state, province, country or other governmental jurisdiction where the data protection
                laws may differ than those from Your jurisdiction.
              </p>
              <p>
                Your consent to this Privacy Policy followed by Your submission of such information
                represents Your agreement to that transfer.
              </p>
              <p>
                The Company will take all steps reasonably necessary to ensure that Your data is treated
                securely and in accordance with this Privacy Policy and no transfer of Your Personal Data
                will take place to an organization or a country unless there are adequate controls in place
                including the security of Your data and other personal information.
              </p>
            </section>

            <section id="delete" className="mt-8">
              <h2 className="text-2xl font-bold">Delete Your Personal Data</h2>
              <p>
                You have the right to delete or request that We assist in deleting the Personal Data that
                We have collected about You.
              </p>
              <p>
                Our Service may give You the ability to delete certain information about You from within
                the Service.
              </p>
              <p>
                You may update, amend, or delete Your information at any time by signing in to Your
                Account, if you have one, and visiting the account settings section that allows you to
                manage Your personal information. You may also contact Us to request access to, correct,
                or delete any personal information that You have provided to Us.
              </p>
              <p>
                Please note, however, that We may need to retain certain information when we have a legal
                obligation or lawful basis to do so.
              </p>
            </section>

            <section id="disclosure" className="mt-8">
              <h2 className="text-2xl font-bold">Disclosure of Your Personal Data</h2>
              
              <h3 className="text-xl font-bold mt-6">Business Transactions</h3>
              <p>
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may
                be transferred. We will provide notice before Your Personal Data is transferred and
                becomes subject to a different Privacy Policy.
              </p>
              
              <h3 className="text-xl font-bold mt-6">Law enforcement</h3>
              <p>
                Under certain circumstances, the Company may be required to disclose Your Personal Data if
                required to do so by law or in response to valid requests by public authorities (e.g. a
                court or a government agency).
              </p>
              
              <h3 className="text-xl font-bold mt-6">Other legal requirements</h3>
              <p>
                The Company may disclose Your Personal Data in the good faith belief that such action is
                necessary to:
              </p>
              <ul className="list-disc pl-6">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </ul>
            </section>

            <section id="security" className="mt-8">
              <h2 className="text-2xl font-bold">Security of Your Personal Data</h2>
              <p>
                The security of Your Personal Data is important to Us, but remember that no method of
                transmission over the Internet, or method of electronic storage is 100% secure. While We
                strive to use commercially acceptable means to protect Your Personal Data, We cannot
                guarantee its absolute security.
              </p>
            </section>

            <section id="children" className="mt-8">
              <h2 className="text-2xl font-bold">Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect
                personally identifiable information from anyone under the age of 13. If You are a parent
                or guardian and You are aware that Your child has provided Us with Personal Data, please
                contact Us. If We become aware that We have collected Personal Data from anyone under the
                age of 13 without verification of parental consent, We take steps to remove that
                information from Our servers.
              </p>
              <p>
                If We need to rely on consent as a legal basis for processing Your information and Your
                country requires consent from a parent, We may require Your parent's consent before We
                collect and use that information.
              </p>
            </section>

            <section id="links" className="mt-8">
              <h2 className="text-2xl font-bold">Links to Other Websites</h2>
              <p>
                Our Service may contain links to other websites that are not operated by Us. If You click
                on a third party link, You will be directed to that third party's site. We strongly advise
                You to review the Privacy Policy of every site You visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the content, privacy policies or
                practices of any third party sites or services.
              </p>
            </section>

            <section id="changes" className="mt-8">
              <h2 className="text-2xl font-bold">Changes to this Privacy Policy</h2>
              <p>
                We may update Our Privacy Policy from time to time. We will notify You of any changes by
                posting the new Privacy Policy on this page.
              </p>
              <p>
                We will let You know via email and/or a prominent notice on Our Service, prior to the
                change becoming effective and update the "Last updated" date at the top of this Privacy
                Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to
                this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section id="contact" className="mt-8">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, You can contact us:</p>
              <p>
                By visiting this page on our website:{' '}
                <a href="https://pureway-logistics.co.uk/" className="text-blue-600 hover:underline">
                  https://pureway-logistics.co.uk/
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
