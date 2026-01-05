import {
    FaPython, FaJava, FaDocker, FaAws, FaLinux, FaGitAlt, FaJira, FaNodeJs, FaReact, FaNetworkWired, FaBrain, FaRobot, FaDatabase, FaServer, FaCode, FaCloud
} from "react-icons/fa";
import {
    SiCplusplus, SiTypescript, SiGo, SiDjango, SiSpring, SiDotnet,
    SiExpress, SiGooglecloud, SiKubernetes, SiTerraform, SiJenkins,
    SiGithubactions, SiDatadog, SiPrometheus, SiPostgresql, SiMongodb,
    SiAmazonrds, SiRedis, SiApachekafka, SiRabbitmq, SiGraphql,
    SiJest, SiCypress, SiSelenium, SiGnubash, SiJsonwebtokens,
    SiPytorch, SiTensorflow, SiHuggingface, SiApachespark, SiNvidia,
    SiFastapi, SiNextdotjs, SiMlflow, SiWeightsandbiases, SiApacheflink // Removed SiOpenai as it might not be perfect for everything, kept needed ones
} from "react-icons/si";
import { TbApi, TbCloudComputing, TbSettingsAutomation, TbNetwork, TbArrowAutofitContent } from "react-icons/tb";
import { BiNetworkChart, BiLockAlt, BiData } from "react-icons/bi";
import { MdOutlineDesignServices, MdModelTraining, MdEngineering } from "react-icons/md";
import { VscCopilot } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";

export const skillIcons = {
    // Languages
    "Python": FaPython,
    "Go": SiGo,
    "TypeScript": SiTypescript,
    "Java": FaJava,
    "C++": SiCplusplus,

    // Web & SaaS
    "React": FaReact,
    "Next.js": SiNextdotjs,
    "SaaS": FaCloud,
    "Multi-Tenancy": FaNetworkWired,

    // AI & LLM Engineering
    "LoRA": MdModelTraining,
    "QLoRA": MdModelTraining,
    "RAG Architecture": BiData,
    "Multi-Agent Systems": FaRobot,
    "CrewAI": FaRobot, // Generic Robot
    "LangChain": GiArtificialIntelligence, // Generic AI
    "LangGraph": BiNetworkChart,
    "LlamaIndex": FaDatabase, // Indexing -> Databaseish
    "Prompt Engineering": FaCode,
    "LLM Evaluation (Ragas, DeepEval)": TbArrowAutofitContent,

    // Frameworks & ML
    "PyTorch": SiPytorch,
    "TensorFlow": SiTensorflow,
    "HuggingFace": SiHuggingface,
    "vLLM": FaServer,
    "TGI": FaServer,
    "TensorRT-LLM": SiNvidia,
    "PySpark": SiApachespark,

    // Distributed Training & Inference
    "DeepSpeed": MdEngineering,
    "FSDP/ZeRO": MdEngineering,
    "Ray": BiNetworkChart,
    "Triton Inference Server": SiNvidia,
    "CUDA": SiNvidia,
    "NCCL": SiNvidia,

    // Cloud & MLOps
    "AWS (SageMaker, Bedrock, EKS)": FaAws,
    "GCP": SiGooglecloud,
    "Docker": FaDocker,
    "Kubernetes": SiKubernetes,
    "MLflow": SiMlflow,
    "W&B": SiWeightsandbiases,
    "CI/CD": SiJenkins,
    "Model Monitoring": MdModelTraining,
    "A/B Testing": TbSettingsAutomation,
    "GPU/TPU Autoscaling": SiNvidia,

    // Data & Streaming
    "Kafka": SiApachekafka,
    "Kinesis": FaAws,
    "Flink": SiApacheflink,
    "PostgreSQL": SiPostgresql,
    "DynamoDB": FaAws,
    "Vector DBs (FAISS, Pinecone)": FaDatabase,

    // Backend & Systems
    "FastAPI": SiFastapi,
    "Node/Express": FaNodeJs,
    "gRPC": TbNetwork,
    "Microservices": FaNetworkWired,
    "System Design": MdOutlineDesignServices,
    "OAuth2": BiLockAlt,
    "JWT": SiJsonwebtokens,
    "Unix": FaLinux
};
