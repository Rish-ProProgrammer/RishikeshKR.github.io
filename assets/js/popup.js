document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');
const showPopupBtns = document.querySelectorAll('.show-more-btn');

showPopupBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.style.display = 'block';
    document.body.style.overflow = "hidden"; // Disable page scroll
  });
});

closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.style.overflow = "auto"; // Re-enable page scroll
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
    document.body.style.overflow = "auto"; // Re-enable page scroll
  }
});
    
//   document.querySelectorAll('.show-more-btn').forEach(button => {
//     button.addEventListener('click', function (e) {
//       e.preventDefault();

//       const box = this.closest('.box');
//       const titleText = box.querySelector('h3').innerText;

//       console.log(titleText); // 👉 "pp"
//       alert(titleText);       // test
//     });
//   });

  document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      
      const box = this.closest('.box');
      const popup = document.getElementById('popup');
      const titleText = box.querySelector('h4').innerText;
      const img2titleText = document.getElementById('img2Title');
      const popupTitle = document.getElementById('popupTitle');
      const popupText = document.getElementById('popupText');
      // Set popup title (optional)
      popupTitle.innerText = titleText;

      // // Set second text conditionally
      // if (titleText === "AI Powered Job Interview Trainer") {
      //   popupText.innerHTML = "This was my MSc Project that uses 4 modules and gives feedback for each question after answering. It uses<br>- <strong>Gaze tracking</strong> to detect if user looks straight or at other directions the most.<br>- <strong>Speech analysis</strong> to analyse metrics such as words per minute, average silence duration, etc.<br>- <strong>Gemini</strong> for custom question generation and answer evaluation.<br>- <strong>Face emotion detection</strong> to assess emotions expressed.<br>- <strong>Streamlit</strong> for GUI.<br><h4 style='text-align: center;'>Inference Pipeline</h4>";
      // } else {
      //   popupText.innerHTML = "This is the default text for other items.";
      // }
    // Conditional image
    const popupImage = document.getElementById('popupImage');
    
    const popupImage2 = document.getElementById('popupImage2');
    if (titleText === "AI Job Post Analyser") {
      popupText.innerHTML = `
  <div class="star-item">
    <div class="star-heading">Context</div>
    <div class="star-text">In a crowded job market, applicants spend hours tailoring resumes for roles they aren't actually qualified for. This tool aims to save time for the user by giving metrics like job match and competitiveness scores, and preparation materials.</div>
  </div>
  <div class="star-item">
    <div class="star-heading">Goal</div>
    <div class="star-text">Develop a useful and easy to use tool where users can enter details to get a detailed analysis of the job, resume tips and preparation materials.</div>
  </div>
  <div class="star-item">
    <div class="star-heading">Approach</div>
    <ul class="star-list">
    <li>User enters the Company, job role, job description (if available) and uploads their CV.
    <li>After CV is uploaded, important PIIs are redacted using Microsoft Presidio, and more redaction can be done by the user. This gives the necessary context without giving sensitive information.
    <li>After submitting, Gemini and YouTube APIs run and fetch various metrics such as Job Score, Competitiveness Score, company information, resume tips, interview preparation questions-answers, online sites and YouTube tutorials.
    </ul>
  </div>
  <div class="star-item">
    <div class="star-heading">Outcome</div>
    <div class="star-text">An innovative framework was developed that gives a deep insight about the job to the user, tips to improve their CV, prepare for the interview and online resources to upscale themselves.</div>
  </div>
`;
      popupImage.style.display = "none";
      popupImage2.style.display = "none";
      popupImage.alt = "Project Screenshot";
      img2titleText.style.display = "none"
    }
    else if (titleText === "AI Powered Job Interview Trainer") {
      popupText.innerHTML = `
  <div class="star-item">
    <div class="star-heading">Context</div>
    <div class="star-text">Traditional interview coaching is not readily accessible, and personalized coaching tailored to a candidate’s specific needs is often difficult to obtain. Furthermore, the rapid shift to virtual interviews has increased the demand for training tailored to virtual environments. A unified AI-powered framework that integrates multiple features is needed to support efficient, personalized and comprehensive interview readiness, especially for virtual setups.</div>
  </div>
  <div class="star-item">
    <div class="star-heading">Goal</div>
    <div class="star-text">Develop a novel framework comprising four modules: gaze tracking, emotion recognition, speech analysis and question-answer analysis using Gemini. Each module focuses on an important aspect of interview analysis, resulting in a more comprehensive feedback for the candidate. An app is also designed using Streamlit to enable candidates to train themselves, receive feedback and improve using an interactive GUI.</div>
  </div>
  <div class="star-item">
    <div class="star-heading">Approach</div>
    <ul class="star-list">
    <li>Gemini is used for question generation based on the candidate’s requirements and evaluation of answers.
    <li>Gaze tracking is implemented using a ResNet-18 model, with layer freezing, a convolutional block attention module (CBAM) layer and a dropout layer which is finetuned on eye-label pairs to track how long a candidate looks in each direction.
    <li>Facial Emotion recognition is done by training a Random Forest Classifier model on Mediapipe blendshape coefficients instead of face images.
    <li>Speech analysis is done using OpenAI's Whisper to get metrics such as words per minute, average silence duration, speech duration and more.
    <li>An app is designed using Streamlit that allows candidates to answer questions that are generated based on their chosen training focus, and to receive immediate feedback after each response.
    </ul>
  </div>
  <div class="star-item">
    <div class="star-heading">Outcome</div>
    <div class="star-text">An innovative framework was developed that demonstrated good performance in gaze tracking and emotion recognition. Using Gemini allowed for custom question generation and answer evaluation, while speech analysis gave an insight into how the candidate speaks.</div>
  </div>
  <h4 style='text-align: center;'>Inference Pipeline</h4>
`;
      popupImage.style.display = 'block'
      popupImage.src = "images/1.Inference.png";
      popupImage2.style.display = 'block'
      popupImage2.src = "images/13.Feedback.png";
      popupImage.alt = "Project Screenshot";
      img2titleText.innerText = "Output"
    }
    else if (titleText === "Job Role Recommender using Interview Recordings") {
      popupText.innerHTML = popupText.innerHTML = `
  <div class="star-item">
    <div class="star-heading">Context</div>
    <div class="star-text">Instead of using the traditional approach for Job Role Recommendation, that is,
parsing the CV and recommending based on the parsed output, the interview
recording is used as input. The interview gives a lot of information and insight about the
candidate, which can sometimes not be the case with resume analysis.</div>
  </div>
  <div class="star-item">
    <div class="star-heading">Goal</div>
    <div class="star-text">The main goal of this project is to get an audio or video recording of an interview
and then predict which department, which role in that department and the candidate’s best
soft skill. An explanation for the predicted department is also given, along with the
predicted probabilities for each department.</div>
  </div>
  <div class="star-item">
    <div class="star-heading">Approach</div>
    <ul class="star-list">
    <li>Audio to text conversion of recorded interview.
    <li>Pass the transcript along with the list of departments to the zero shot classifier to get
the predicted department.
    <li>Once predicted department is known, pass the transcript and the list of job roles
based on the predicted department to the zero shot classifier to get the best job role.
    <li>Pass the transcript along with the list of soft skills to the zero shot classifier to get
the best quality the candidate possesses.
    <li>Once all the above steps are completed, display a HTML file containing predicted
probabilities of each department with respect to the text, and the transcript with
words highlighted. These highlighted words are related to the predicted department.
This option is available only when user chooses to predict best department from all
available departments.
    </ul>
  </div>
  <div class="star-item">
    <div class="star-heading">Outcome</div>
    <div class="star-text">This project gives users the ability to automatically get the best department, job role
and quality of any candidate based on their interview recording, which will save a lot of
time and effort. This will really help in the hiring process by reducing the work of the HR
team since it provides a base which can be expanded upon.</div>
  </div>
  <h4 style='text-align: center;'>Inference Pipeline</h4>
`;
      popupImage.style.display = 'block'
      popupImage.src = "images/proj2Workflow.png";
      popupImage2.style.display = 'block'
      popupImage2.src = "images/outputProj2.png";
      popupImage.alt = "Project Screenshot";
      img2titleText.innerText = "Output"
    }
    else if (titleText === 'Master Microsoft Excel - LinkedIn') {
      // popupText.innerHTML = "Fein";
      // popupImage.src = "images/image2.png";
      // popupImage.alt = "Default Project Screenshot";
      window.open("assets/docs/CertificateOfCompletion_Master Microsoft Excel.pdf", "_blank");
      document.body.style.overflow = "auto"; // Re-enable page scroll
      popup.style.display = 'none';
    }
    else if (titleText === 'Fundamentals of Deep Learning - NVIDIA') {
      // popupText.innerHTML = "Fein";
      // popupImage.src = "images/image2.png";
      // popupImage.alt = "Default Project Screenshot";
      window.open("assets/docs/NVIDIA_cert.png", "_blank");
      document.body.style.overflow = "auto"; // Re-enable page scroll
      popup.style.display = 'none';
    }
        else if (titleText === 'Machine Learning Specialization - Stanford University (Coursera)') {
      // popupText.innerHTML = "Fein";
      // popupImage.src = "images/image2.png";
      // popupImage.alt = "Default Project Screenshot";
      window.open("assets/docs/ML_Cert.pdf", "_blank");
      document.body.style.overflow = "auto"; // Re-enable page scroll
      popup.style.display = 'none';
    }
    // if (titleText === "AI Powered Job Interview Trainer") {
    //   img2titleText.innerText = "Output"
    // }
    // Optional: set live demo & source code links dynamically
    const liveDemo = document.getElementById('liveDemo');
    const sourceCode = document.getElementById('sourceCode');

    if (titleText === "AI Powered Job Interview Trainer") {
      // liveDemo.href = "https://live-demo-pp.com";
      // sourceCode.href = "https://github.com/username/pp-project";
    } else {
      // liveDemo.href = "https://live-demo-default.com";
      // sourceCode.href = "https://github.com/username/default-project";
    }
  });
});

});