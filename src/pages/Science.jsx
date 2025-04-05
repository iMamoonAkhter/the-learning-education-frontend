import PageHeader from "../components/PageHeader";
import scienceImg from "/images/Mthedemic_Science_Tutoring_Services.png";
import "../style/course-detail.css";

const ScienceTutoring = () => {
  return (
    <>
      <PageHeader title="Science" />
      <section className="tutoring">
            <div className="container">
                <h2 className="title text-center mt-5 mb-5" style={{ fontWeight: "bold" }} >Science Tutoring Services</h2>
                <div className="text-center">
                    <img className="m-auto animate__animated animate__lightSpeedInRight" src={scienceImg} width={"60%"} alt="" />
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <h3>Curriculum-Specific Expertise</h3>
                        <p>We offer specialized tutoring across multiple curricula, ensuring students excel in science subjects.</p>
                        <ul>
                            <li><strong>UK Curriculum:</strong> Key Stages 1-4, covering biology, chemistry, and physics.</li>
                            <li><strong>USA Curriculum:</strong> NGSS & AP courses, including SAT & ACT preparation.</li>
                            <li><strong>Australian Curriculum:</strong> NAPLAN preparation with scientific inquiry skills.</li>
                            <li><strong>CBSE & International:</strong> General and specialized science tutoring.</li>
                        </ul>
                    </div>
        
                    <div className="grid-item">
                        <h3>General Science (Grades 1-5)</h3>
                        <p>Young learners develop foundational scientific knowledge through engaging and interactive lessons.</p>
                        <ul>
                            <li>Scientific Method, Living & Non-living Things</li>
                            <li>Basic Human Biology, Earth & Space Science</li>
                            <li>Plants & Animals, Matter & Energy</li>
                        </ul>
                    </div>
        
                    <div className="grid-item">
                        <h3>Intermediate Science (Grades 6-8)</h3>
                        <p>Students explore deeper concepts in biology, chemistry, and physics with real-world applications.</p>
                        <ul>
                            <li>Ecosystems, Cell Biology, Human Body Systems</li>
                            <li>Earth Science, Chemistry & Physics Introduction</li>
                        </ul>
                    </div>
        
                    <div className="grid-item">
                        <h3>Advanced Science (Grades 9-12)</h3>
                        <p>High school students receive in-depth subject knowledge to prepare for exams and higher education.</p>
                        <ul>
                            <li>Chemistry: Atomic Structure, Periodic Table, Chemical Bonding</li>
                            <li>Physics: Mechanics, Forces & Gravitation</li>
                            <li>Electronics: Electric Circuits, Kirchhoff’s Laws</li>
                        </ul>
                    </div>
        
                    <div className="grid-item">
                        <h3>Chemistry Tutoring</h3>
                        <p>Master chemistry concepts with expert guidance tailored to your curriculum and learning needs.</p>
                        <ul>
                            <li><strong>Foundation Level (Grades 6-8):</strong>
                                <ul>
                                    <li>Matter & Its States: Solids, liquids, gases, and plasma.</li>
                                    <li>Atomic Structure: Protons, neutrons, electrons, isotopes.</li>
                                    <li>Periodic Table: Understanding element properties & trends.</li>
                                    <li>Chemical Reactions: Balancing equations, reactants & products.</li>
                                </ul>
                            </li>
                            <li><strong>Intermediate Level (Grades 9-10):</strong>
                                <ul>
                                    <li>Chemical Bonding: Ionic, covalent, metallic bonding.</li>
                                    <li>Moles & Stoichiometry: Avogadro’s number, molar mass calculations.</li>
                                    <li>Energy Changes: Exothermic vs endothermic reactions.</li>
                                </ul>
                            </li>
                            <li><strong>Advanced Level (Grades 11-12):</strong>
                                <ul>
                                    <li>Thermochemistry: Enthalpy, entropy, Gibbs free energy.</li>
                                    <li>Organic Chemistry: Functional groups, reaction mechanisms.</li>
                                    <li>Electrochemistry: Redox reactions, voltaic & electrolytic cells.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
        
                    <div className="grid-item">
                        <h3>Physics Tutoring</h3>
                        <p>Unlock the secrets of the universe with expert physics tutoring for all levels.</p>
                        <ul>
                            <li><strong>Foundation Level (Grades 6-8):</strong>
                                <ul>
                                    <li>Motion & Forces: Speed, velocity, acceleration, Newton’s Laws.</li>
                                    <li>Energy & Work: Kinetic & potential energy, conservation of energy.</li>
                                    <li>Electricity & Magnetism: Basic circuits, voltage, current.</li>
                                </ul>
                            </li>
                            <li><strong>Intermediate Level (Grades 9-10):</strong>
                                <ul>
                                    <li>Newtonian Mechanics: Equations of motion, momentum.</li>
                                    <li>Waves & Optics: Reflection, refraction, wave-particle duality.</li>
                                    <li>Electromagnetism: Magnetic fields, transformers.</li>
                                </ul>
                            </li>
                            <li><strong>Advanced Level (Grades 11-12):</strong>
                                <ul>
                                    <li>Quantum Mechanics: Photoelectric effect, Schrödinger equation.</li>
                                    <li>Relativity & Cosmology: Einstein’s theories, black holes.</li>
                                    <li>Thermal Physics: Kinetic theory, heat engines.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
        
                    <div className="grid-item">
                        <h3>Exam Preparation</h3>
                        <p>We provide targeted preparation for major exams, ensuring students are fully prepared.</p>
                        <ul>
                            <li><strong>Chemistry Exams:</strong> GCSE, IGCSE, A-Level, AP, IB Chemistry.</li>
                            <li><strong>Physics Exams:</strong> GCSE, IGCSE, A-Level, AP Physics 1 & 2, IB Physics.</li>
                            <li><strong>Test Strategies:</strong> Past papers, time management, and problem-solving techniques.</li>
                        </ul>
                    </div>
        
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default ScienceTutoring;
