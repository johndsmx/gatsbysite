import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import "../css/custom.css"
import Banner from "../components/Banner"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import FooterLayout from "../components/FooterLayout"

const Terms = () => {
  return (
    <FooterLayout>
      <div class="privacy_banner">
        <div class="container">
          <div class="banner_content">
            <h1 className="h1">Terms &amp; Condition</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="col-md-8 offset-md-2 pt-80 pb-80 privacy-content">
          <h2 class="h2 mb-3 sec-title">Scope</h2>
          <p class="text-secondary">
            SITEMAX SYSTEMS INC. (“Sitemax”) has developed a suite of mobile and
            web applications deployed in a software-as-a-service environment for
            the management of a construction site (“Solution”). This Solution is
            provided to the Customer in accordance with the terms of this
            Agreement. These terms cover all the services Sitemax provides to
            you through our applications (“App”) and on our web application: any
            domain under .sitemax.cloud (“Site”) (all services accessed through
            the App and Site, “Solution”). This Agreement will also apply to any
            other services by which Sitemax assists the Customer in using the
            system for its purposes. The nature and scope of such services as
            well as the remuneration payable are specified in this Agreement.
          </p>
          <br />
          <h2 class="h2 mb-3 sec-title">Solution</h2>
          <p class="text-dark">
            <span class="font-weight-bold">2.1.</span> The Solution is intended
            to work on latest versions of mobile operating systems (eg Android,
            iOS) and Chrome browser. The Customer hereby agrees that Sitemax has
            the right to change the Solution in any manner at Sitemax’s absolute
            discretion including for the reason of making the Solution
            compatible with the latest mobile OS’s, for compatibility with legal
            requirements or for security implementations, for example. If the
            Solution’s functionality is degraded or functions are lost in any
            manner due to Solution changes, and Sitemax is unable to rectify
            such functionality issues within 30 days of being notified then the
            Customer may immediately terminate this Agreement without giving the
            period of notice specified in section 6.
            <br />
            <br />
            <span class="font-weight-bold">2.2.</span> Should changes to the
            Solution require or entail additional software or hardware resources
            on the part of the Customer in order for the Customer to use the
            full scope or functionality, then Sitemax shall notify the Customer
            at least four weeks in advance
            <br />
            <br />
            <span class="font-weight-bold">2.3.</span> It is Customer’s own
            responsibility to: (a) provide for its own access to the Internet,
            arrange for secure Internet access and pay any data/service fees
            associated with such access; (b) train its own end users in basic
            app access and mobile security; (c) provide device or basic tech
            support to its own end users; (d) provide and maintain its own
            computer hardware and/or mobile devices or be responsible for any
            degradation of such hardware or devices; (e) ensure proper setup,
            use and access for users given access to the Solution.
            <br />
            <br />
            <span class="font-weight-bold">2.4.</span> Customer can only use the
            Solution for legal purposes and only for Customer’s own business.
            Using the Solution for any other purpose in violation of any of the
            terms of this Agreement in any way is a breach of this Agreement.
            Sitemax will give Customer written notice of such breach. If such
            breach is not corrected in 30 days Sitemax may terminate this
            Agreement and Customer’s access to the Solution. It is up to the
            Customer to police its end user’s use of the Solution and to educate
            its end users.
          </p>
          <br />
          <h2 class="h2 mb-3 sec-title">Data Protection &amp; Data Security</h2>
          <p class="text-dark">
            <span>3.1.</span> Any corporate or personal data provided by the
            Customer to Sitemax (“Relevant Data”) will be protected in
            accordance with Sitemax’s privacy policy, the terms of which are
            attached as Schedule B. The Customer is responsible for ensuring
            that any disclosure of Relevant Data to Sitemax is permissible under
            applicable law, and that any such Relevant Data is collected,
            processed and transferred by the Customer to Sitemax in a lawful
            manner and in compliance with all applicable laws.
            <br />
            <br />
            <span>3.2.</span> Sitemax will use the Relevant Data only in
            accordance with this Agreement and such other instructions as the
            Customer may issue from time to time.
            <br />
            <br />
            <span>3.3.</span> Relevant Data is hosted on third party servers
            within a data container reserved for that Customer, ensuring that
            other customers and third parties have no access to Relevant Data.
            <br />
            <br />
            <span>3.4.</span> To ensure data security, Sitemax shall employ
            exclusively state-of-the-art technologies with respect to the
            Solution and its provision. Moreover, Sitemax will ensure that all
            and any third-party services are provided only by suitably qualified
            subcontractors employing state-of-the-art technology.
            <br />
            <br />
            <span>3.5.</span> The Customer is provided with a user ID and a
            password by Sitemax enabling them to access their data within the
            confines of the accessibility of the user interface. The Customer
            acknowledges that the confidentiality of Sitemax-hosted data can
            only be guaranteed if the Customer protects the confidentiality of
            the access details provided to it. Should these access details be
            compromised in any way, then the Customer shall inform Sitemax of
            this fact immediately and instruct Sitemax to change and/or disable
            access details, as Sitemax otherwise cannot guarantee that the
            Customer has exclusive access to his data.
            <br />
            <br />
            <span>3.6.</span> In the event of a disruption to operations,
            Sitemax shall begin problem resolution activities:
            <br />
            <br />
            <span>(a)</span> within two hours (severity level 1) where such
            disruption affects components which are essential to the
            availability of the system or its operability;
            <br />
            <br />
            <span>(b)</span> within 24 hours (severity level 2) where the
            disruption affects availability or operability as described by
            documentation but where such disruption is not critical to the
            Customer’s work, after the problem report is logged during normal
            business hours.
            <br />
            <br />
            <span>3.7.</span> Customer requests for additional or modified
            functionality will, wherever possible, be taken into account in the
            next Solution update (severity level 3).
            <br />
            <br />
            <span>3.8.</span> Sitemax support can be reached as follows: – by
            telephone at 1 (888) 885-4036 or by email at
            support@sitemaxsystems.com
            <br />
            <br />
            The Customer shall be notified without delay of successful problem
            resolution.
          </p>
          <br />
          <h2 class="h2 mb-3 sec-title">Use for Reference Purposes</h2>
          <p class="text-dark">
            <span>4.1</span> Sitemax shall be entitled to refer to the
            Customer’s name and logo for reference purposes in its own
            advertising including (without limitation) its website, exhibition
            stand, brochures and newsletters. Should such use be subject to
            special conditions, these shall be notified by the Customer. The
            Customer’s name and/or logo shall be used in press releases to
            external distribution lists and/or in case studies only with the
            Customer’s consent.
          </p>
          <br />
          <h2 class="h2 mb-3 sec-title">Use of Solution &amp; Relevant Data</h2>
          <p class="text-dark">
            <span>5.1.</span> The Solution is owned by Sitemax. Any
            customizations of the Solution provided as a service to the Customer
            is the intellectual property of Sitemax and the Customer may not
            claim any right to any workflow or process created as the result of
            custom development. All proprietary and intellectual property
            rights, title and interest including copyright and trade secret
            rights in and to anything associated with the Solution remains that
            of Sitemax.
            <br />
            <br />
            <span>5.2.</span> Customer may not use the Solution in a service
            bureau environment (ie to provide services to other entities)
            without the prior written approval of Sitemax. Resell or exchange of
            SiteMax seats must be previously discussed and approved by a member
            of Sitemax leadership team.
            <br />
            <br />
            <span>5.3.</span> Customer may give access to the Solution to its
            employees. Customer may also wish to allow certain permitted
            third-party contractors of Customers (“Collaborators”) to access the
            Solution. In such event the Customer will require all its personnel
            and all Collaborators to agree to the terms of Sitemax’s End User
            Services Agreement for the Solution, the terms of which are set out
            in Schedule C. All Customers personnel and Collaborators accessing
            the Solution via the Customer’s login will be counted as Customer’s
            end users for which Customer will incur Charges in the manner set
            out in section 7.
            <br />
            <br />
            <span>5.4.</span> Except as stated in subsections 5(1) to 5(2)
            above, the Customer has no right (and shall not permit any third
            party) to use, copy, adapt, reverse engineer, decompile,
            disassemble, modify, or make error corrections to the Solution, in
            whole or in part.
            <br />
            <br />
            <span>5.5.</span> Relevant Data remains the exclusive property of
            the Customer and may only be modified, deleted or supplemented by
            the Customer. Sitemax shall not use this Relevant Data for its own
            purposes, or the purposes of any third party, nor shall it sell or
            trade or disclose this data to third parties.
            <br />
            <br />
            <span>5.6.</span> Following termination of contract, Relevant Data
            shall remain available to the Customer for a period of 30 days,
            accessible using the access details provided to the Customer, and
            can be exported by the Customer by means of a native module of the
            Solution using comma separated values format, PDF with accompanying
            images. After this 30 days’ time period has elapsed, Sitemax shall
            be entitled to remove the Customer’s Relevant Data from its servers.
          </p>
          <br />
          <h2 class="h2 mb-3 sec-title">Term &amp; Termination</h2>
          <p class="text-dark">
            <span>6.1.</span> The Agreement shall come into force on the
            Contract Commencement Date and (subject to the provisions for
            earlier termination in the Agreement) shall remain in force until
            otherwise notified in writing by either party.
            <br />
            <br />
            <span>6.2.</span> The Agreement shall stay enforced unless either
            party notifies the other in writing that it does want to terminate
            the Agreement. Such notice must be received by the non-terminating
            party at least 3 calendar months before the last billing cycle.
            <br />
            <br />
            <span>6.3.</span> Upon each new billing cycle Sitemax may amend the
            Agreement to maintain the customer on currently applicable pricing
            structure and the number of seats used.
            <br />
            <br />
            <span>6.4.</span> Onboarding fees are charged on the basis of a
            minimal subscription period of one year. In case of termination of
            the Agreement, outside of close 6.5 and 6.6, within the 12 months
            following the Contract Commencement Date, the customer agrees to pay
            all development cost requested by the implementation, as defined by
            Sitemax Systems Inc Development and Success team, at an hourly rate
            of $300 CAD per hour.
            <br />
            <br />
            <span>6.5.</span> Either party may terminate the Agreement
            immediately upon notice in writing to the other party if the other
            party commits a breach of its obligations under the Agreement and
            (a) such breach is material and cannot be remedied; or (b) such
            breach is material and possible to remedy, or is a persistent
            breach, and in either case that other party fails to remedy such
            breach within thirty (30) days of having been required in writing to
            remedy such breach..
            <br />
            <br />
            <span>6.6.</span> Either party may terminate the Agreement
            immediately upon notice in writing to the other party (the
            “Defaulting Party”) if the Defaulting Party presents a petition or
            has a bona fide petition presented by a creditor for its winding up,
            or convenes a meeting to pass a resolution for voluntary winding up,
            or enters into any liquidation (other than for the purposes of a
            bona fide reconstruction or amalgamation), or calls a meeting of its
            creditors, or has a receiver of all or any of its undertakings or
            assets appointed, or is deemed by virtue of the relevant statutory
            provisions under the applicable law to be unable to pay its debts;
            or the Defaulting Party suffers or undergoes any procedure analogous
            to any of those specified in this Subsection 6 (5) under the laws of
            any jurisdiction.
            <br />
            <br />
            <span>6.7.</span> Notwithstanding any other provision of this
            Agreement, with effect from the date of termination of the
            Agreement, the Customer shall no longer be entitled to use any part
            of Solution.
            <br />
            <br />
            <span>6.8.</span> The monthly or annual fees are based on a 1-year
            term and to be continued annually at the agreed user amount and
            price (additional fees apply with added users).
          </p>
          <br />
          <h2 class="h2 mb-3 sec-title">
            No Warranties; Exclusion of Liability
          </h2>
          <p class="text-dark">
            <span>8.1.</span> Sitemax has the right and all necessary
            permissions to provide the Solution to the Customer. In the event of
            the breach of this representation, Sitemax shall defend Customer
            against any claim, demand, suit, or proceeding (“Claim”) made or
            brought against Customer by a third party alleging that the use of
            the Solution infringes or misappropriates the intellectual property
            rights of a third party, and shall indemnify Customer for any
            damages finally awarded against, and for reasonable attorney’s fees
            incurred by, Customer in connection with any such Claim; provided,
            that Customer (a) promptly gives Sitemax written notice of the
            Claim; (b) gives Sitemax sole control of the defense and settlement
            of the Claim; and (c) provides to Sitemax all reasonable assistance,
            at Sitemax’s expense. This Section 8.1 states Sitemax’s sole
            liability to, and Customer’s exclusive remedy against Sitemax for
            any type of Claim.
            <br />
            <br />
            <span>8.2.</span> Sitemax has no responsibility to Customer other
            than as expressly set out in this Agreement. Without limitation
            Sitemax has no responsibility for:
            <br />
            <br />
            <span>(a)</span> data charges;
            <br />
            <span>(b)</span> computer hardware or mobile device degradation;
            <br />
            <span>(c)</span> compliance with building processes, safety
            instructions or Customer compliance with all laws respecting
            workplace safety rules and/or best practices (stock forms and
            procedures within the Solutions are simply guidelines and do not
            represent endorsements);
            <br />
            <span>(d)</span> serving data to the Customer via the Solution if
            the Customer’s end users are at a location without an Internet/data
            connection;
            <br />
            <span>(e)</span> accurate delivery of push/email reminders and/or
            notifications;
            <br />
            <span>(f)</span> personal injury, harm, death or any other like
            injury to persons detailed within forms or processes provided within
            the Solution.
            <br />
            <br />
            <span class="font-weight-bold">
              8.2 The solution is provided “as is, where is” other than as set
              out in section 8.1. Sitemax disclaims all warranties with respect
              to the solution whether express or implied, including the implied
              warranties of merchantability, durability and fitness for a
              particular purpose. Neither party is liable under this agreement
              for any indirect, consequential, exemplary, or incidental damages
              or loss of profits resulting from the services (or any third party
              goods or services) even if it has been advised of the possibility
              of such damages. If either party is liable to the other in no
              event will the total aggregate liability of a party to the other
              exceed the total amount paid by customer to Sitemax during the
              trailing 12 months prior to liability being incurred.
            </span>
          </p>
          <br />
          <h2 class="h2 mb-3 sec-title">General Provisions</h2>
          <p class="text-dark">
            <span>9.1.</span> The Agreement and any dispute or claim arising in
            connection with it shall be governed by the laws of British Columbia
            and Canada and shall be subject to the exclusive jurisdiction of the
            Provincial and Federal Courts to which the Parties irrevocably
            submit.
            <br />
            <br />
            <span>9.2.</span> If any provision of the Agreement be prohibited by
            law or judged to be void or unenforceable by a court of competent
            jurisdiction, that provision shall, to such extent, be severed from
            this Agreement without prejudice to the validity and enforceability
            of the remainder of the provision, or of the Agreement generally.
            Where possible, the parties shall use reasonable endeavours to amend
            any such provision in such a way that it becomes valid and legal and
            implements the original intent of the parties as to the matter in
            question.
            <br />
            <br />
            <span>9.3.</span> The Customer hereby acknowledges and agrees that,
            where the Customer issues a purchase order to Sitemax relating to
            the subject matter of the Agreement or any other Sitemax products or
            services, these Terms of Service shall prevail over the terms of
            such purchase order, if accepted by Sitemax, shall be accepted for
            the sole purpose of referencing invoices.
            <br />
            <br />
            <span>9.4</span> The Customer shall not assign transfer or otherwise
            dispose of any of its rights or responsibilities under the Agreement
            without the prior written consent of Sitemax.
          </p>
        </div>
      </div>
    </FooterLayout>
  )
}

export default Terms
