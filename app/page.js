"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./page.css";
import logo from "../public/logo-nobg.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(logo);
  return (
    <>
      <header>
        <div class="logo-container">
          <Image className="image-logo" src={logo} />
        </div>
        <nav class="nav-bar">
          <ul>
            <li>
              <Link href="/habbits">My Habbits</Link>
            </li>
            <li>
              <Link href="/login">Sign in</Link>
            </li>
            <li>
              <Link href="/register">Sign up</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section class="intro">
          <div class="intro-img">
            {" "}
            <img
              src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-intro.png"
              alt="illustration-intro"
            />
          </div>
          <div class="intro-content">
            <h1>
              {" "}
              All your habbits in one secure location, accessible anywhere.
            </h1>

            <p class="lg-p mt-2">
              Rockh stores all your most important habbits in one place. Access them wherever you need, share and collaborate
              with friends family, and co-workers.
            </p>
           <Link href="/register"><button class="btn mt-2"> Get Started</button></Link>
          </div>
        </section>
        <section class="features">
          <div class="features-item">
            <div class="features-item-head">
              {" "}
              <img
                src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-access-anywhere.svg"
                alt=""
              />{" "}
            </div>
            <div class="features-item-body  mt-2">
              <h3>Track your habbits, anywhere</h3>

              <p>
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
          </div>

          <div class="features-item">
            <div class="features-item-head">
              {" "}
              <img
                src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-security.svg"
                alt=""
              />{" "}
            </div>
            <div class="features-item-body mt-2">
              <h3> Security you can trust</h3>
              <p>
                {" "}
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
          <div class="features-item">
            <div class="features-item-head">
              {" "}
              <img
                src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-collaboration.svg"
                alt=""
              />{" "}
            </div>
            <div class="features-item-body  mt-2">
              <h3> Real-time collaboration</h3>
              <p>
                {" "}
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
          </div>
          <div class="features-item">
            <div class="features-item-head">
              {" "}
              <img
                src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-any-file.svg"
                alt=""
              />{" "}
            </div>
            <div class="features-item-body  mt-2">
              <h3>See your progress</h3>
              <p>
                {" "}
                Rockh allows you to see your progress clearly and legibly through a graphic display.
              </p>
            </div>
          </div>
        </section>
        <section class="productive">
          <div class="productive-img">
            {" "}
            <img
              src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-stay-productive.png"
              alt=""
            />{" "}
          </div>

          <div class="productive-content">
            <h2>Stay productive, wherever you are</h2>

            <p class="lg-p">
              {" "}
              Never let location be an issue when tracking your time. Rockh has
              you covered for all of your habbits needs.{" "}
            </p>

            <p class="lg-p">
              {" "}
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <p class="lg-p">
              {" "}
              <a class="content-link" href="#">
                See how Rockh works{" "}
                <i class="fas fa-arrow-alt-circle-right"></i>
              </a>{" "}
            </p>
          </div>
        </section>

        <section class="testimonial">
          <div class="testimonial-item">
            <div class="testimonial-item-text">
              <p>
                in all fairness even though my name was the inspiration for the
                company name, I use the app and it has increased my productivity
              </p>
            </div>
            <div class="testimonial-item-reviewer">
              <div class="testimonial-item-reviewer-img">
                {" "}
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/dwayne-johnson-attends-the-jumanji-the-next-level-uk-film-news-photo-1575726701.jpg"
                  alt=""
                />
              </div>
              <div class="ml-1 testimonial-item-reviewer-text">
                <h4>Dwayne Johnson</h4>
                <p>Actor</p>
              </div>
            </div>
          </div>

          <div class="testimonial-item">
            <div class="testimonial-item-text">
              <p>
                Rockh has improved my team productivity and awerness of my time
                spending.
              </p>
            </div>
            <div class="testimonial-item-reviewer">
              <div class="testimonial-item-reviewer-img">
                {" "}
                <img
                  src="https://www.irishtimes.com/resizer/eAezOYeGpaZLNHb82grnDblczlQ=/1600x1200/filters:format(jpg):quality(70):focal(335x145:345x155)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/M4KFKUYVPZG7XKNCNGJAUJGNYA.jpg"
                  alt=""
                />
              </div>
              <div class="ml-1 testimonial-item-reviewer-text">
                <h4> Andrew Tate </h4>
                <p>Founder & CEO, Hustlers University</p>
              </div>
            </div>
          </div>

          <div class="testimonial-item">
            <div class="testimonial-item-text">
              <p>
                {" "}
                Rockh has improved our team productivity by an order of
                magnitude.
              </p>
            </div>
            <div class="testimonial-item-reviewer">
              <div class="testimonial-item-reviewer-img">
                {" "}
                <img
                  src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-3.jpg"
                  alt=""
                />
              </div>
              <div class="ml-1 testimonial-item-reviewer-text">
                <h4> Iva Boyd</h4>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </section>

        <section class="cta">
          <div class="cta-item">
            <div class="cta-text">
              <h2>Get early access today </h2>
              <p>
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>
            <form class="cta-form mt-2" action="">
              <input
                class="input-block"
                type="text"
                placeholder="example@email.com"
              />{" "}
              <button class="btn-block">Get Started For Free</button>{" "}
            </form>
          </div>
        </section>
      </main>
      <footer>
        <section class="contact-info">
          <div class="contact-info-logo">
            {" "}
            <Image src={logo} />
          </div>
          <div class="contact-info-location">
            <div class="contact-info-location-item">
              <img
                class="img-footer"
                src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-location.svg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div class="contact-info-contacts">
            <div class="contact-info-contacts-item">
              <img
                class="img-footer"
                src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-phone.svg"
                alt=""
              />
              <p>+1-543-123-4567</p>
            </div>
            <div class="contact-info-contacts-item ">
              <img
                class="img-footer"
                src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-email.svg"
                alt=""
              />
              <p>branislannjemec@gmail.com</p>
            </div>
          </div>
          <nav class="contact-info-links">
            <ul class="contact-info-links-list">
              <li>
                {" "}
                <a href="#">About Us</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Jobs</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Press</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Blog</a>{" "}
              </li>
            </ul>
            <ul class="contact-info-links-list">
              <li>
                {" "}
                <a href="#">Contact Us</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Terms</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Privacy</a>{" "}
              </li>
            </ul>
          </nav>
          <div class="contact-info-social-links">
            <a
              class="icon-link"
              href="https://www.instagram.com/branislav_njemec/"
            >
              <div class="contact-info-social-link-item flex-center">
                {" "}
                <FaInstagram />
              </div>
            </a>

            <a
              class="icon-link"
              href="https://www.linkedin.com/in/branislav-njemec/"
            >
              <div class="contact-info-social-link-item flex-center">
                {" "}
                <FaLinkedin />
              </div>
            </a>

            <a class="icon-link" href="https://github.com/njemecc">
              <div class="contact-info-social-link-item flex-center">
                {" "}
                <FaGithub />
              </div>
            </a>
          </div>
          <div class="attribution-container">
            <p class="attribution">
              . Coded by{" "}
              <a href="https://www.linkedin.com/in/branislav-njemec/">
                Njemecc
              </a>
              .
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}
