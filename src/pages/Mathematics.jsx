import PageHeader from "../components/PageHeader"
import mathimg from "/images/course-single.jpg"
import "../style/course-detail.css"

const Mathematics = () => {
  return (
    <>
      <PageHeader title="Mathematics" />
      <section className="tutoring">
        <div className="container">
          <h2 className="title text-center mt-5 mb-5" style={{ fontWeight: "bold" }}>
            Mathematics Tutoring Services
          </h2>
          <div className="text-center">
            <img
              className="m-auto animate__animated animate__lightSpeedInRight"
              src={mathimg}
              alt="Mathematics Tutoring"
            />
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <h3>Curriculum-Specific Expertise</h3>
              <p>Our tailored math tutoring services cater to students from Grade 1 to Grade 12, covering multiple curricula.</p>
              <ul>
                <li><strong>UK Curriculum:</strong> Key Stages 1-5, GCSE, A-Levels.</li>
                <li><strong>USA Curriculum:</strong> Common Core Math, SAT & ACT preparation.</li>
                <li><strong>Australian Curriculum:</strong> NAPLAN preparation with a strong math foundation.</li>
                <li><strong>CBSE & International:</strong> Comprehensive math tutoring for board exams.</li>
              </ul>
            </div>

            <div className="grid-item">
              <h3>Basic Mathematics (Grades 1-5)</h3>
              <p>Building strong foundational math skills through interactive learning.</p>
              <ul>
                <li><strong>Number Sense:</strong> Whole numbers, fractions, decimals, percentages.</li>
                <li><strong>Arithmetic Operations:</strong> Addition, subtraction, multiplication, division.</li>
                <li><strong>Measurement:</strong> Time, length, weight, volume.</li>
                <li><strong>Geometry:</strong> Shapes, angles, properties.</li>
                <li><strong>Patterns and Sequences:</strong> Recognizing and creating patterns.</li>
              </ul>
            </div>

            <div className="grid-item">
              <h3>Pre-Algebra (Grades 6-7)</h3>
              <p>Developing algebraic thinking with foundational math concepts.</p>
              <ul>
                <li><strong>Integers & Rational Numbers:</strong> Positive/negative numbers, fractions.</li>
                <li><strong>Factors & Multiples:</strong> Prime factorization, GCD, LCM.</li>
                <li><strong>Ratios & Proportions:</strong> Solving ratio problems.</li>
                <li><strong>Basic Equations:</strong> One-step equations and inequalities.</li>
                <li><strong>Introduction to Graphs:</strong> Coordinate plane and plotting points.</li>
              </ul>
            </div>

            <div className="grid-item">
              <h3>Algebra I & II (Grades 8-12)</h3>
              <p>Mastering algebraic principles for academic success.</p>
              <ul>
                <li><strong>Linear Equations & Inequalities:</strong> Solving and graphing.</li>
                <li><strong>Polynomials:</strong> Operations and factoring.</li>
                <li><strong>Quadratic Functions:</strong> Factoring, completing the square.</li>
                <li><strong>Exponents & Radicals:</strong> Laws of exponents, radicals.</li>
                <li><strong>Logarithms:</strong> Log functions and applications.</li>
              </ul>
            </div>

            <div className="grid-item">
              <h3>Geometry (Grades 7-10)</h3>
              <p>Understanding spatial reasoning and geometric principles.</p>
              <ul>
                <li><strong>Basic Concepts:</strong> Points, lines, angles.</li>
                <li><strong>Triangles & Polygons:</strong> Properties and theorems.</li>
                <li><strong>Congruence & Similarity:</strong> Proving figures similar/congruent.</li>
                <li><strong>Circles:</strong> Arcs, chords, tangents, sectors.</li>
                <li><strong>Trigonometry Basics:</strong> Sine, cosine, tangent ratios.</li>
              </ul>
            </div>

            <div className="grid-item">
              <h3>Trigonometry (Grades 10-12)</h3>
              <p>Exploring advanced trigonometric concepts and applications.</p>
              <ul>
                <li><strong>Trigonometric Ratios & Functions:</strong> Sine, cosine, tangent.</li>
                <li><strong>Unit Circle:</strong> Radians, degrees.</li>
                <li><strong>Graphing Trig Functions:</strong> Sine, cosine graphs.</li>
                <li><strong>Trigonometric Identities & Equations:</strong> Proofs, applications.</li>
                <li><strong>Applications:</strong> Real-world trigonometry problems.</li>
              </ul>
            </div>

            <div className="grid-item">
              <h3>Pre-Calculus & Calculus (Grades 11-12)</h3>
              <p>Advanced mathematical topics for higher education readiness.</p>
              <ul>
                <li><strong>Functions & Graphs:</strong> Linear, quadratic, polynomial functions.</li>
                <li><strong>Limits & Continuity:</strong> Understanding calculus foundations.</li>
                <li><strong>Derivatives:</strong> Differentiation techniques and applications.</li>
                <li><strong>Integrals:</strong> Definite and indefinite integration.</li>
                <li><strong>Sequences & Series:</strong> Arithmetic, geometric series.</li>
              </ul>
            </div>

            <div className="grid-item">
              <h3>Statistics & Probability (Grades 9-12)</h3>
              <p>Developing analytical and statistical problem-solving skills.</p>
              <ul>
                <li><strong>Data Analysis:</strong> Organizing and interpreting data.</li>
                <li><strong>Measures of Central Tendency:</strong> Mean, median, mode.</li>
                <li><strong>Probability:</strong> Basic probability concepts.</li>
                <li><strong>Distributions:</strong> Normal distribution, standard deviation.</li>
                <li><strong>Inferential Statistics:</strong> Predictions and inferences.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mathematics;
