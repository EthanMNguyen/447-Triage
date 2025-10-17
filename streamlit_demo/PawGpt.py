import numpy as np
import pandas as pd
import streamlit as st
import altair as alt
import openai
#openai.api_key = st.secrets["API_key"]
import hashlib
from PIL import Image

#will add later
#def get_reply(input_string): 

      
# Define the Streamlit app
def app():
    st.set_page_config(layout="wide")
    st.markdown(
    """# backgroud gradient
    <style>
    .stApp {
    background: linear-gradient(to top, #FFBF00, #FFFFFF);
    background-size: cover;
    }
    .rounded-text-area textarea {
        border-radius: 30px; 
        border: 1px solid #ccc; 
        padding: 10px;
        font-size: 16px;
    }
    </style>
    """,
    unsafe_allow_html=True
)
    
    # Load image from file
    img = Image.open("UMBC.png")
    new_size = (150, 231)
    img = img.resize(new_size)
    st.image(img)
    
    st.title("Hi I'm PawGPT! How can I help?")
    #st.subheader("Weebsu is a chatGPT-enabled Chatbot")

    st.write("This bot can answer questions about the COEIT questions.")
    
    # Create a multiline text field
    user_input = st.text_area('Input your question:', key="rounded_text_area", placeholder="Type here...", label_visibility="visible", help="Rounded text area", args={"className":"rounded-text-area"})

    # Display the text when the user submits the form
    if st.button('Submit'):
        st.write("not completed")

    #st.write("-----------\n\nThis project of the MIS uses generative AI enhanced with specific knowledge on a set of topics. Like chatGPT, the bot can engage the user in a conversation. Using prompt engineering, we trained this AI with specific information beyond the general knowledge base of chatGPT.")
                

# Run the app
if __name__ == "__main__":
    app()
