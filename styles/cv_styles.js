export const cv_styles = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

body {
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  position: relative;
  width: 100%;
  /* max-width: 100vw;
  min-height: 100vh; */
  max-width: 1100px;
  min-height: 1000px;
  margin: 50px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);
}

.container .left_Side {
  position: relative;
  background: #003147;
  padding: 40px;
}

.container .right_Side {
  position: relative;
  background: #fff;
  padding: 40px;
}

.profileText {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.profileText .imgBx {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.profileText .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profileText h2 {
  color: #fff;
  font-size: 1.5em;
  margin-top: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  line-height: 1.4em;
}

.profileText h2 span {
  font-size: 0.8em;
  font-weight: 300;
}

.contactInfo {
  padding-top: 25px;
}

.title {
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.contactInfo ul {
  position: relative;
}

.contactInfo ul li {
  position: relative;
  list-style: none;
  margin: 10px 0;
}

.contactInfo ul li .icon {
  display: inline-block;
  width: 30px;
  font-size: 18px;
  color: #03a9f4;
}

.contactInfo ul li span {
  color: #fff;
  font-weight: 300;
}
.contactInfo ul li {
  font-size: 0.9em; /**Tamaño de letra de contacto*/
}
.contactInfo.education li {
  margin-bottom: 15px;
}
.contactInfo.education h5 {
  color: #03a9f4;
  font-weight: 500;
}

.contactInfo.education h4:nth-child(2) {
  color: #fff;
  font-weight: 500;
}

.contactInfo.education h4 {
  color: #fff;
  font-weight: 300;
}

.contactInfo.language .percent {
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #081921;
  display: block;
  margin-top: 5px;
}

.contactInfo.language .percent div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #03a9f4;
}
.about {
  margin-bottom: 50px;
}

.about:last-child {
  margin-bottom: 0;
}

.title2 {
  color: #003147;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
p {
  color: #333;
}

.about .box {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
}
.about .box .year_company {
  min-width: 150px;
}

.about .box .year_company h5 {
  text-transform: uppercase;
  color: #848c90;
  font-weight: 600;
}

.about .box .text h4 {
  text-transform: uppercase;
  color: #2a7da2;
  font-size: 16px;
}

.skills .box {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-content: center;
  align-items: center;
}

.skills .box h4 {
  text-transform: uppercase;
  color: #848c99;
  font-weight: 500;
}

/*Deprecated**/
.skills .box .percent {
  position: relative;
  width: 100%;
  height: 10px;
  background: #f0f0f0;
}

/*Deprecated**/
.skills .box .percent div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #03a9f4;
}

.skills .box div ul {
  display: flex;
}
.skills .box div ul li {
  margin-right: 20px;
  list-style: none;
}

.interest ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.interest ul li {
  list-style: none;
  color: #333;
  font-weight: 500;
  margin: 10px 0;
}

.interest ul li .fa {
  color: #03a9f4;
  font-size: 18px;
  width: 20px;
}

@media (max-width: 1000px) {
  .container {
    margin: 0px;
    grid-template-columns: repeat(1, 1fr);
  }
  .interest ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1100px) {
  .container {
    margin: 0px;
  }
}

@media screen and (max-width: 600px) {
  .about .box {
    flex-direction: column;
  }
  .about .box .year_company {
    margin-bottom: 5px;
  }
  .interest ul {
    grid-template-columns: repeat(1, 1fr);
  }

  .skills .box {
    grid-template-columns: repeat(1, 1fr);
  }
  .skills .box div ul {
    flex-direction: column;
  }
  .container {
    margin: 0;
  }
}



`