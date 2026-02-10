document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');
const showPopupBtns = document.querySelectorAll('.show-more-btn');

showPopupBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.style.display = 'block';
  });
});

closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
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
      popupText.innerHTML = "This was my MSc Project that uses 4 modules and gives feedback for each question after answering. It uses<br>- <strong>Gaze tracking</strong> to detect if user looks straight or at other directions the most.<br>- <strong>Speech analysis</strong> to analyse metrics such as words per minute, average silence duration, etc.<br>- <strong>Gemini</strong> for custom question generation and answer evaluation.<br>- <strong>Face emotion detection</strong> to assess emotions expressed.<br>- <strong>Streamlit</strong> for GUI.<br><h4 style='text-align: center;'>Inference Pipeline</h4>";
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
      popup.style.display = 'none';
    }
    else if (titleText === 'Fundamentals of Deep Learning - NVIDIA') {
      // popupText.innerHTML = "Fein";
      // popupImage.src = "images/image2.png";
      // popupImage.alt = "Default Project Screenshot";
      window.open("assets/docs/NVIDIA_cert.png", "_blank");
      popup.style.display = 'none';
    }
        else if (titleText === 'Machine Learning Specialization - Stanford University (Coursera)') {
      // popupText.innerHTML = "Fein";
      // popupImage.src = "images/image2.png";
      // popupImage.alt = "Default Project Screenshot";
      window.open("assets/docs/ML_Cert.pdf", "_blank");
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