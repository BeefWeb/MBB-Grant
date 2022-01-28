import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../footer/Footer";
import styled from "styled-components";

import winner1 from "../images/winners-one.jpeg";
import winner2 from "../images/winners-two.jpeg";
import winner3 from "../images/winners-three.jpeg";
import winner4 from "../images/winners-four.jpeg";

const Winners = () => {
  return (
    <>
      <Nav />
      <WinnersContainer>
        <MbbWinners>
          <div className="winners-header">
            <h1>Mbb Grant Winners</h1>
            <p>
              Cancer Patient’s Care, Giving 2.0, and Digitizing Local Markets
            </p>
          </div>
          <div className="contents">
            <div className="img-container">
              <a href={winner1}>
                <img src={winner1} alt="winners" />
              </a>
            </div>
            <div className="content-txt">
              <p>
                I am glad to announce The{" "}
                <a href="https://bifarinthefifth.substack.com/p/apply-for-mbb-grant">
                  Mary Babatola Bifarin (MBB) Grant
                </a>{" "}
                awardees for the 2021 applications:
              </p>
            </div>
          </div>
          <div className="contents">
            <div className="number">
              <h1>1.</h1>
            </div>
            <div className="img-container">
              <a href={winner2}>
                <img src={winner2} alt="winners" />
              </a>
            </div>
            <div className="content-txt">
              <div className="sub-header">
                <h4>
                  Olamide Jasanya, Irewole Adewumi, Olumide Jasanya, Anuoluwapo
                  Joy Komolafe, N350,000
                </h4>
                <span>
                  <span className="sub-title">Project Title:</span>
                  <a href="https://projectgiiv.com/"> ProjectGiiv</a>
                </span>
              </div>
              <div className="txt">
                <div className="quote">
                  <p>
                    Following our research, we realised there are certain needs
                    that orphanages and care homes have that can be easily met
                    by the regular people. Regular people though are willing to
                    share these items but are unsure how to go about it. We
                    thought to build a solution to this problem by creating a
                    platform where the latter can conveniently donate to the
                    former without breaking a sweat. Via our platforms, anyone
                    can donate to charity from the comfort of their homes and
                    for free too. We serve as the logistic company aiding the
                    exchange at no cost to both parties.
                  </p>
                </div>

                <p>
                  Grant money will be used for specified operations and platform
                  maintenance.
                </p>
                <p>IG/FB/Twitter/LinkedIn: @projectgiiv</p>
              </div>
            </div>
          </div>
          <div className="contents">
            <div className="number">
              <h1>2.</h1>
            </div>
            <div className="img-container">
              <a href={winner3}>
                <img src={winner3} alt="winners" />
              </a>
            </div>
            <div className="content-txt">
              <div className="sub-header">
                <h4>Olusola Bukola Ogundepo, N250,000.</h4>
                <span>
                  <span className="sub-title">Project Title: </span>
                  Experiences support needs and quality of life among cancer
                  patients in Obafemi Awolowo University Teaching Hospitals
                  Complex Ile-Ife Nigeria.
                </span>
              </div>
              <div className="txt">
                <div className="quote">
                  <p>
                    This is a pilot study to explore how twenty- five (25)
                    cancer patients experience their illness and capture the
                    wholeness of their experience as only the patients
                    themselves can describe what they go through. The study can
                    identify the needs of patients with cancer at every stage of
                    the disease process and treatment. Awareness of this
                    experience helps caregivers in supporting patients with
                    cancer in their process of coping with the illness. Findings
                    from the study will give nurses insight to individual
                    patient’s feelings, interactions, perceptions, and
                    behaviours that could dictate the outcome of their treatment
                    (Yeh, Yueh-Chen, et al, 2021). It will expand the knowledge
                    base for nursing and also help nurses to provide quality,
                    holistic, and individualized care. It will also inform
                    validation of culturally accepted Nursing Languages that
                    could be standardized for use in Nigeria and Africa as a
                    continent with similar culture.
                  </p>
                </div>

                <p>Grant money will be used for conducting the research.</p>
              </div>
            </div>
          </div>
          <div className="contents">
            <div className="number">
              <h1>3.</h1>
            </div>
            <div className="img-container">
              <a href={winner4}>
                <img src={winner4} alt="winners" />
              </a>
            </div>
            <div className="content-txt">
              <div className="sub-header">
                <h4>Ibrahim Gbadegesin, N400,000.</h4>
                <span>
                  <span className="sub-title">Project Title:</span> Check Oja
                </span>
              </div>
              <div className="txt">
                <div className="quote">
                  <p>
                    Check Oja is a reliable platform to check the current prices
                    of goods in local markets across Africa. Powered by remote
                    data routing and real-time data analytics. The goal is to
                    create the heartbeat of the African e-commerce ecosystem
                    that allows people to track prices at their convenience
                    while also providing a data bank for old prices and
                    connecting millions of local markets to the internet.
                  </p>
                </div>

                <p>
                  Grant money will be used for developing Check Oja bot which
                  will serve a local market well and can be scaled
                  proportionately, in addition to other expenses such as
                  datasets aggregation, database setup, and server hosting.
                </p>
                <p>Twitter: @CheckOja</p>
              </div>
            </div>
          </div>
        </MbbWinners>
        <Acknowledgement>
          <div className="sub-header">
            <h3>Acknowledgments</h3>
          </div>

          <p>
            I will like to thank Oladayo Bifarin and my parents, who read the
            first draft of the grant-making proposal and encouraged me to
            proceed. I started out the grant with an initial $1000, and I
            wouldn’t have been able to fund all these young men and women
            without additional donations from funders, so I will like to thank
            Oluwatobi Badejo, Oladayo Bifarin, Fadodun Oluwadamilola,
            Oluwadolapo Bifarin, Jan Oyebode, Funmilola Elujoba, and Joanne
            Ivancic for their donations.
          </p>
          <p>
            In addition, I will like to thank my friends that assisted with
            reviewing the applications: Adeyera Pelumi, Taiwo Akinyemi,
            Oluwadamilola Fadodun, Obiora Okechukwu, and Oladayo Bifarin.
            Bukunmi Ajani for designing the beautiful photo essay, and finally,
            my able assistant, Alayonimi Bifarin for assisting with everything
            from setting up the MBB grant website to sending out update emails.
          </p>
          <p>
            Special thanks to everyone involved that I haven’t mentioned, folks
            who helped share on social media, and the like. While the entire
            process was quite tasking, I am glad I started this, and I hope some
            of the funded projects do some good in the world. I intend to do
            this again most probably towards the end of 2022.
          </p>
          <p>Ire O.</p>
        </Acknowledgement>
      </WinnersContainer>
      <Footer />
    </>
  );
};

