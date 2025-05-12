import React from 'react';
import './DisclosureDisclaimer.css';

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        {title}
      </div>
      <div className={`accordion-content ${isActive ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default function Investor() {
  return (
    <div className="disclaimer-container">
      <div>
        <img
          src="../investor.jpg"
          alt="Investor"
          style={{ width: "100%", height: "400px" }}
        />
      </div>

      <h1 className="disclaimer-title">Investor Charter in respect of Research Analyst (RA)</h1>

      <div className="accordion">
        <AccordionItem
          title="A. Vision and Mission Statements for investors"
          content={
            <div>
              <h3>VISION:</h3>
              <ul>
                <li>Invest with knowledge & safety.</li>
              </ul>
              <h3>MISSION:</h3>
              <ul>
                <li>
                  Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.
                </li>
              </ul>

              
              
            </div>
          }
        />


          <AccordionItem
          title="B. Details of business transacted by the Research Analyst with respect to the ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566:"
          content={
            <ul>
              <li>To provide an independent, unbiased view on securities.</li>
              <li>To offer unbiased recommendations, disclosing the financial interests in recommended securities.</li>
              <li>To provide research recommendations, based on analysis of publicly available information and known observations.
               </li>
               <li>To conduct audit annually</li>
               <li>To ensure that all advertisements/ marketing/ promotional material are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
               <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.</li>
            </ul>
          }
        />


           <AccordionItem
          title="C. Details of services provided to investors (No Indicative Timelines)"
          content={
            <ul>
              <h5>Onboarding of Clients: </h5><br />
              <li>Sharing of terms and conditions of research services</li>
              <li>Completing KYC of clients.</li>
              <br />
              <h5>Disclosure to Clients:</h5>
              <br />
              <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
              <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
              <li>To disclose, while distributing a third-party research report, any material conflict of interest of such third-party research provider or provide web address that directs a recipient to the relevant disclosures</li>
              <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
              <li>To distribute research reports and recommendations to the clients without discrimination.</li>
              <li>To maintain confidentiality w.r.t publication of the research report until it is made available in the public domain.</li>
              <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</li>
              <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</li>
              <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</li>
              <li>To treat all clients with honesty and integrity</li>
              <li>To ensure confidentiality of information shared by investors unless such information is required to be provided in furtherance of discharging legal obligations or investors have provided specific consent to share such information.</li>
              
            </ul>
          }
        />


        <AccordionItem
          title="D. Details of grievance redressal mechanism and how to access it"
          content={
            <ul>
              <li>To publish a research report based on the research activities of the RA.</li>
              <li>To provide an independent unbiased view on securities.</li>
              <li>To offer unbiased recommendations, disclosing the financial interests in recommended securities.</li>
              <li>To provide research recommendations, based on analysis of publicly available information and known observations.</li>
              <li>Conduct audits annually.</li>
            </ul>
          }
        />

        <AccordionItem
          title="C. Details of services provided to investors (No Indicative Timelines)"
          content={
            <div>
              <h4>Onboarding of Clients:</h4>
              <ul>
                <li>Sharing of terms and conditions of research services</li>
                <li>Completing KYC of clients</li>
              </ul>

              <h4>Disclosure to Clients:</h4>
              <ul>
                <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
                <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
                <li>To disclose, while distributing a third-party research report, any material conflict of interest of such third-party research provider or provide web address that directs a recipient to the relevant disclosures</li>
                <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
                <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                <li>To maintain confidentiality w.r.t publication of the research report until it is made available in the public domain.</li>
                <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</li>
                <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</li>
                <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</li>
                <li>To treat all clients with honesty and integrity</li>
                <li>To ensure confidentiality of information shared by investors unless such information is required to be provided in furtherance of discharging legal obligations or investors have provided specific consent to share such information.</li>
              </ul>
            </div>
          }
        />

        <AccordionItem
          title="D. Details of grievance redressal mechanism and how to access it"
          content={
            <div>

              <h4>1. Investor can lodge complaint/grievance against Research Analyst in the following ways:</h4>
              <p><strong>Mode of filing the complaint with research analyst:</strong></p>
              <p>In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.</p>

              <p><strong>Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB):</strong></p>
              <ol type="i">
                <li>SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (<a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer">https://scores.sebi.gov.in</a>)
                  <p>Two level review for complaint/grievance against Research Analyst:</p>
                  <ul>
                    <li>First review done by designated body (RAASB)</li>
                    <li>Second review done by SEBI</li>
                  </ul>
                </li>
                <li>Email to designated email ID of RAASB</li>
              </ol>

              <h4>2. If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR (<a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer">https://smartodr.in/</a>) platform for its resolution through online conciliation or arbitration.</h4>

              <p>With regard to physical complaints, investors may send their complaints to:</p>
              <p>
                Office of Investor Assistance and Education,<br />
                Securities and Exchange Board of India,<br />
                SEBI Bhavan, Plot No. C4-A, 'G' Block,<br />
                Bandra-Kurla Complex, Bandra (E),<br />
                Mumbai - 400 051
              </p>
            </div>
          }
        />


           <AccordionItem
          title="E. Rights of investors"
          content={
            <ul>
              <li>Right to Privacy and Confidentiality</li>
              <li>Right to Transparent Practices</li>
              <li>Right to fair and Equitable Treatment</li>
              <li>Right to Adequate Information</li>
              <li>Right to Initial and Continuing Disclosure - Right to receive information about all the statutory and regulatory disclosures</li>
              <li>Right to Fair & True Advertisement</li>
              <li>Right to Awareness about Service Parameters and Turnaround Times</li>
              <li>Right to be informed of the timelines for each service</li>
              <li>Right to be Heard and Satisfactory Grievance Redressal</li>
              <li>Right to have timely redressal</li>
              <li>Right to Exit from Financial product or service</li>
              <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</li>
              <li>Additional Rights to vulnerable consumers - Right to get access to services in a suitable manner even if differently abled</li>
              <li>Right to provide feedback on the financial products and services used</li>
              <li>Right against coercive, unfair, and one-sided clauses in financial agreements</li>
              <li>Right to enforceability and holding the Research Analyst responsible for monitoring, enforcing investor rights.</li>
            </ul>
          }
        />


          <AccordionItem
          title="H. DONT's for Investors:"
          content={
            <ul>
              <li>Always deal with SEBI-registered Research Analysts.</li>
              <li>Do not provide funds for investment to the Research Analyst.</li>
              <li>Don’t fall prey to luring advertisements or market rumours.</li>
              <li>Do not get attracted to limited-period discounts or other incentives, gifts, etc. offered by the Research Analyst.</li>
              <li>Do not share login credentials and passwords of your trading and demat accounts with the Research Analyst.</li>
              <li>Don't make payments in cash while making any investment in securities market, beyond the prescribed limit.</li>
              <li>Don't share your critical information like account details, login ids, passwords, DIS, etc. with anyone.</li>
            </ul>
          }
        />



          {/* Add all the other AccordionItem components here */}

            {/* <h2>Grievance Redressal/Escalation Matrix</h2>http://localhost:3001/ */}
            {/* <div>
              <h3>SEBI Registration Details</h3>
              <ul>
                <li><b>Registered Name:</b> ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES</li>
                <li><b>Trade Name or Website:</b> <a href="https://www.brightwaysfinancial.com">https://www.brightwaysfinancial.com</a></li>
                <li><b>Type of Registration:</b> Research Analyst</li>
                <li><b>Registration Number:</b> INH000010566</li>
                <li><b>Validity:</b> Jun 26, 2024 - Perpetual</li>
                <li><b>Registered Office Address:</b> #188 3rd floor Janardan Towers Near Agara Outer Ring Road Sarjapur Main Road Bangalore 560102</li>
              </ul>

              <h3>Details of Principal Officer</h3>
              <ul>
                <li><b>Name:</b> ANITHA.M</li>
                <li><b>Phone:</b> 6363360542</li>
                <li><b>Email:</b> <a href="mailto:Support@brightwaysfinancial.com">Support@brightwaysfinancial.com</a></li>
              </ul>

              <h3>Details of Compliance Officer</h3>
              <ul>
                <li><b>Name:</b> ANITHA.M</li>
                <li><b>Phone:</b> 6363360542</li>
                <li><b>Email:</b> <a href="mailto:Support@brightwaysfinancial.com">Support@brightwaysfinancial.com</a></li>
              </ul>

              <h3>Details of Customer/Head Customer Support</h3>
              <ul>
                <li><b>Name:</b> ANITHA.M</li>
                <li><b>Phone:</b> 6363360542</li>
                <li><b>Email:</b> <a href="mailto:Support@brightwaysfinancial.com">Support@brightwaysfinancial.com</a></li>
              </ul>

              <h3>Complaints can be addressed during the following working hours:</h3>
              <ul>
                <li><b>Days:</b> Monday to Friday</li>
                <li><b>Time:</b> 11:00 AM to 4:00 PM</li>
              </ul>
              <p>Please note that our support team is unavailable on Saturdays, Sundays, and public holidays. However, if you wish to reach out to us, you can contact our customer support at <a href="https://www.brightwaysfinancial.com">https://www.brightwaysfinancial.com</a>.</p>
            </div> */}
      </div>



      <br/>

      {/* <div className="card">
        <div className="card-content">
          <p style={{ color: "black", fontSize: "12px", marginTop: "14px" }}>
            The Research Analyst: ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566.
            You can lodge your grievances / COMPLAINT at
            <a href="mailto:Support@brightwaysfinancial.com" style={{marginLeft:"2px"}}>Support@brightwaysfinancial.com </a>
            with SEBI at <a href="https://scores.sebi.gov.in/" style={{marginLeft:"2px"}}>https://scores.sebi.gov.in/</a> SEBI ODR :
            <a href="https://smartodr.in/" style={{marginLeft:"2px"}}>https://smartodr.in/</a> or you may also write to any of the offices of SEBI.
          </p>
          <p style={{ color: "black", fontSize: "12px", marginTop: "10px" }}>
            For any queries, feedback, or assistance, please contact 6363360542, the SEBI Office on the Toll-Free Helpline at 1800 22 7575
          </p>
        </div>
      </div> */}
    </div>
  );
}
