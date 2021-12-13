import React from "react";
import styled from "styled-components";
import mama from "../images/mama bifarin.jpeg";
import Nav from "../Nav/Nav";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <>
      <Nav />
      <AboutSection>
        <div className="about-header">
          <h2>About Mary Babatola Bifarin </h2>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src={mama} alt="beefweb" />
          </div>
          <div className="about-text">
            <p>
            Chief (Mrs) Mary Babatola Bifarin (Nee Tasanmi) was born on the 28th of January 1927 at Imesi-Ile to Late Benjamin Ojo of Ile Soade, 
            Odoba Quarters, Imesi-Ile and Abigael Badejoko of Ile Loriawo, Ile Okun, Okiro also in Imesi-Ile. 
            Mama had her elementary school education at Otapete Methodist Primary School, Imesi-Ile, from 1936 to 1943. 
            She then proceeded to Nursing School at the Wesley Guild Hospital Ilesha in 1944, which she completed in June 1948. 
            On the 6th of July 1948, she married Mr. Joseph Ilori Bifarin at Imesi-Ile. Mama had her first working stint at Methodist Dispensary, Osu, 
            in the latter part of 1948. She later worked in Ipetu-Ile between December 1948 and December 1950. From January 1951 to February 1956, Mama was a complete housewife. 
            Then, from March 1956 till 1969, she worked with the ‘under five children’ at Imesi-Ile. 
            The research produced three basic textbooks in Community Health. These are:

              <ol>
                <li>
                  Pediatric Priorities in developing world - A textbook of post
                  graduate Pediatrics series by David Mortey
                </li>
                <li>
                  Where there is no Doctor – a village health care handbook by
                  David Werner
                </li>
                <li>
                  See how they grow – Monitoring child growth for appropriate
                  health care in deceloping countries by David Mortey and
                  Margaret Woodland. 1970 saw her working briefly at the Wesley
                  Guild Hospital, Ilesha from where she voluntarily left the
                  service in the same year. Chief (Mrs) M.B Bifarin started
                  working on her own in 1971 when she established the Alafia
                  Maternity Home a.ka. Walaka Hospital at Ile-Ife.
                </li>
              </ol>
              <p>
              She was conferred with the chieftaincy title of Yeye Saribi of Otan Ile on the 17th of April 1976. In 1977,
               she was nominated a Woman Counselor to Obokun Local Council. While on the 22nd of March, 1978. 
               She was sworn in as a Juvenile Court Panel Member for Ile-Ife at the Ibadan High Court. 
              She was again sworn into a similar panel in January 1979. In 1980, 
              Mama was one of the Customary Land Use Decree Committee of Obokun Local Government members.
              </p>
              <p>
              On the international scene, she was part of the team that embarked on one of the first attempts in the world to eradicate measles from a town (Imesi-Ile), 
              making her one of the first nurses to give measles vaccines by gun in Africa. 
              She was a devoted Christian, a confirmed member of the Methodist Church Nigeria, a mother to all, 
              and a peace-loving member of her community. Mama breathed her last breath at precisely 6:25 pm on the 15th of March 2010.
              </p>
              
            </p>
          </div>
        </div>
      </AboutSection>
      <Footer />
    </>
  );
};
const AboutSection = styled.section`
  padding: 10rem 0;
  .about-header {
    h2 {
      padding: 3rem;
      color: #313131;
      text-align: center;
    }
  }
  .about-content {
    .about-img {
      text-align: center;
      img {
        border-radius: 50%;
        width: 25rem;
        height: 25rem;
        object-fit: contain;
      }
    }
    .about-text {
      max-width: 35rem;
      margin: 2rem auto;
      text-align: center;
      p,
      li {
        color: #2b2b2b;
        line-height: 1.6;
      }
      ol {
        text-align: left;
      }
    }
  }
  @media screen and (max-width: 765px) {
    .about-content {
      .about-img {
        img {
          width: 100%;
        }
      }
      .about-text {
        padding: 1rem;
      }
    }
  }
`;
export default About;
