import "./styles/TechStack.css";

const skillGroups = [
  {
    label: "GenAI & Agents",
    skills: [
      "LangChain", "LangGraph", "RAG", "MCP Servers",
      "Multi-Agent Systems", "Prompt Engineering",
      "Fine-tuning (LoRA/PEFT)", "RAGAS", "OpenAI API", "Hugging Face",
    ],
  },
  {
    label: "ML & Deep Learning",
    skills: [
      "PyTorch", "TensorFlow", "Scikit-learn",
      "Transformers", "NLP", "Embeddings", "CNN",
    ],
  },
  {
    label: "Computer Vision",
    skills: ["YOLOv3", "DeepSORT", "MTCNN", "TensorRT", "OpenCV"],
  },
  {
    label: "Backend & APIs",
    skills: ["Python", "FastAPI", "Celery", "Redis", "Pydantic", "Async", "SQL"],
  },
  {
    label: "MLOps & Cloud",
    skills: ["GCP", "AWS S3", "Docker", "Kubernetes", "MLflow", "Apache Beam", "Dataiku", "Git"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "ChromaDB", "Pinecone", "FAISS", "NoSQL"],
  },
  {
    label: "Automation",
    skills: ["n8n", "Apache Beam"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <div className="techstack-inner">
        <h2 className="techstack-heading">
          My Tech <span>Stack</span>
        </h2>
        <p className="techstack-sub">
          2+ years shipping production AI systems across GenAI, MLOps, computer vision, and NLP.
        </p>

        <div className="techstack-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="techstack-group">
              <h5 className="techstack-label">{group.label}</h5>
              <div className="techstack-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="techstack-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
