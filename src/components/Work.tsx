import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Job Tracker Agent",
    category: "Automation · AI",
    description:
      "AI-powered job application tracker — monitors Gmail with n8n, extracts company/role/status via Gemini 2.5 Flash, persists to PostgreSQL, optionally syncs to Notion, and sends a daily Slack digest.",
    tools: "n8n · Gemini 2.5 Flash · FastAPI · PostgreSQL · Notion API · Docker",
    image: "/images/job-tracker-1.png",
    link: "https://github.com/sanidhya-ai-ml/job-tracker-agent",
  },
  {
    title: "GitHub Portfolio MCP",
    category: "MCP Server · AI Tools",
    description:
      "Custom Model Context Protocol server exposing GitHub data as 8 callable AI tools — repo search, README summarisation via Gemini, issue listing, and commit history for Claude Desktop or any MCP-compatible agent.",
    tools: "MCP SDK · FastAPI SSE · GitHub REST API · Gemini 2.5 Flash · Docker",
    image: "/images/github-mcp-1.png",
    link: "https://github.com/sanidhya-ai-ml/github-portfolio-mcp",
  },
  {
    title: "Research Agent Crew",
    category: "Multi-Agent · LangGraph",
    description:
      "LangGraph supervisor-worker system with Planner, Researcher, Summariser, Fact-Checker, and Editor agents — human-in-the-loop approval before final output, Redis-backed state persistence.",
    tools: "LangGraph · LangChain · FastAPI · Redis · Tavily · OpenAI",
    image: "/images/placeholder.webp",
    link: "https://github.com/sanidhya-ai-ml/research-agent-crew",
  },
  {
    title: "DocuMind RAG",
    category: "RAG Pipeline · Document AI",
    description:
      "Production RAG API with hybrid retrieval (vector + BM25 + cross-encoder reranking), async PDF ingestion via Celery, full RAGAS evaluation dashboard, and a Streamlit demo UI.",
    tools: "LangChain · ChromaDB · RAGAS · FastAPI · Celery · Streamlit",
    image: "/images/placeholder.webp",
    link: "https://github.com/sanidhya-ai-ml/documind-rag",
  },
  {
    title: "Content Ops MCP",
    category: "n8n + MCP · Agent Pipeline",
    description:
      "n8n workflow + custom MCP server integration — triggers on Notion content briefs, calls MCP tools (SEO analyser, tone checker, image prompt generator), runs a LangChain content agent, publishes drafts back to Notion.",
    tools: "n8n · MCP Server · LangChain · FastAPI · Notion API · Docker",
    image: "/images/placeholder.webp",
    link: "https://github.com/sanidhya-ai-ml/content-ops-mcp",
  },

  // ── Production / Client Work (from résumé) ────────────────────────────
  {
    title: "GenAI Clinical Trial Verification",
    category: "LangGraph · Multi-Agent · Life Sciences",
    description:
      "Led end-to-end design of a LangGraph multi-agent pipeline automating clinical trial source data verification — mapping PDFs to CDISC ODM XML EDC records via RAG + OCR + NER, with a mismatch detection engine for full evidence traceability.",
    tools: "LangGraph · LangChain · RAG · MCP Servers · OCR · NER · FastAPI · Celery · PostgreSQL",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "MLOps Log Intelligence — Dish/Sling TV",
    category: "MLOps · Anomaly Detection",
    description:
      "Architected an end-to-end MLOps pipeline ingesting logs from 50+ servers. Built an Isolation Forest model with time-series feature engineering to predict machine failures before they occur. All experiments tracked in MLflow with automated alerting dashboards.",
    tools: "Python · Dataiku · AWS S3 · Apache Beam · Scikit-learn · GCP · Docker · MLflow",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "Sentry-B: Edge Surveillance System",
    category: "Computer Vision · Edge AI",
    description:
      "Full pipeline design and deployment on Jetson Nano — YOLOv3 person detection, DeepSORT multi-object tracking, MTCNN face extraction, and face recognition for employee vs. guest classification from live CCTV. TensorRT-optimised for real-time edge inference.",
    tools: "YOLOv3 · DeepSORT · MTCNN · PyTorch · TensorRT · Jetson Nano · OpenCV",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "AI Resume Optimization Engine",
    category: "RAG · NLP · ATS Scoring",
    description:
      "RAG-based resume evaluation system using LangChain + ChromaDB — job descriptions embedded as vectors, resumes semantically compared to surface genuine skill gaps. Custom ATS scoring engine for keyword alignment, skill relevance, and experience context.",
    tools: "LangChain · ChromaDB · FastAPI · Pydantic · OpenAI API · Embeddings",
    image: "/images/placeholder.webp",
    link: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
