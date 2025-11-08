# 🐾 PawGPT – Virtual Triage System
An AI-powered assistant designed to streamline communication at UMBC’s College of Engineering and IT

## 🚀 Overview
PawGPT is an intelligent virtual triage chatbot built to reduce email overload and provide instant, accurate answers to frequently asked questions about the UMBC College of Engineering and Information Technology (COEIT).

By leveraging OpenAI’s GPT-4.0-nano, Pinecone, and n8n, PawGPT ingests website and document content to create a dynamic, searchable knowledge base. Students, staff, and visitors can chat with PawGPT to get quick answers about courses, faculty, and department policies without having to wait for human assistance.


## 🧠 Core Features
✅ Knowledge Base Ingestion

- Automatically pulls and processes data from the COEIT website and uploaded documents.

- Converts text into vector embeddings using GPT-4.0-nano and stores them in Pinecone.

- Seamlessly updates whenever new information is added.

💬 Question Answering (RAG-Powered)

- Users can ask natural-language questions through a clean web interface.

- PawGPT retrieves relevant information using semantic search and returns grounded answers.

- If no answer is found, it automatically escalates to COEIT staff via email.

⚙️ Workflow Automation with n8n

- All interactions between the frontend, GPT model, and database are orchestrated through low-code workflows in n8n.

- Ensures reliability, transparency, and modular design.

📊 Data Integrity and Transparency

- Every response is traceable to a verified FAQ or website source.

- Data ingestion logs maintain accuracy and auditability.

📱 Responsive and Accessible UI

- Built with React and TailwindCSS for a modern, adaptive interface.

- Works seamlessly on desktops and tablets

🧩 System Architecture

- Frontend: React + TailwindCSS
- Backend Orchestration: n8n (low-code automation)
- LLM: OpenAI GPT-4.0-nano
- Vector Database: Pinecone
- Hosting: Github

## 💡 Core Use Cases

1. Student Inquiry:
Students ask PawGPT a question → system retrieves and returns an accurate answer within seconds.

2. Admin Update:
Staff upload new information → system automatically updates the knowledge base.

## ⚙️ Data Flow Summary

- Admin uploads or updates content on COEIT website.

- n8n triggers ingestion → content chunked → embeddings created via GPT-4.0-nano → stored in Pinecone.

- Student asks a question → n8n triggers search workflow → retrieves relevant vectors → GPT formulates response.

- If no match → automatic email escalation to COEIT staff.

## 👥 Team 4
- Scrum Master: Khoi Nguyen
- Developers: Kameron Frazer, Ethan Nguyen, Luke Kudwa
- Subject Expert: Prof. Samit Shivadekar
- Stakeholder: Rosalie Bacon, CSEE Administrative Assistant

## 🧾 License

This project was developed for educational and departmental use under UMBC’s COEIT initiative. All rights reserved to the development team and COEIT.