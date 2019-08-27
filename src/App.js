import React from 'react';
import './App.css';


function App() {

  const s1 = {
    fontFamily: "Times New Roman",
    textAlign: "center"
  };
  const s2 = {
    backgroundColor: "transparent",
    padding: "20px",
    textAlign: "center"
  };
  const s3 = {
    display: "inline-block",
    width: "100px",
    height: "100px",
    border: "1px",
    backgroundColor: "transparent",
    paddingLeft: "80px"
  };
  const s4 = {
    fontFamily: "Times New Roman",
    textAlign: "left",
    paddingLeft: "0px"
  };
  const s5 = {
    width: "30%",
    backgroundColor: "transparent",
    padding: "40px",
    float: "left"
  };
  const s6 = {
    paddingTop: "25px",
    float: "left"
  };

  return (
    <div className="App" style={{backgroundImage:"url('Assets/Images/bgwallpaper.jpg')" }}> 
  

      <header style={s2}>
        <img src={('Assets/Images/Photo.jpg')} alt="passport Photo" style={{width:"150px", height:"150px", float:'left'}}></img>
        <h1 style={s1}><b><u>Anshuman Pradhan</u></b></h1>
      </header>

      <section>

        <article style={s5}>
          <div>

            <div style={s4}>
              <strong><u>Details:</u></strong>
              <div class="a">

                <ul>
                  <li>Associate Software Engineer</li>
                  <li>At GoodWorkLabs</li>
                  <li>Experience: 1 Month</li>
                </ul>
              </div>

              <div>
                <ul>
                  <b><u>Address of Communication:</u></b>
                  <li>E-Mail ID: anshuman@goodworklabs.com</li>
                  <li>Mob No.: +91-9090279800</li>
                </ul>
              </div>

              <div>
                <ul>
                  <b><u>Academic Details:</u></b>
                  <li>Mechanical Engg.(B.Tech)</li>
                  <li>Institute of Technical Education & Research</li>
                </ul>
              </div>

              <div>
                <ol>
                  <b><u>Subject of Interest:</u></b>
                  <li>Full Web Stack Developer</li>
                  <li>Machine Learning</li>
                </ol>
              </div>

              <div>
                <ol>
                  <b><u>Programming Proficiency:</u></b>
                  <li> HTML,CSS,JavaScript</li>
                  <li>Core Java, C++</li>
                </ol>
              </div>

              <div>
                <ol>
                  <b><u>Personal Details:</u></b>
                  <li>Languages Known: English, Odia, Hindi</li>
                  <li>Hobbies: Playing Badminton, Football</li>
                </ol>
              </div>

            </div>

          </div>

        </article>


        <aside style={s6}>
          <div style={s4}>

            <div><ul>
              <b><u>Summer Training:</u></b>
              <li>Organization:	Ashok Leyland Technical Centre (ALTC) , Chennai</li>
              <li>Duration: 	2 months, 15th May, 2017 - 14th July, 2017</li>
            </ul>
            </div>

            <div><ul>
              <li>Organization:	Central Tool Room & Training Room (CTTC), Bhubaneswar</li>
              <li>Duration: 	2 weeks, 25th June, 2015 - 9th July, 2015</li>
            </ul>
            </div>

            <div><ul>
              <b><u>Projects Undertaken:</u></b>
              <li>Organization:  American Society of Mechanical Engineers</li>
              <li>Mode: Competition</li>
            </ul>
            </div>

            <div>
              <ol>
                <b><u>Accolades:</u></b>
                <li> Took ITER into finals of ASME HPVC E-Fest Asia Pacific conducted by ASME,<br />
                  India in Jaipur, Rajasthan.</li>
                <li> Awarded "Passed with Merit" in the Business English Certificate Preliminary (BEC)<br />
                  conducted by Cambridge English Language Assessment.</li>
              </ol>
            </div>

            <div>
              <ol>
                <b><u>Extra-Curricular:</u></b>
                <li> Student Member of ASME S'O'A Student Chapter.</li>
                <li>Represented ITER in various Robotics competitions across Odisha.</li>
              </ol>
            </div>

          </div>
        </aside>

      </section>
    </div>
   
  );
}

export default App;
