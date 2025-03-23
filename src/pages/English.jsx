import PageHeader from "../components/PageHeader";
import englishImg from "/images/course-single.jpg";
import "../style/course-detail.css";

const EnglishTutoring = () => {
  return (
    <>
      <PageHeader title="English" />
      <section className="tutoring">
        <div className="container">
          <h2 className="title text-center mt-5 mb-5" style={{ fontWeight: "bold" }}>
            Comprehensive English Tutoring Services
          </h2>
          <div className="text-center">
            <img className="m-auto animate__animated animate__lightSpeedInRight" src={englishImg} alt="English Tutoring" />
          </div>
          <div className="grid-container">
            {/* Curriculum-Specific Expertise */}
            <div className="grid-item">
              <h3>Curriculum-Specific Expertise</h3>
              <p>We provide specialized English tutoring aligned with various educational curricula.</p>
              <ul>
                <li><strong>UK Curriculum:</strong> Covers key stages, literary analysis for GCSEs and A-Levels.</li>
                <li><strong>USA Curriculum:</strong> Common Core standards, SAT & ACT preparation.</li>
                <li><strong>Australian Curriculum:</strong> NAPLAN preparation, reading and writing skills.</li>
                <li><strong>International Curricula:</strong> Comprehensive language skills development.</li>
              </ul>
            </div>

            {/* Basic English Skills */}
            <div className="grid-item">
              <h3>Basic English Skills (Grades 1-5)</h3>
              <ul>
                <li><strong>Phonics & Early Reading:</strong> Building foundational reading skills.</li>
                <li><strong>Spelling & Vocabulary Development:</strong> Expanding word knowledge.</li>
                <li><strong>Grammar Fundamentals:</strong> Understanding sentence structure.</li>
                <li><strong>Reading Comprehension:</strong> Enhancing understanding of texts.</li>
                <li><strong>Creative Writing:</strong> Encouraging expression through storytelling.</li>
              </ul>
            </div>

            {/* Intermediate English Skills */}
            <div className="grid-item">
              <h3>Intermediate English Skills (Grades 6-8)</h3>
              <ul>
                <li><strong>Advanced Grammar & Sentence Structures:</strong> Refining writing accuracy.</li>
                <li><strong>Vocabulary Expansion:</strong> Learning complex words and meanings.</li>
                <li><strong>Essay Writing & Argumentation:</strong> Developing structured writing skills.</li>
                <li><strong>Reading & Literary Analysis:</strong> Analyzing themes and narratives.</li>
                <li><strong>Critical Thinking & Interpretation:</strong> Understanding deeper meanings in texts.</li>
              </ul>
            </div>

            {/* Advanced English Skills */}
            <div className="grid-item">
              <h3>Advanced English Skills (Grades 9-12)</h3>
              <ul>
                <li><strong>Complex Grammar & Syntax:</strong> Mastering advanced language structures.</li>
                <li><strong>In-depth Literary Analysis:</strong> Examining texts critically.</li>
                <li><strong>Essay & Research Paper Writing:</strong> Strengthening academic writing skills.</li>
                <li><strong>Standardized Test Preparation:</strong> SAT, ACT, GCSEs, A-Levels readiness.</li>
              </ul>
            </div>

            {/* Creative Writing Enhancement */}
            <div className="grid-item">
              <h3>Creative Writing Enhancement</h3>
              <p>We inspire students to develop their storytelling skills and unique writing styles.</p>
            </div>

            {/* Why Choose Us */}
            <div className="grid-item">
              <h3>Why Choose Our English Tutoring?</h3>
              <ul>
                <li><strong>Personalized Learning Plans:</strong> Tailored lessons to fit each student's needs.</li>
                <li><strong>Expert Tutors with Extensive Experience:</strong> Qualified educators to guide learning.</li>
                <li><strong>Flexible Scheduling Options:</strong> Convenient tutoring times.</li>
                <li><strong>Proven Success:</strong> Improved grades and boosted confidence.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnglishTutoring;
