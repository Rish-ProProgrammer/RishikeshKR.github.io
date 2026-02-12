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
    if (titleText === "AI Powered Job Interview Trainer") {
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
      popupImage.src = "images/1.Inference.png";
      popupImage2.src = "images/13.Feedback.png";
      popupImage.alt = "Project Screenshot";
      img2titleText.innerText = "Output"
    }
    else if (titleText === "Job Role Recommender using Interview Recordings") {
      popupText.innerHTML = "In this project, I made a web app using <strong>Streamlit</strong>. The user can upload an <strong>audio/video recording</strong> of the interview. I used <strong>OpenAI's Whisper</strong> model and <strong>zero shot classifier</strong> to categorize the interview into 1 of 7 departments. Based on the department and the interview, a suitable job role is suggested.<h4 style='text-align: center;'>Inference Pipeline</h4>";
      popupImage.src = "images/proj2Workflow.png";
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