import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>MoreYeahs IT</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Led end-to-end development of a GenAI-powered clinical trial data
              verification platform for a life sciences client — LangGraph
              multi-agent orchestration, RAG retrieval strategy, and async FastAPI
              microservices with Celery task queues for concurrent document processing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>ICAR – Indian Council of Agricultural Research</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              ML workflows for agricultural datasets — data preprocessing, feature
              engineering, and model training with Scikit-learn. Conducted EDA to
              surface meaningful patterns and built predictive models supporting
              agricultural research decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Data Scientist</h4>
                <h5>MoreYeahs Technologies</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Led the Sentry-B computer vision surveillance system (YOLOv3 +
              DeepSORT + MTCNN on Jetson Nano). Built the MLOps log intelligence
              pipeline for Dish/Sling TV in Dataiku with Isolation Forest anomaly
              detection. Developed OCR-based financial document pipelines and
              LLM-powered NLP applications deployed on GCP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
