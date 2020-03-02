import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div>
        <h2>CONTACT ARIIX</h2>
        <p>Please use the link below to contact us. Thank you. </p>
        <p className="margin-bottom">EMAIL: <a href="mailto:support@ariix.com">support@ariix.com</a></p>
        <p>563 West 500 South, Suite 300 <br/>Bountiful, Utah 84010</p> 
        <p>Local Phone: 1.801.813.3000<br/> 
        TollFree: 855.GO.ARIIX (855.462.7449)<br/> 
        Fax: 801.813.3001 </p>
        <p>Sales Support Hours: M-­F 8 am to 6 pm MT<br/> 
        Emergency after hours by email: emergency@ariix.com</p>
      </div>
      <div className="offices">
        <div>
          <h3>TAIWAN OFFICE</h3>
          <p>ARIIX Europe B.V. <br/>De Rietlanden 8 <br/>9828 PX Oostwold Gem Leek</p>
        </div>
        <div>
          <h3>EUROPE OFFICE</h3>
          <p>9F/4, No. 51, HengYang Rd.<br/>Zhongzheng District<br/>Taipei City, 10045</p>
        </div>
        <div>
          <h3>HONG KONG OFFICE</h3>
          <p>Suite 3501, Langham Place Office Tower<br/>8 Argyle Street<br/>Mongkok, Hong Kong</p>
        </div>
      </div>
      
    </div>
  );
}