const WinnersContainer = styled.div`
  max-width: 45rem;
  color: #313131;
  margin: 0 auto;
  h4,
  h3 {
    color: #313131;
    line-height: 1.6;
  }
  p {
    line-height: 1.6;
  }
  .winners-header {
    h1 {
      color: #313131;
      font-weight: 800;
    }
  }
  .contents {
    padding: 1.5rem 0;
    .number {
      h1 {
        color: #313131;
        font-weight: 800;
      }
    }
    .content-txt {
      p {
        padding: 1rem 0 0 0;

        a {
          color: rgb(49, 49, 49);
          font-weight: 600;
        }
      }
      .txt {
        padding: 0.6rem 0;
        .quote {
          border-left: 4px solid #ecded4;

          p {
            padding-left: 1rem;
          }
        }
      }
      .sub-header {
        padding: 1rem 0 0 0;
        h4 {
          font-weight: 600;
        }
        span {
          font-size: 1.3rem;
          line-height: 1.4;
          a {
            color: #313131;
          }
          .sub-title {
            font-weight: 600;
          }
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    padding: 1rem;
    h4 {
      font-size: 1.2rem;
    }
  }
`;
const MbbWinners = styled.div`
  padding: 10rem 0 0 0;
`;
const Acknowledgement = styled.div`
  padding: 3rem 0;
  .sub-header {
    padding: 1rem 0;
    h3 {
      font-weight: 600;
    }
  }
`;

export default Winners;
