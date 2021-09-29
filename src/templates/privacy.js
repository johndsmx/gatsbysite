import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import "../css/custom.css"
import Banner from "../components/Banner"
import "../css/custom.css"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import FooterLayout from "../components/FooterLayout"

const Privacy = () => {
  return (
    <FooterLayout>
      <div class="privacy_banner">
        <div class="container">
          <div class="banner_content"><h1 className="h1">Privacy &amp; Cookie Policy</h1></div>
        </div> 
      </div>
     
      <div class="container">
      <div class="col-md-8 offset-md-2 pt-80 pb-80 privacy-content">
        <h2 class="h2 mb-3 sec-title">General Principles</h2>
        <p class="text-secondary">
          Sitemax Systems Inc. of Suite 309-1110 Hamilton Street, Vancouver, BC,
          Canada V6B 2S2 (“Sitemax”) has established this privacy policy to
          comply with regulation and with the highest possible standards for
          safeguarding information security and privacy. This privacy policy
          governs the use of any information you provide to us through
          sitemaxsystems.com or any of apps (the “Site”). The privacy policy
          also describes how we will use such information and the limited
          circumstances in which such information may be disclosed.
        </p>
        <ul>
          <li>
            Your information will be stored on computers located in Canada and
            the United States and is subject to regulation under the laws of
            Canada and the United States.
          </li>
          <li>
            If you object to your personal information being transferred or used
            as described in this Privacy Policy, please do not use the Site or
            apps or view any of the content on the Site or obtain any services
            from Sitemax in the manner described in the Sitemax End User Terms
            of Services (“Customer Agreement”).
          </li>
          <li>
            Please note that this privacy policy does not apply to any
            information you supply to third party sites which may be linked from
            the website.
          </li>
          <li>
            If users have questions or concerns regarding this statement, they
            should contact Sitemax Customer Support service by email:
            support@sitemaxsystems.com.
          </li>
        </ul>
        <p>By accepting the Privacy Policy and Customer Agreement in registration or by signing below, you expressly consent to our use and disclosure of your personal information in the manner described in this Privacy Policy.</p>
        <p>This Privacy Policy is incorporated into and subject to the terms of the Customer Agreement</p>
        <p><strong>This Privacy Policy will take effect on Sept. 1, 2021</strong></p>
        <br />
        <h2 class="h2 mb-3 sec-title">Notification of Changes</h2>
        <p class="text-dark">
          If we decide to change this privacy policy, we will post the amended
          policy prominently on our Site so you may review such changes. Any
          changes will be effective immediately. If you do not agree to such
          changes then please contact us and we will not use your information in
          the new manner. We will only use information in the accordance with
          the privacy policy under which your information was collected and to
          which you agreed.
        </p>
        <p class="text-dark">
          Note: Sitemax is not responsible for the operations of any websites
          which may be linked to or linked from our Site. Users submitting
          information to or through these third-party websites should review the
          privacy statement of these sites before providing them with personally
          identifiable information. These websites are governed by their own
          privacy statements and policies. These sites are known as Hubspot and
          Google.
        </p>
        <br />
        <h2 class="h2 mb-3 sec-title">What personal information we collect</h2>
        <p class="font-weight-bold">Information We Collect</p>
        <div class="ml-3">
          <ol>
            <li class="mt-2">Name and Company</li>
            <li class="mt-2">Email</li>
            <li class="mt-2">
              Information you input into the Sitemax app about your personal
              activities including: any information contained in a video,
              comment or other submission you upload through our site or our
              apps. This includes identifying information such as: address,
              telephone number, city of residence, your work place location,
              and, if you transact business with us, financial information such
              as your payment method (valid credit card number, type, expiration
              date or other financial information).
            </li>
            <li class="mt-2">
              Any additional information the user fills-in or adds as custom
              Fields and Values, this can include: your capabilities, your
              career history, your project history. We also may request
              information about your interests and activities, your gender and
              age, and other demographic information.
            </li>
          </ol>
        </div>

        <p class="font-weight-bold">Site Traffic Information</p>

        <p class="text-dark">
          Due to the technical nature of web-browsing, when you visit our Site,
          we obtain the following information:
        </p>
        <div class="ml-3">
          <ol>
            <li class="mt-2">
              The web address of the website that you came from or are going to;
            </li>
            <li class="mt-2">
              Which pages of our Site and features of our app you visit or use;
              the type of browser you use;
            </li>
            <li class="mt-2">The times you access our Site or app;.</li>
            <li class="mt-2">
              The type of device you use to access our Site or app;
            </li>
            <li class="mt-2">
              The content of any undeleted cookies that your browser previously
              accepted from us.
            </li>
          </ol>
        </div>
        <p class="text-dark">
          We may use standard Internet technology, such as web beacons and other
          similar technologies, to track your use of our Site. We also may
          include web beacons in promotional e-mail messages or newsletters to
          determine whether messages have been opened and acted upon. The
          information we obtain in this manner enables us to customize the
          services we offer you to deliver targeted advertisements and to
          measure the overall effectiveness of our online advertising, content,
          programming or other activities.
          <br />
          <br />
          We may allow third-parties, including our authorized service
          providers, advertising companies, and ad networks, to display
          advertisements on our Site. These companies may use tracking
          technologies, such as cookies, to collect information about users who
          view or interact with their advertisements. Unless expressly stated
          otherwise, our Site does not provide any personal information to these
          third parties. This information allows them to deliver targeted
          advertisements and gauge their effectiveness. <br />
          <br />
          We use all this collected information only to try to understand your
          preferences better and to manage the load on our servers, so as to
          improve our service, analyze trends, administer the site, improve site
          performance, and gather broad demographic information for aggregate
          use. We do not track the websites that you visit before or after you
          leave our site.
        </p>
        <br />
        <p class="font-weight-bold">Our use of “Cookies”</p>
        <p class="text-dark">
          “Cookies” are small files of data that reside on your computer and
          allow us to recognize you as a Sitemax user if you return to our Site
          using the same computer and browser. We send a “session cookie” to
          your computer if and when you log in to your Sitemax account by
          entering your email address and password. These cookies allow us to
          recognize you if you visit multiple pages in our Site during the same
          session, so that you don’t need to re-enter your password multiple
          times. Once you log out or close your browser, these session cookies
          expire and no longer have any effect.
          <br />
          <br />
          Disabling Cookies – Most web browsers are set up to accept cookies.
          You may be able to set your browser to warn you before accepting
          certain cookies or to refuse certain cookies. However, if you disable
          the use of cookies in your web browser, some features of the Site or
          our apps may be difficult to use or inoperable.
          <br />
          <br />
          We may work with certain third-party companies that use techniques
          other than HTTP cookies to recognize your computer or device and/or to
          collect and record information about your web surfing activity,
          including those integrated with our Services. Please keep in mind that
          your web browser may not permit you to block the use of these
          techniques, and those browser settings that block conventional cookies
          may have no effect on such techniques. To learn more about
          Interest-Based Advertising or to opt-out of this type of advertising
          by those third parties that are members of DAA’s opt-out program,
          please go to http://www.aboutads.info.
        </p>
        <br />

        <p class="font-weight-bold">Customer service correspondence</p>
        <p class="text-dark">
          If you send us correspondence, including emails or text messages, we
          retain such information in the records of your account. We will also
          retain all related correspondence from Sitemax to you and all related
          records. We retain these records in order to measure and improve our
          customer service, or as required to comply with applicable law and/or
          regulation.
        </p>
        <br />

        <p class="font-weight-bold">Questionnaires, surveys or profile data</p>
        <p class="text-dark">
          From time to time, we may offer optional questionnaires and surveys to
          our users for such purposes as collecting demographic information or
          assessing users’ interests and needs. The use of the information
          collected will be explained in detail in the survey itself. If we
          collect personally identifiable information from our users in these
          questionnaires and surveys, the users will be given notice of how the
          information will be used prior to their participation in the survey or
          questionnaire.
        </p>
        <br />

        <p class="font-weight-bold">Aggregated data</p>
        <p class="text-dark">
          Using the Services it is possible to collect aggregated anonymized
          data which is collected and stored without association with personal
          information and does not identify Customer in any way (“Aggregated
          Data”). All Aggregated Data is and will be, as between Sitemax and
          Customer, the property of Sitemax and not considered to be personal
          information.
        </p>
        <br />
        <h2 class="h2 mb-3 sec-title">Use and Disclosure of Collected Information</h2>
        <p class="font-weight-bold">Internal Uses</p>
        <p class="text-dark">
          We use the information we collect about you in order to:
        </p>
        <div class="ml-3">
          <ol>
            <li class="mt-2">Verify your identity</li>
            <li class="mt-2">Provide our services</li>
            <li class="mt-2">Process your transactions</li>
            <li class="mt-2">Improve our services</li>
            <li class="mt-2">
              Manage your account and provide you with customer support;
            </li>
            <li class="mt-2">
              Perform research and analysis about your use of, or interest in,
              our Site, our apps, products, services, or content, or products,
              services or content offered by others
            </li>
            <li class="mt-2">
              Communicate with you by e-mail, postal mail, telephone and/or
              mobile devices about products or services that may be of interest
              to you either from us, or other third parties
            </li>
            <li class="mt-2">
              Develop and display content and advertising tailored to your
              interests on our site and other sites;
            </li>
            <li class="mt-2">Enforce our terms and conditions;</li>
            <li class="mt-2">Manage our business and</li>
            <li class="mt-2">
              Perform functions as otherwise described to you at the time of
              collection
            </li>
          </ol>
        </div>
        <br />
        <p class="text-dark">
          We may use financial information or payment method to process payment
          for any purchases, subscriptions or sales made via our Site or apps,
          to protect against or identify possible fraudulent transactions, and
          otherwise as needed to manage our business.
        </p>
        <p class="text-dark">
          We limit access to personal information about you to those employees
          and agents who need to know the information to provide products and
          services to you.
        </p>
        <br />
        <p class="font-weight-bold">Disclosure to Third Parties</p>
        <p class="text-dark">
          We will not disclose any of your personally identifiable information
          to third parties except in the limited circumstances described below,
          or with your express permission. These third parties are limited by
          law or by contract from using the information for secondary purposes
          beyond the purposes for which the information is disclosed. We
          disclose information appropriate to the circumstances as determined in
          our sole unfettered discretion.
        </p>

        <div class="ml-3">
          <ol>
            <li class="mt-2">
              We disclose information in response to a subpoena, warrant, court
              order, levy, attachment, order of a court-appointed receiver or
              other comparable legal process, including subpoenas from private
              parties in a civil action.
            </li>
            <li class="mt-2">
              If we merge or are acquired by another company then the successor
              company would have access to your information but would continue
              to be bound by this Privacy Policy.
            </li>
            <li class="mt-2">
              We may use a third party communication company to communicate with
              you. We will require such third party to only use your contact
              information for the purpose of our communications with you and
              will also require such third party to delete such contact
              information from their records following the termination of their
              retainer by Sitemax.
            </li>
            <li class="mt-2">
              We may share your personal information with our authorized service
              providers that perform certain services on our behalf. These
              services may include fulfilling orders, processing credit card
              payments, delivering packages, providing customer service and
              marketing assistance, performing business and sales analysis,
              supporting our website functionality, and supporting features
              offered through our website. These service providers may have
              access to personal information needed to perform their functions
              but are not permitted to share or use such information for any
              other purposes.
            </li>
            <li class="mt-2">
              We disclose information that we are required by applicable law to
              disclose to applicable parties including, without limitation, law
              enforcement authorities, regulators or auditors.
            </li>
          </ol>
        </div>
        <br />
        <p class="font-weight-bold">Our contacts with you</p>
        <p class="text-dark">
          We communicate with users on a regular basis via email or text or
          other electronic means to provide requested services. We also
          communicate by phone to resolve customer complaints. We use your email
          address or phone number to confirm your various transactions,
          including opening of an Sitemax account, to send you notice of
          delivered messages, to send information about important changes to our
          products and services, to inform you about new pricing or products or
          services, to alert you to public security or privacy threats (such as
          email solicitation) and to send notices and other disclosures required
          by law. Generally, users cannot opt out of these communications, but
          they will be administrative in nature rather than promotional.
        </p>
        <p class="font-weight-bold">Communications</p>
        <p class="text-dark">
          We communicate with users on a minimal basis for the purpose of
          Sitemax services communication, unless you opt-out of these
          communications, sent as an option in each communication.
          Communications may include, without limitation, email to suggest new
          Sitemax products or services, surveys, web-based contests and prizes,
          direct postal mail or phone calls.
        </p>
        <p class="font-weight-bold">Internet address or phone information</p>
        <p class="text-dark">
          We use IP addresses, browser types and access times to analyze trends,
          administer the site, improve site performance, and gather broad
          demographic information for aggregate use..
        </p>

        <p class="font-weight-bold">Retention and deletion of information</p>
        <p class="text-dark">
          We retain all records related to messages sent or received via
          Sitemax, your personal identification or any other information about
          you or pertaining to you for as long as you have an Sitemax account.
          When you become an Sitemax user, we also retain records and
          information about you throughout the application process.
        </p>
        <p class="text-dark">
          Once we terminate your Sitemax account, subject to applicable laws
          requiring us to retain records, Sitemax will delete any information
          you have provided to Sitemax, including, without limitation, any
          marketing, budgeting, financial or other confidential information or
          personal information of yours. You can see what information is deleted
          and what we continue to store after the account is disabled by request
          to support@sitemaxsystems.com.
        </p>

        <p class="font-weight-bold">
          Accessing your information and exporting it
        </p>
        <p class="text-dark">
          You have the ability to review and update your personal information
          online by logging into your Sitemax account. You can also review and
          update your personal information by contacting us. More information
          about how to contact us is provided below.
        </p>
        <p class="text-dark">
          You can disable your Sitemax account by request. We can disable it at
          our discretion. You can permanently disable and/or delete your Sitemax
          account at any time by sending an email to support@sitemaxsystems.com.
          We can terminate or suspend your account at any time at our
          discretion.
        </p>

        <p class="text-dark">
          These terms remain in effect after your account is disabled.
        </p>

        <p class="text-dark">
          You can export a copy of content in your Sitemax Account if you want
          to back it up or use it with a service outside of Sitemax. Contact
          customer support at: support@sitemaxsystems.com for assistance in
          this.
        </p>

        <p class="text-dark">
          We try to ensure that our services protect information from accidental
          or malicious deletion. Because of this, there may be delays between
          when you delete something and when copies are deleted from our active
          and backup systems.
        </p>
        <br />
        <h2 class="h2 mb-3 sec-title">Updating and correcting Your Information</h2>
        <p class="text-dark">
          You can review the personal information you provided us and make
          changes to some information, or to the settings for your account, at
          any time by logging in to your account on our website and changing
          your information.
        </p>

        <br />
        <h2 class="h2 mb-3 sec-title">Information security</h2>
        <p class="font-weight-bold">Security of stored information</p>
        <p class="text-dark">
          Information and data security is of paramount importance at Sitemax.
          Sitemax is committed to handling all of your information with the
          highest standards of information security
        </p>
        <p class="text-dark">
          Sitemax also takes the following measures to protect user and business
          data:
        </p>

        <div class="ml-3">
          <ol>
            <li class="mt-2">
              Sitemax uses enterprise-grade security measures to protect
              customer data from unauthorized access. 256-bit SSL (Secure
              Sockets Layer) encryption technology is used to protect data
              in-transit and ensure the confidentiality of your data. The
              encryption process protects your information by scrambling it
              before it is sent to us from your computer. Once Sitemax receives
              your transmission, we make commercially reasonable efforts to
              ensure its security on our system. No data transmission over the
              Internet can be guaranteed to be 100% secure however.
            </li>
            <li class="mt-2">
              The Sitemax platform is hosted in a secure server environment that
              uses firewalls, encryption, and other advanced security
              technologies to ensure that data is kept safe, secure, and only
              available to customers who own and have access to it.
            </li>
            <li class="mt-2">
              Encrypted password authentication is used to verify that users
              logging into the system are who they claim to be. Sitemax does not
              store confidential username or password information on your
              computer, but instead uses an advanced method of encrypted session
              identification for authenticated user
            </li>
            <li class="mt-2">
              Managed Backup: Hourly and daily incremental backups..
            </li>
            <li class="mt-2">
              Security threats: Sitemax pays close attention to emerging
              internet security threats and applies patches to Sitemax servers
              as required to further ensure the security of data.
            </li>
            <li class="mt-2">
              We maintain other physical, electronic and procedural safeguards
              that comply with applicable laws to guard your non-public personal
              information.
            </li>
          </ol>
        </div>
        <br />
        <p class="text-dark">
          We use what we believe to be “best-of-class” hosting services and
          security technologies and services that we believe provide you with a
          secure and safe environment. Information is hosted at Amazon via
          Amazon’s cloud services. Security specification at such services are
          described in Amazon’s website.
        </p>
        <p class="text-dark">
          Sitemax’s managed hosting partner provides the following:
        </p>

        <div class="ml-3">
          <ol>
            <li class="mt-2">
              Network availability: 99.95% network uptime SLA.
            </li>
            <li class="mt-2">
              Facility: Industrial strength datacenter that includes dedicated
              hosting centers across North America.
            </li>
            <li class="mt-2">
              ISO 27001-certified information security management system, SAS 70
              Type II-compliant control standards.
            </li>
          </ol>
        </div>
        <p class="text-dark">
          Our general policies and beliefs around data security are
        </p>

        <div class="ml-3">
          <ol>
            <li class="mt-2">You own your private data, not us.</li>
            <li class="mt-2">
              You can delete your private data from Sitemax when you want.
            </li>
            <li class="mt-2">
              We restrict access to your personally identifiable information to
              employees who need to know that information in order to provide
              products or services to you.
            </li>
          </ol>
        </div>
        <br />
        <h2 class="h2 mb-3 sec-title">Your responsibilities</h2>
        <p class="text-dark">
          The security of your Sitemax account also relies on your protection of
          your password. You may not share your password with anyone. Sitemax
          will never ask you to send your password or other sensitive
          information to us in an email, though we may ask you to enter this
          type of information on the Sitemax websites, at the following URLs:
        </p>
        <p class="font-weight-bold">
          sitemaxsystems.com
          <br />
          sitemax.cloud
          <br />
          or any of our other sites.
          <br />
        </p>
        <p class="text-dark">
          Any email or other communication requesting your password, asking you
          to provide sensitive account information via email, or linking to a
          website with a URL other than those specified within this document
          should be treated as unauthorized and suspicious and should be
          reported to Sitemax immediately. If you do share your Sitemax password
          with a third party for any reason, you may be responsible for actions
          taken using your password. If you believe someone else has obtained
          access to your password, please contact us right away.
        </p>
      </div>
      </div> 
    </FooterLayout>
  )
}
export default Privacy
