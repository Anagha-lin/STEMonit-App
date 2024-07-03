![home page](https://github.com/Anagha-lin/STEMonit-App/assets/135278326/c48f5bd9-f635-44ab-bf1c-2fa04e265b2f)

## STEMonIT-App![quiz page](https://github.com/Anagha-lin/STEMonit-App/assets/135278326/133cb6f2-35f3-40db-ad57-de2d2e3a28b0)


The STEMonIT project is an application designed for young students to examine their knowledge of STEM subjects.

## Project Proposal: STEMonIT - Enhancing STEM Education Through Interactive Quizzes

**Tagline:** Making STEM Learning Fun and Easy!

### 1.0 Introduction
STEMonIT is a web application aimed at enhancing STEM (Science, Technology, Engineering, and Mathematics) education through interactive quizzes. The platform will provide students and educators with a user-friendly interface to engage in fun and educational quizzes covering various STEM topics. By offering an accessible and enjoyable learning experience, STEMonIT aims to supplement traditional teaching methods and encourage active participation in STEM subjects.

### 2.0 Team
The development of STEMonIT will be carried out by a single engineer, ensuring a streamlined and efficient workflow. The responsibilities of each role will be consolidated into one individual, maximizing accountability and minimizing dependencies.

**Anagha Linus:** Frontend Developer, QA Tester & Documentation Specialist  
In this combined role, Anagha Linus will be responsible for all aspects of the project, including frontend development, quality assurance testing, and documentation. This approach simplifies project management and allows for a cohesive and focused development process. With Anagha Linus at the helm, STEMonIT will benefit from a dedicated and versatile engineer capable of delivering a high-quality product from inception to completion.

### 3.0 Technologies
**Frontend:**
- **HTML:** Markup language for structuring web pages.
- **CSS:** Stylesheet language for defining the presentation of web pages.
- **Java:** Programming language for supporting quiz functionalities.

### 4.0 Challenge

#### Problem Statement:
In Africa, many students face significant challenges in understanding STEM concepts. Traditional learning methods often fail to captivate their interest, leading to disengagement and hindered academic progress. This is particularly concerning as STEM fields are crucial for the continent's development and innovation.

STEMonIT aims to address this pressing need by providing an engaging and user-friendly platform for STEM education. By leveraging technology and interactive quizzes, STEMonIT seeks to revolutionize the way African students learn and engage with STEM subjects. Through this initiative, we aspire to empower the next generation of African scientists, engineers, and innovators, driving progress and prosperity across the continent.

**Intended Users:**
STEMonIT targets students and educators at various educational levels who are seeking additional resources and tools for learning and teaching STEM subjects. The platform will cater to users globally, without being specific to any particular locale.

**Locale Dependency:**
STEMonIT acknowledges the linguistic diversity across Africa while recognizing the current practicality of focusing on English as the primary language for content delivery. As such, the application is designed to be universally accessible, prioritizing English as the language of instruction to ensure widespread reach and ease of use.

### 5.0 Risks
**Technical Risks:**
- Frontend Interactivity: Ensuring smooth and responsive user interaction may pose a technical challenge.
- User Interface Responsiveness: Designing a user interface that works seamlessly across different devices and screen sizes.

**Non-technical Risks:**
- User Engagement: The success of the application relies on engaging users effectively and keeping them motivated to participate in quizzes.
- Usability Issues: Potential difficulties in navigating the platform or understanding quiz instructions could impact user satisfaction.
- Content Relevance: Ensuring that quiz questions are relevant and aligned with educational objectives to maintain user interest.

### 6.0 Infrastructure
**Branching and Merging:**
since the project is conducted solely by the author, there was no need for branching and merging.

**Deployment Strategy:**
The deployment process will involve serving static files directly. This approach simplifies deployment by eliminating the need for complex server configurations and database setups.

**Data Population:**
Initial quiz questions will be manually entered into the application. Additionally, provisions will be made for dynamically adding more questions through the frontend interface, thereby catering for the lack of backend involvement in data management.

**Testing:**
Manual testing will be performed to evaluate usability and identify any potential issues or bugs.

### 7.0 Existing Solutions
**Similar Products:**
Existing platforms such as Khan Academy, Quizizz, and Kahoot offer similar features for interactive learning and quizzes in various subjects, including STEM.

**Differentiation:**
STEMonIT aims to differentiate itself by focusing specifically on STEM education, providing tailored content and quizzes to enhance understanding in these subjects. Unlike some existing platforms that incorporate social features, STEMonIT prioritizes simplicity and educational content.

**Reimplementation Justification:**
While existing solutions offer similar functionality, STEMonIT is developed from scratch to ensure customization for STEM education. By building the platform in-house, I have been able to align the features and content with the specific needs of STEM learners and educators.


## STEMonIT MVP Specification

### 1.0 Architecture
The architecture of the STEMonIT platform is designed to facilitate seamless interaction between users and quizzes using only Java, HTML, and CSS.

#### 1.1 Components
**Client Side (Frontend):**
The client side, or frontend, of STEMonIT is responsible for rendering the user interface and enabling interaction with the web application. It utilizes HTML, CSS, and Java to create a dynamic and engaging experience for users.

- **HTML (Hypertext Markup Language):** Used for structuring the content of web pages, defining the layout and elements such as text, images, and buttons. It provides the foundation for presenting quizzes, educational materials, and navigation controls.
- **CSS (Cascading Style Sheets):** Employed to style the HTML elements, defining their appearance, layout, and visual effects. This includes aspects such as colors, fonts, spacing, and responsiveness, ensuring a visually appealing and consistent presentation across different devices.
- **Java:** Adds interactivity and dynamic behavior to the frontend. It handles user interactions, such as submitting quiz answers, navigating between pages, and fetching quiz data.

### 1.2 Data Flow
The data flow in STEMonIT involves the seamless movement of information between different components within the client side.

**1. User Interaction (Frontend):**
- Users interact with the frontend interface of STEMonIT, where they can access quizzes, educational content, and track their progress.
- User interactions, such as selecting quiz topics, answering questions, and navigating through the application, generate requests that are handled within the Java code embedded in the frontend.

**2. Quiz Handling (Java):**
- Java code processes the requests from the user, such as fetching quiz questions, validating user responses, and updating user progress.
- Quiz questions and user data are stored and managed locally within the application, ensuring that the entire process is handled on the client side.

**3. User Feedback (Frontend):**
- The frontend receives the processed data from the Java code and presents the information to the user through the interface.
- Users can view quiz questions, submit answers, review educational content, and track their progress based on the data provided by the Java code.
- Any user actions or feedback, such as submitting quiz answers or navigating to different sections, initiate new interactions, restarting the data flow cycle.

### 2.0 Data Model
The data model for the STEMonIT platform will consist of simple structures to store information about quizzes, questions, and user progress within the client side.

**Entities:**
1. **Quiz:**
    - Attributes: quizId, title, description.
    - Relationships: A quiz can have multiple questions.

2. **Question:**
    - Attributes: questionId, quizId, questionText, options (array), correctAnswer.
    - Relationships: A question belongs to a specific quiz.

3. **UserProgress:**
    - Attributes: userId, quizId, score, attemptedAt.

### 3.0 User Interface
The user interface for the STEMonIT platform will be designed to be simple and user-friendly. Here are the key UI elements:

#### 3.1 Homepage
The homepage will provide users with an overview of the platform, including navigation to quizzes, about the application and navigation to features.

#### 3.2 Quiz Interface
The quiz interface will display quiz questions and options, allowing users to select their answers and submit them. It will also show the user's score and provide feedback on their performance.

 4.0 Deployment Strategy
The deployment strategy for STEMonIT involves serving static files directly. This approach simplifies deployment by eliminating the need for complex server configurations and database setups. Here's an overview of the deployment process:

1. **Frontend Deployment:**
    - The frontend application will be built and packaged into static files (HTML, CSS, JavaScript).
    - These static files will be served directly by a web server, such as Nginx or Apache, ensuring fast and reliable delivery to users.
