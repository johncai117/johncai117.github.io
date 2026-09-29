import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(10%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--white);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'LLM Pretraining Data',
    'Large Language Models',
    'Evals & Benchmarks',
    'Recommender Systems',
    'Video Understanding, Computer Vision',
    'PyTorch, TensorFlow',
    'PySpark, SQL',
    'Python',
    'C++',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm John, a Machine Learning Engineer excited about using machine learning to
              solve real world problems. My goal is to translate innovative algorithms into scalable
              products that impact millions of users.
            </p>

            <p>
              Currently, I work on pretraining data and data curation at{' '}
              <a href="https://reflection.ai">Reflection AI</a>.
            </p>

            <p>
              Before that, I was at Meta Superintelligence Labs, where I built auto-evals for
              Generative AI, supporting the launch of{' '}
              <a href="https://about.fb.com/news/2025/09/introducing-vibes-ai-videos/">Vibes</a>. My
              work there led to <a href="https://arxiv.org/abs/2608.13167">TRAPSBench</a> (COLM
              2026), which shows that vision-language models internally know when a question can't
              be answered, but fail to say so.
            </p>

            <p>
              Previously, I worked on the Applied Research team at Snap Inc, where I focused on
              using computational statistics to improve recommender systems, with an oral
              presentation at <a href="https://arxiv.org/pdf/2211.01547">CODE@MIT</a>.
            </p>

            <p>
              I enjoy working at the intersection of research and engineering and have published
              research in the area of deep learning and fine-tuning under limited data settings at{' '}
              <a href="https://www.learning-with-limited-labels.com/challenge">CVPR VL3</a> and{' '}
              <a href="https://l2id.github.io">CVPR L2ID</a>.
            </p>

            <p>Here's what I've been up to lately: </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
