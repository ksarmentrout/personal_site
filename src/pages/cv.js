import React from "react";
import styled from "@emotion/styled";
import { Content, PageHeader, StyledExLink } from "../components/style-blocks";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactInfo = styled.p`
  text-align: center;
  font-family: Raleway;
  font-size: 0.9rem;
  color: #606060;
  margin-top: -0.7rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.03em;
`;

const DownloadLink = styled.a`
  display: block;
  text-align: center;
  color: #875A5B;
  font-family: Raleway;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: -0.7rem;
  margin-bottom: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const SectionHeader = styled.h2`
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  border-bottom: 1px solid #c0bdb3;
  padding-bottom: 0.4rem;
  margin-top: 2.8rem;
  margin-bottom: 1.4rem;
`;

const EntryBlock = styled.div`
  margin-bottom: 2rem;
`;

const EntryHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.15rem;
`;

const OrgName = styled.span`
  font-family: Raleway;
  font-weight: 700;
  font-size: 1.05rem;
`;

const DateRange = styled.span`
  color: #606060;
  font-size: 0.9rem;
  white-space: nowrap;
  font-family: Raleway;
`;

const RoleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.1rem;
`;

const RoleTitle = styled.span`
  color: #606060;
  font-size: 0.95rem;
  font-style: italic;
`;

const BulletList = styled.ul`
  margin: 0.6rem 0 0 1.2rem;
  padding: 0;
  li {
    margin-bottom: 0.45rem;
    line-height: 1.55;
  }
`;

const PubBlock = styled.div`
  margin-bottom: 1.5rem;
`;

const PubType = styled.p`
  font-family: Raleway;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #606060;
  margin: 0 0 0.2rem;
`;

const PubTitle = styled.p`
  font-style: italic;
  margin: 0 0 0.15rem;
`;

const PubMeta = styled.p`
  color: #606060;
  font-size: 0.9rem;
  margin: 0;
`;

const DegreeTitle = styled.p`
  font-weight: 600;
  margin: 0 0 0.1rem;
`;

const InstitutionLine = styled.p`
  color: #606060;
  font-size: 0.9rem;
  margin: 0 0 1rem;
