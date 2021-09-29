import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import CO from "../svg/change_orders.svg";
import Oval from "../svg/oval_contact.svg";

const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        <Bg>
          <PageTitle>Contact Us</PageTitle>
        </Bg>
        <Oval />
        <Flex>
          <Card>
            <CO />
            <h2>Call Us</h2>
            <p>1-888-885-4036</p>
            <button>call Us</button>
          </Card>
          <Card>
            <CO />
            <h2>Call Us</h2>
            <p>1-888-885-4036</p>
            <button>call Us</button>
          </Card>
          <Card>
            <CO />
            <h2>Call Us</h2>
            <p>1-888-885-4036</p>
            <button>call Us</button>
          </Card>
        </Flex>

        <Contactsales>
          <h2>
            <span>Contact</span> Sales
          </h2>
          <p className="para">
            To email Sales, please fill out the form below. A team member will
            contact you within one business day.
          </p>
          <Form />
          <button>Get In Touch</button>
        </Contactsales>
      </Wrapper>
    </Layout>
  );
};

export default Contact;

const Wrapper = styled.div`
  > svg {
    width: 100%;
    margin-top: -100px;
  }
`;

const Bg = styled.div`
  background: #f4f4f4;
  margin-top: -100px;
  padding: 100px 0 50px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
  position: relative;
  margin-top: -150px;
  margin-bottom: 100px;
`;
const PageTitle = styled.h1`
  text-align: center;
  font-size: 65px;
  color: #08172b;
  line-height: 65px;
  margin: 60px 0;
`;
const Form = styled.div`
  max-width: 900px;
  height: 450px;
  background: #f4f4f4;
  text-align: center;
  padding: 20px;
  margin: auto;
`;

const Card = styled.div`
  background: white;
  width: 245px;
  border-radius: 6px;
  text-align: center;
  padding: 25px 15px;

  svg {
    width: 40px;
    height: 40px;
  }

  button {
    background: #e5e5e5;
    border-radius: 4px;
    border: none;
    width: 192px;
    padding: 15px;
    font-size: 16px;
    line-height: 19px;
    color: #8e8e8e;
    font-family: "Airbnb Cereal App bold";
    cursor: pointer;
  }
  p,
  h2 {
    font-family: "Airbnb Cereal App lighter";
    font-size: 28px;
    line-height: 30px;
  }

  &:hover {
    background: #08172b;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    color: #f4f4f4;
    path {
      fill: #f4f4f4;
    }
    button {
      background: ${({ theme }) => theme.color.p};
      color: #2a2a2a;
    }
  }
`;
const Contactsales = styled.div`
  text-align: center;
  h2 {
    font-size: 42px;
    line-height: 44px;
    span {
      color: ${({ theme }) => theme.color.p};
    }
  }
  p {
    max-width: 552px;
    margin: auto;
    padding-bottom: 50px;
  }
  button {
    max-width: 425px;
    padding: 10px 25px;
    background: ${({ theme }) => theme.color.p};
    border: none;
    font-size: 20px;
    color: #2a2a2a;
    font-family: "Airbnb Cereal App bold";
    background: #ffcc32;
    border-radius: 4px;
    padding: 15px 0px;
    width: 400px;
    text-align: center;
    margin-top: 40px;
  }
`;