`;

const CVPage = () => (
  <Layout>
    <SEO title="CV" />
    <Content>
      <PageHeader>CV</PageHeader>
      <DownloadLink
        href="mailto:keaton@ksarmentrout.com"
        style={{ color: "#606060" }}
      >
        keaton@ksarmentrout.com
      </DownloadLink>
      <ContactInfo>Seattle, WA</ContactInfo>
      <DownloadLink href="/files/armentrout_resume.pdf" download>
        Resume Download
      </DownloadLink>

      <SectionHeader>Experience</SectionHeader>

      <EntryBlock>
        <EntryHeaderRow>
          <OrgName>Concerto Biosciences — Remote</OrgName>
        </EntryHeaderRow>
        <RoleRow>
          <RoleTitle>Director of Engineering</RoleTitle>
          <DateRange>May 2022 – Present</DateRange>
        </RoleRow>
        <RoleRow>
          <RoleTitle>Lead Data Scientist</RoleTitle>
          <DateRange>May 2021 – May 2022</DateRange>
        </RoleRow>
        <BulletList>
          <li>
            Built the Data &amp; Software team from the ground up as the first
            engineering hire and second employee; hired and led a
            cross-functional team spanning data science, ML, data engineering,
            and image processing.
          </li>
          <li>
            Designed and implemented the image processing and data storage
            pipeline for high-throughput microscopy data, bringing it from local
            implementation through to automated, scalable, serverless AWS
            deployment.
          </li>
          <li>
            Executed the full data analysis processes to identify ENS-002,
            Concerto&rsquo;s lead microbial therapeutic for atopic dermatitis,
            currently in Phase 1 clinical trials.
          </li>
          <li>
            Enabled self-serve data access for scientists via automated QC
            reports and web apps for experiment tracking and results
            visualization, allowing for quick feedback cycles and early error
            detection.
          </li>
          <li>
            Led development of a machine learning model predicting microbial
            community behavior from high-throughput screen data; integrated
            bioinformatics data for modeling of each microbe.
          </li>
          <li>
            Hired, mentored, and promoted engineers on a fully remote team; set
            goals on quarterly, annual, and multi-year bases; established
            team-wide software and documentation standards.
          </li>
          <li>
            Currently run the full software platform and data analyses as the
            sole engineer following company restructuring.
          </li>
        </BulletList>
      </EntryBlock>

      <EntryBlock>
        <EntryHeaderRow>
          <OrgName>10x Genomics — Remote</OrgName>
          <DateRange>Dec. 2020 – May 2021</DateRange>
        </EntryHeaderRow>
        <RoleRow>
          <RoleTitle>Engineer 3</RoleTitle>
        </RoleRow>
        <BulletList>
          <li>
            Maintained a widely-used internal tool for experiment tracking,
            written in Go and React.
          </li>
        </BulletList>
      </EntryBlock>

      <EntryBlock>
        <EntryHeaderRow>
          <OrgName>ReadCoor — Cambridge, MA</OrgName>
          <DateRange>Feb. 2018 – Dec. 2020</DateRange>
        </EntryHeaderRow>
        <RoleRow>
          <RoleTitle>Software Engineer</RoleTitle>
        </RoleRow>
        <BulletList>
          <li>
            Created a DNA probe design pipeline using Python and Nextflow to
            generate unique, gene-specific barcoded DNA probes for R&amp;D.
          </li>
          <li>
            Built database and API systems using Flask and PostgreSQL, deployed
            on AWS.
          </li>
          <li>
            Developed and implemented algorithms for image registration and DNA
            base-calling from image features.
          </li>
          <li>
            Designed a benchmarking tool to assess algorithm performance of the
            image processing pipeline over parameter sweeps.
          </li>
          <li>
            Led multiple small teams to create and deploy frontend and backend
            components for probe design software and complete image annotation
            tasks.
          </li>
          <li>
            Wrote documentation and packaged tools for handoff following
            acquisition by 10x Genomics.
          </li>
        </BulletList>
      </EntryBlock>

      <EntryBlock>
        <EntryHeaderRow>
          <OrgName>Apex Neuro — Cambridge, MA</OrgName>
          <DateRange>Jul. 2017 – Feb. 2018</DateRange>
        </EntryHeaderRow>
        <RoleRow>
          <RoleTitle>Biomedical Engineer</RoleTitle>
        </RoleRow>
        <BulletList>
          <li>
            Worked as the sole software engineer to design and build data
            infrastructure using PostgreSQL and Tableau to handle batch
            biometric data.
          </li>
          <li>
            Led data analysis of biometrics and questionnaire responses from
            human studies to assess efficacy of a noninvasive nerve stimulation
            device.
          </li>
        </BulletList>
      </EntryBlock>

      <EntryBlock>
        <EntryHeaderRow>
          <OrgName>Techstars Boston — Boston, MA</OrgName>
          <DateRange>Jan. 2017 – May 2017</DateRange>
        </EntryHeaderRow>
        <RoleRow>
          <RoleTitle>Data Science &amp; Tech Associate</RoleTitle>
        </RoleRow>
        <BulletList>
          <li>
            Performed data analytics and software development projects for
            early-stage startups in the 2017 cohort.
          </li>
          <li>
            Created and deployed an automatic scheduling bot to organize 350+
            meetings a week across 24 teams.
          </li>
        </BulletList>
      </EntryBlock>

      <EntryBlock>
        <EntryHeaderRow>
          <OrgName>
            Miguel Nicolelis Neural Engineering Lab — Durham, NC
          </OrgName>
          <DateRange>Sep. 2015 – Dec. 2016</DateRange>
        </EntryHeaderRow>
        <RoleRow>
          <RoleTitle>Research Assistant</RoleTitle>
        </RoleRow>
        <BulletList>
          <li>
            Built a predictive model of bilateral leg motion from in vivo
            primate cortical neuron activity for potential brain-machine
            interface applications.
          </li>
        </BulletList>
      </EntryBlock>

      <SectionHeader>Publications &amp; Patents</SectionHeader>

      <PubBlock>
        <PubType>Preprint</PubType>
        <PubTitle>
          &ldquo;Systematic discovery of a topical bacterial consortium that
          targets <em>Staphylococcus aureus</em> to treat atopic
          dermatitis&rdquo;
        </PubTitle>
        <PubMeta>
          Co-Author &nbsp;&middot;&nbsp; Published Feb. 2026
          &nbsp;&middot;&nbsp;{" "}
          <StyledExLink href="https://doi.org/10.64898/2026.02.13.705787">
            doi.org/10.64898/2026.02.13.705787
          </StyledExLink>
        </PubMeta>
      </PubBlock>

      <PubBlock>
        <PubType>Patent US-12115197-B2</PubType>
        <PubTitle>
          &ldquo;Microbial compositions for the treatment of skin
          diseases&rdquo;
        </PubTitle>
        <PubMeta>Co-Inventor &nbsp;&middot;&nbsp; Issued Oct. 2024</PubMeta>
      </PubBlock>

      <SectionHeader>Education</SectionHeader>

      <div>
        <DegreeTitle>M.S. in Biomedical Engineering</DegreeTitle>
        <InstitutionLine>
          Duke University, Durham, NC &nbsp;&middot;&nbsp; Dec. 2016
        </InstitutionLine>

        <DegreeTitle>B.A. in Neuroscience, Minor in Music</DegreeTitle>
        <InstitutionLine>
          Washington University in St. Louis, St. Louis, MO &nbsp;&middot;&nbsp;
          May 2015
        </InstitutionLine>

        <DegreeTitle>Affiliate Student, Biosciences</DegreeTitle>
        <InstitutionLine>
          University College London, London, UK &nbsp;&middot;&nbsp; Jan. – Jun.
          2014
        </InstitutionLine>
      </div>

      <SectionHeader>Volunteering</SectionHeader>

      <EntryBlock>
        <EntryHeaderRow>
          <OrgName>NE Seattle Tool Library — Seattle, WA</OrgName>
          <DateRange>Aug. 2025 – Present</DateRange>
        </EntryHeaderRow>
        <RoleRow>
          <RoleTitle>Volunteer</RoleTitle>
        </RoleRow>
        <BulletList>
          <li>
            Member of the Steering Committee overseeing Tool Library governance
          </li>
          <li>
            Staff the front desk, checking out tools to members and contributing
            to library upkeep and tool repair
          </li>
        </BulletList>
      </EntryBlock>

      <EntryBlock>
        <EntryHeaderRow>
          <OrgName>NeuroTechX — Cambridge, MA</OrgName>
          <DateRange>Aug. 2017 – Jan. 2019</DateRange>
        </EntryHeaderRow>
        <RoleRow>
          <RoleTitle>Editor, Writer, Organizer</RoleTitle>
        </RoleRow>
        <BulletList>
          <li>
            Writer and Editor of the &ldquo;New Emerging Tech&rdquo; and
            &ldquo;Machine Learning for BCIs&rdquo; content for the NeuroTechEDU
            open education platform
          </li>
          <li>
            Organized speaker events and Hack Nights for NeuroTechBOS, the
            Boston chapter of NeuroTechX with over 750 members
          </li>
        </BulletList>
      </EntryBlock>
    </Content>
  </Layout>
);

export default CVPage;
